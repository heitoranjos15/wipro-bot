const { NotFound, InvalidData } = require('../../server/error')
const { conversation: queriesConversation, bot: queriesBot } = require('../queries')
const uuid = require("uuid")

const getConversation = async (code) => {
  let conversationFounded
  try {
    if (code) {
      conversationFounded = await queriesConversation.getConversationByCode(code)
    } else {
      conversationFounded = await queriesConversation.getConversations()
    }
  
    if(!conversationFounded || !conversationFounded.length) throw new NotFound(`Conversation not exist`)
    
  } catch (error) {
    console.log(error)
    throw error
  }
  
  return conversationFounded
}

const addConversation = async (bot) => {
  try {
    const userId = uuid.v4()
    const { id: botCode } = await queriesBot.getBotByCode(bot)
    await queriesConversation.addConversation(userId, botCode)
  } catch (error) {
    console.log(error)
    throw new InvalidData()
  }
}

module.exports = {
  getConversation,
  addConversation
}
