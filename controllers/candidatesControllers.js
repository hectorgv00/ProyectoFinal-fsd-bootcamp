const models = require("../models/index");
const jsonwebtoken = require("jsonwebtoken");
const {
  assertValidPasswordService,
  assertEmailIsValid,
  encryptPassword,
} = require("../services/authServices");
const candidatesEndpoints = {};
const { Op } = require("sequelize");
const { sequelize } = require("../models/index");
const { QueryTypes } = require("sequelize");

candidatesEndpoints.newCandidate = async (req, res) => {
  try {
    let userBody = req.body;
    let { password, email } = userBody;
    try {
      assertValidPasswordService(password);
    } catch (error) {
      res.status(400).json({
        success: false,
        message: `Invalid password. Password must be at least 8 characters long, must have at least one lower case letter, must have at least one upper case letter must have at least one number  ${error.message}`,
      });
      return;
    }

    try {
      assertEmailIsValid(email);
    } catch (error) {
      res.status(400).json({
        success: false,
        message: `Email is invalid  ${error.message}`,
      });
      return;
    }

    const hash = encryptPassword(password);

    await models.Candidates.create({
      email: userBody.email,
      password: hash,
      name: userBody.name,
      surname: userBody.surname,
    });

    res.status(200).json({
      success: true,
      message: `The candidate ${userBody.name} has been created successfully`,
    });
    return;
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

candidatesEndpoints.loginCandidate = async (req, res) => {
  try {
    let userBody = req.body;
    let { password, email } = userBody;
    const hashedPassword = encryptPassword(password);

    const userFound = await models.Candidates.findOne({
      where: { email: email },
    });

    if (!userFound) {
      res.status(401).json({
        message: "Password or email is incorrect",
      });
      return;
    }

    if (hashedPassword !== userFound.password) {
      res.status(401).json({ message: "Password or email is incorrect" });
      return;
    }

    const secret = process.env.JWT_SECRET || "ghuireosghuios789345ghuljkdfgs";

    if (secret.length < 10) {
      res.status(400).json({
        success: false,
        message: "JWT Secret has not been set",
      });
    }

    const jwt = jsonwebtoken.sign(
      {
        id: userFound.id,
        name: userFound.name,
        email: userFound.email,
        rol: "candidate",
      },
      secret
    );

    res.status(200).json({
      message: "Login successful",
      jwt: jwt,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

candidatesEndpoints.findByName = async (req, res) => {
  try {
    const { name } = req.params;
    const users = await models.user.findAll({
      where: {
        name: {
          [Op.like]: `%${name}%`,
        },
      },
    });
    return res.status(200).json(users);
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = candidatesEndpoints;
