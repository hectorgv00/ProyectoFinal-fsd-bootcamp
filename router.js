const express = require("express");
const router = express.Router();
const candidatesRoutes = require('./routes/candidatesRoutes')

router.use('/candidates', candidatesRoutes)

module.exports = router;
