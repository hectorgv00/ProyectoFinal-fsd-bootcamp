const express = require('express');
const router = express.Router();
const hr_usersEndpoints = require('../controllers/hr_usersControllers');


router.post("/register", hr_usersEndpoints.registerHr_user)
router.post("/login", hr_usersEndpoints.loginHr_user)

module.exports = router;
