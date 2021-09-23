const express = require("express");
const app = express();
const helmet = require('helmet');
const cors = require("cors");
const { authRoute } = require('./routes/auth.route')

//#region middlewares

app.use(cors());
app.use(helmet());
app.use(express.json())
app.use(express.urlencoded({
    extended: true
}))

// routes
app.use(`/api/auth`, authRoute)

//#endregion

module.exports = app