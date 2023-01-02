const models = require("../models/index");
const jsonwebtoken = require("jsonwebtoken");

const skillsEndpoints = {};

skillsEndpoints.createSkill = async (req, res) => {
  try {
    const { authorization } = req.headers;
    const [bearer, jwt] = authorization.split(" ");
    const payload = jsonwebtoken.verify(jwt, process.env.JWT_SECRET);
    const { name } = req.body;

    const unique = await models.Skills.findOne({
      where: { name: name },
    });

    if (unique) {
      res.status(400).json({
        success: false,
        message: `The skill ${name} has already been created`,
      });
    } else {
      const data = await models.Skills.create({
        name: name,
        HRUserId: payload.id,
      });

      res.status(200).json({
        success: true,
        message: "Skill created",
        data,
      });
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = skillsEndpoints;
