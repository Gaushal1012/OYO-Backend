const express = require("express");
const router = express.Router();
const Urls = require("./src/Common/Urls");

//Controller
const UserController = require("./src/Controller/User");

//User Routes
router.post(`${Urls.Registration}`, UserController.Registration);

module.exports = router;