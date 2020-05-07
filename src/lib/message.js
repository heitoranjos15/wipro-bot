const { NotFound, InvalidData } = require('../../server/error')
const { message: queriesMessage, conversation: queriesConversation } = require('../queries')

const getMessage = async (code, conversation) => {
  let messageFounded
  try {
    if (code) {
      messageFounded = await queriesMessage.getMessageByCode(code)
    } else if(conversation){
      messageFounded = await queriesMessage.getMessageByConversation(parseInt(conversation))
    } else {
      messageFounded = await queriesMessage.getMessages()
    }
  
    if(!messageFounded || !messageFounded.length) throw new NotFound(`Conversation not exist`)
    
  } catch (error) {
    console.log(error)
    throw error
  }
  
  return messageFounded
}

const addMessage = async (conversation, text) => {
  try {
    const { id: conversationCode } = await queriesConversation.getConversationByCode(conversation)
    await queriesMessage.addMessage(conversationCode, text)
  } catch (error) {
    console.log(error)
    throw new InvalidData()
  }
}

module.exports = {
  getMessage,
  addMessage
}
