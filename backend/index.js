const express = require('express');
const cors = require('cors');
require('dotenv').config();

const connectDB = require('./config/db');
const router = require('./routes');
const app = express();

app.use(cors());
app.use(express.json());
 
// router
app.use("/api", router);

const PORT = process.env.PORT || 3500;

// มองโกว
connectDB().then(() => {
    app.listen(PORT, () => {
        console.log("Success connect Data");
        console.log(`Server running on port ${PORT}`);
    });
});
