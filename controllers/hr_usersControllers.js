const models = require("../models/index");
const jsonwebtoken = require("jsonwebtoken");
const {
  assertValidPasswordService,
  assertEmailIsValid,
  encryptPassword,
} = require("../services/authServices");
const hr_usersEndpoints = {};

hr_usersEndpoints.registerHr_user = async (req, res) => {
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

    await models.HR_Users.create({
      email: userBody.email,
      password: hash,
      username: userBody.username,
    });

    res.status(200).json({
      success: true,
      message: `The HR_User ${userBody.username} has been created successfully`,
    });
    return;
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

hr_usersEndpoints.loginHr_user = async (req, res) => {
  try {
    let userBody = req.body;
    let { password, email } = userBody;
    const hashedPassword = encryptPassword(password);

    const userFound = await models.HR_Users.findOne({
      where: { email: email },
    });

    if (!userFound) {
      res
        .status(401)
        .json({
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
        username: userFound.username,
        email: userFound.email,
        rol: "HR_User",
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

module.exports = hr_usersEndpoints;
