const express = require('express')
const authRoute = express.Router()
const jwt = require('jsonwebtoken')
const { HMAC_SHA256 } = require('../shared/constants.js')
const authMiddleware = require('../middlewares/auth.middleware.js')
const { STANDARD_RESPONSES } = require('../shared/utilities.js')


authRoute
    .post('/login', (req, res) => {
        try {
            const username = req.body.username
            const password = req.body.password
            STANDARD_RESPONSES.ok(res, `Password ok`)
        } catch (error) {
            STANDARD_RESPONSES.error(res, error)
        }
    })
    .post('/changePassword', authMiddleware, (req, res) => {
        try {
            const username = req.body.username
            const oldPassword = req.body.oldPassword
            const newPassword = req.body.newPassword
            STANDARD_RESPONSES.ok(res, `Password changed`)
        } catch (error) {
            STANDARD_RESPONSES.error(error)
        }
    })



module.exports = { authRoute: authRoute }
