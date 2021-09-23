const jwt = require('jsonwebtoken')
const { HMAC_SHA256 } = require('../shared/constants')
const { STANDARD_RESPONSES } = require('../shared/utilities')

const authMiddleware = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1]
    const decoded = jwt.verify(token, HMAC_SHA256)
    req.userData = decoded
    req.user
    next()
  } catch (error) {
    return STANDARD_RESPONSES.unauthorized(res)
  }
}

module.exports = authMiddleware