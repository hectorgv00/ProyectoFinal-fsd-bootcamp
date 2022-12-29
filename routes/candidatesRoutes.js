const express = require('express');
const router = express.Router();
const candidatesEndpoints = require("../controllers/candidatesControllers");

router.post("/register", candidatesEndpoints.newCandidate)
router.post("/login", candidatesEndpoints.loginCandidate)

module.exports = router;
