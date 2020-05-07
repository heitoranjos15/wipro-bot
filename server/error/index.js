/**
 * @module utils/error
 * @method [utils/error] ApiError
 * @version v.1.0
 * @description Inherits from {Error} and adds api specific information with a descriptor property
 */
class ConversationNotFound extends Error {
}

class MessageNotFound extends Error {
}

module.exports = {
  ConversationNotFound,
  MessageNotFound
}
