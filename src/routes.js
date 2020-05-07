const router = require('express').Router()


router.get('/health', (req, res) => {
  res.send({ 'health': true })
})

module.exports = router
