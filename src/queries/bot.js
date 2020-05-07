const { models } = require('../models')

const addBot = name => models.Bot.create({ name })

const updateBot = (code, name) => models.Bot.update(
  { name },
  { where: { id: code } }
)

const deleteBot = code => models.Bot.destroy({ where: { id: code } })

const getBotByCode = async code => models.Bot.findOne({
  where: { id: code }
})

const getBots = async () => models.Bot.findAll()

module.exports = {
  addBot,
  updateBot,
  deleteBot,
  getBots,
  getBotByCode
}