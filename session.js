const fs = require('fs')
const session = {}

module.exports = (token, userId) => {
  session.token = token
  session.userId = userId

  fs.readdirSync('./api')
    .filter(file => (file.indexOf('.') !== 0) && (file.endsWith('.js')))
    .forEach(file => {
      file = file.slice(0, -3)
      session[file] = () => require('./api/' + file)(token, userId)
    })

  return session
}
