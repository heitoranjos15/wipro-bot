const { NotFound, InvalidData } = require('../../server/error')

module.exports = (error) => {
  if (error.array) {
    return { status: 422, message: error.array() }
  }
  if (error instanceof NotFound) {
    return { status: 404, message: error.message }
  }
  if (error instanceof InvalidData) {
    return { status: 400}
  }
  return { status: 500 , message: "Unexpected Error"}
}
