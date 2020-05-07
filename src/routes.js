const router = require('express').Router()
const { bot, conversation, message } = require('./service')


router.get('/health', (req, res) => {
  res.send({ 'health': true })
})

router.get('/bot', (req, res) => {
  bot.listBot(req, res)
})

router.get('/bot/:code', (req, res) => {
  bot.listBot(req, res)
})

router.post('/bot', (req, res) => {
  bot.addBot(req, res)
})

router.patch('/bot/:code', (req, res) => {
  bot.updateBot(req, res)
})

router.delete('/bot/:code', (req, res) => {
  bot.deleteBot(req, res)
})

router.get('/conversation', (req, res) => {
  conversation.listConversation(req, res)
})

router.get('/conversation/:code', (req, res) => {
  conversation.listConversation(req, res)
})

router.post('/conversation', (req, res) => {
  conversation.addConversation(req, res)
})

router.get('/messages', (req, res) => {
  message.listMessage(req, res)
})

router.get('/messages/:id', (req, res) => {
  message.listMessage(req, res)
})

router.post('/messages', (req, res) => {
  message.addMessage(req, res)
})

module.exports = router
