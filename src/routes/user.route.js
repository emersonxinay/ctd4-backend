const express = require('express')
const { userController } = require("../controllers");
const checkAuth = require('../middlewares/checkAuth');
const router = express.Router()

router.route("/")
    .get(checkAuth, userController.getUserInfo)
router.route("/:userId")
    .put(checkAuth, userController.updateUser)
router.route('/:userId/educational')
    .get(checkAuth, userController.getEducationalProfiles)


module.exports = router

