const bcrypt = require('bcryptjs');
const userModel = require("../models/userModel");


async function userSignUpController(req, res) {
    try {
        if (!req.body) {
            throw new Error("Request body is missing");
        }

        const { email, password, name } = req.body;

        const user = await userModel.findOne({ email });
console.log("user",user)

        if (user) {
            throw new Error("Already user exits.");
        }


        if (!email) {
            throw new Error("Please provide email");
        }
        if (!password) {
            throw new Error ("Please provide password");
        }
        if (!name) {
            throw new Error("Please provide name");
        }

        const salt = bcrypt.genSaltSync(10);
        const hashPassword = await bcrypt.hashSync(password, salt);

        const payload = {
            ...req.body,
            role: "GENERAL",
            password: hashPassword
        };

        const userData = new userModel(payload);
        const saveUser = await userData.save();

        res.status(201).json({
            data: saveUser,
            success: true,
            error: false,
            message: "User created Successfully!"
        });







    } catch (err) {
        console.log("err", err.message)
        res.status(400).json({
            message: err.message || err,
            error: true,
            success: false,
        });
    }
}


module.exports = userSignUpController