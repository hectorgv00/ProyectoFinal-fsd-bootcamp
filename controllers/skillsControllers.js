const models = require("../models/index");
const jsonwebtoken = require("jsonwebtoken");
const { Op } = require("sequelize");

const skillsEndpoints = {};

skillsEndpoints.createSkill = async (req, res) => {
  try {
    const { authorization } = req.headers;
    const [bearer, jwt] = authorization.split(" ");
    const payload = jsonwebtoken.verify(jwt, process.env.JWT_SECRET);
    const { name, image_URL } = req.body;

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
        image_URL: image_URL,
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

skillsEndpoints.getAllSkills = async (req, res) => {
  try {
    const data = await models.Skills.findAll();

    res.status(200).json({
      success: true,
      message: data,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

skillsEndpoints.getSkillByName = async (req, res) => {
  try {
    const { name } = req.params;

    const data = await models.Skills.findAll({
      where: {
        name: {
          [Op.like]: `${name}%`,
        },
      },
    });

    res.status(200).json({
      success: true,
      message: data,
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

skillsEndpoints.modifySkill = async (req,res) => {
    try {
        const { authorization } = req.headers;
        const [strategy, jwt] = authorization.split(" ");
        const payload = jsonwebtoken.verify(jwt, process.env.JWT_SECRET);

        try {
          let {name, newName, image_URL} = req.body;
          console.log(name)
          let resp = await models.Skills.update({
            name: newName,
            image_URL:image_URL,
          },{where: {name:name}});

          res.status(200).json({
            success: true,
            message: `The skill ${newName} has been updated`,
          });    

        } catch (error) {
            res.status(400).json({
                success: false,
                message: "The skill could not be updated" + error.message,
              });      
              }
        
              
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
          });      
    }
}

module.exports = skillsEndpoints;
