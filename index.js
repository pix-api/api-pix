const axios = require('axios')
const params = new URLSearchParams()
params.append('grant_type', 'password')
params.append('scope', 'mon-pix')

const config = {
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
  }
}
let session

module.exports.login = async (username, password) => {
  params.append('username', username)
  params.append('password', password)

  await axios.post('https://app.pix.fr/api/token', params, config)
    .then(response => {
      const data = response.data
      session = require('./session')(data.access_token, data.user_id)
    })
    .catch(error => {
      console.error(error)
    })

  return session
}
