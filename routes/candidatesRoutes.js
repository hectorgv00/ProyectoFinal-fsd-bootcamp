const express = require('express');
const router = express.Router();
const candidatesEndpoints = require("../controllers/candidatesControllers");
const { isValidRole } = require('../middleware/auth.middleware');

router.post("/register", candidatesEndpoints.newCandidate)
router.post("/login", candidatesEndpoints.loginCandidate)
router.get("/findbyname/:name", isValidRole("HR_User"), candidatesEndpoints.findByName)

module.exports = router;
