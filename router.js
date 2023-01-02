const express = require("express");
const router = express.Router();
const candidatesRoutes = require('./routes/candidatesRoutes')
const hr_usersRoutes = require('./routes/hr_usersRoutes')
const skillsRoutes = require("./routes/skillsRoutes")


router.use('/candidates', candidatesRoutes)
router.use('/hr_users', hr_usersRoutes)
router.use('/skills', skillsRoutes)

module.exports = router;
