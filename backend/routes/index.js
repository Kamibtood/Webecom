const express = require("express");
const router = express.Router();


const userSignUpController = require("../controller/userSignUp");

router.post('/signup', userSignUpController);
router.post('/signin', userSignUpController);

module.exports = router;