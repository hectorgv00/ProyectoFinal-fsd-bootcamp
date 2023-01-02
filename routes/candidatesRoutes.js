const express = require('express');
const router = express.Router();
const candidatesEndpoints = require("../controllers/candidatesControllers");

router.post("/register", candidatesEndpoints.newCandidate)
router.post("/login", candidatesEndpoints.loginCandidate)
router.get("/findbyname/:name", candidatesEndpoints.findByName)

module.exports = router;
