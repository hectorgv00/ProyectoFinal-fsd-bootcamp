const express = require('express');
const router = express.Router();
const skillsEndpoints = require('../controllers/skillsControllers');
const { isValidRole, authBearerMiddleware } = require('../middleware/auth.middleware');


router.post("/create", authBearerMiddleware, isValidRole("HR_User"), skillsEndpoints.createSkill)
router.get("/all", authBearerMiddleware, skillsEndpoints.getAllSkills)
router.get("/:name", authBearerMiddleware, skillsEndpoints.getSkillByName)
router.patch("/modify", authBearerMiddleware, isValidRole("HR_User"), skillsEndpoints.modifySkill)

module.exports = router;
