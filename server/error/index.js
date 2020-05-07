/**
 * @module utils/error
 * @method [utils/error] ApiError
 * @version v.1.0
 * @description Inherits from {Error} and adds api specific information with a descriptor property
 */
class NotFound extends Error {
}

class InvalidData extends Error{
}

module.exports = {
  NotFound,
  InvalidData
}
