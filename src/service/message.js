const { validationResult } = require('express-validator')
const { message } = require('../lib')
const errorHandler = require('./errorHandler')

const listMessage = async (req, res) => {
  try {
    validationResult(req).throw()
    const { code } = req.params
    const { conversation } = req.query
    res.send(await message.getMessage(code, conversation))
  } catch (error) {
    const { status, message } = errorHandler(error)
    res.status(status).send({ message })
  }
}

const addMessage = async(req, res) => {
  try {
    validationResult(req).throw()
    const { conversation, text } = req.body
    res.send(await message.addMessage(conversation, text))
  } catch (error) {
    const { status, message } = errorHandler(error)
    res.status(status).send({ message })
  }
}

module.exports = {
  listMessage,
  addMessage
}
