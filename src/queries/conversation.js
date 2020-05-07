const { models } = require('../models')

const addConversation = (userId, botCode) => models.Conversation.create({ userId, bot: botCode })

const getConversationByCode = async code => models.Conversation.findOne({
  where: { id: code }
})

const getConversations = async () => models.Conversation.findAll()

module.exports = {
  addConversation,
  getConversationByCode,
  getConversations
}