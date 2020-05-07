const { MessageNotFound, ConversationNotFound } = require('../../server/error')

module.exports = (error) => {
  if (error.array) {
    return { status: 422, message: error.array() }
  }
  if (error instanceof MessageNotFound) {
    return { status: 404, message: error.message }
  }
  if (error instanceof ConversationNotFound) {
    return { status: 400, message: error.message }
  }
}
