const express = require('express');
const router = express.Router();
const skillsEndpoints = require('../controllers/skillsControllers');
const { isValidRole } = require('../middleware/auth.middleware');


router.post("/create", isValidRole("HR_User"), skillsEndpoints.createSkill)

module.exports = router;
