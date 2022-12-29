const express = require('express');
const router = express.Router();
const candidatesEndpoints = require("../controllers/candidatesControllers");

router.post("/register", candidatesEndpoints.newCandidate)

module.exports = router;
