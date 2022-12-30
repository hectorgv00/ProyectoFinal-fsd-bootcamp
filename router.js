const express = require("express");
const router = express.Router();
const candidatesRoutes = require('./routes/candidatesRoutes')
const hr_usersRoutes = require('./routes/hr_usersRoutes')
router.use('/candidates', candidatesRoutes)
router.use('/hr_users', hr_usersRoutes)

module.exports = router;
