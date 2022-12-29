const models = require("../models/index");
const jsonwebtoken = require("jsonwebtoken");
const { assertValidPasswordService, assertEmailIsValid, encryptPassword } = require("../services/authServices");
const candidatesEndpoints = {};

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
          return
    }

    const hash = encryptPassword(password);

    await models.Candidates.create({
        email: userBody.email,
        password: hash,
        name: userBody.name,
        surname: userBody.surname,
    })

    res.status(200).json({
        success: true,
        message: `The candidate ${userBody.name} has been created successfully`,
      });
      return
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = candidatesEndpoints;
