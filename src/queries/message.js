const { models } = require('../models')

const addMessage = (conversation, text) => models.Message.create({ conversation, text })

const getMessageByCode = code => models.Message.findOne({
  include: [{ model: models.Conversation }],
  where: { id: code }
})

const getMessageByConversation = conversation => models.Message.findOne({
  include: [{ model: models.Conversation }],
  where: { conversation }
})

const getMessages = () => models.Message.findAll({
  include: [{ model: models.Conversation }]
})

module.exports = {
  addMessage,
  getMessageByCode,
  getMessageByConversation,
  getMessages
}