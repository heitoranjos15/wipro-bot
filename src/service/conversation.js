const { validationResult } = require('express-validator')
const { conversation } = require('../lib')
const errorHandler = require('./errorHandler')

const listConversation = async (req, res) => {
  try {
    validationResult(req).throw()
    const { code } = req.params
    res.send(await conversation.getConversation(code))
  } catch (error) {
    const { status, message } = errorHandler(error)
    res.status(status).send({ message })
  }
}

const addConversation = async (req, res) => {
  try {
    validationResult(req).throw()
    const { botId } = req.body
    await conversation.addConversation(botId)
    res.status(201).send()
  } catch (error) {
    const { status, message } = errorHandler(error)
    res.status(status).send({ message })
  }
}

module.exports = {
  listConversation,
  addConversation
}
