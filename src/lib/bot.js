const { NotFound, InvalidData } = require('../../server/error')
const { bot: queriesBot } = require('../queries')

const getBot = async (code) => {
  let botFounded
  
  if (code) {
    botFounded = await queriesBot.getBotByCode(code)
  } else {
    botFounded = await queriesBot.getBots()
  }

  if(!botFounded) throw new NotFound(`Bot ${code} not exist`)
  
  return botFounded
}

const addBot = async (name) => {
  try {
    await queriesBot.addBot(name)
  } catch (error) {
    throw new InvalidData()
  }
}

const updateBot = async (code, name) => {
  try {
    await queriesBot.updateBot(code, name)
  } catch (error) {
    throw new InvalidData()
  }
}

const deleteBot = async (code) => {
  try {
    await queriesBot.deleteBot(code)
  } catch (error) {
    throw new InvalidData()
  }
}

module.exports = {
  getBot,
  addBot,
  updateBot,
  deleteBot
}
