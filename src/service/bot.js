const { validationResult } = require('express-validator')
const { bot } = require('../lib')
const errorHandler = require('./errorHandler')

const listBot = async (req, res) => {
  try {
    validationResult(req).throw()
    const { code } = req.params
    res.send(await bot.getBot(code))
  } catch (error) {
    const { status, message } = errorHandler(error)
    res.status(status).send({ message })
  }
}

const addBot = async (req, res) => {
  try {
    validationResult(req).throw()
    const { name } = req.body
    await bot.addBot(name)
    res.status(201).send()
  } catch (error) {
    const { status, message } = errorHandler(error)
    res.status(status).send({ message })
  }
}

const updateBot = async (req, res) => {
  try {
    validationResult(req).throw()
    const { code } = req.params
    const { name } = req.body
    await bot.updateBot(code, name)
    res.status(201).send()
  } catch (error) {
    const { status, message } = errorHandler(error)
    res.status(status).send({ message })
  }
}

const deleteBot = async (req, res) => {
  try {
    validationResult(req).throw()
    const { code } = req.params
    await bot.deleteBot(code)
    res.status(201).send()
  } catch (error) {
    const { status, message } = errorHandler(error)
    res.status(status).send({ message })
  }
}

module.exports = {
  listBot,
  addBot,
  updateBot,
  deleteBot
}
