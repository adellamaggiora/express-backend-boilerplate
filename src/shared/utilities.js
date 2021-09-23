const R = require('ramda')

const baseResponse = R.curry((res, code, resObj) => res.status(code).json(resObj))

const ok = (res, message, content) => baseResponse(res, 200, { message: message, content: content })
const error = (res, err) => baseResponse(res, 505, { error: err.message || err })
const unprocessableEntity = (res) => baseResponse(res, 422, { message: `Unprocessable entity` })
const unauthorized = (res) => baseResponse(401, { res, message: `User is not allowed to the route` })


const STANDARD_RESPONSES = {
    ok: ok,
    unprocessableEntity: unprocessableEntity,
    unauthorized: unauthorized,
    error: error
}


module.exports = { STANDARD_RESPONSES }