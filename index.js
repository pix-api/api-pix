const axios = require('axios')
const params = new URLSearchParams()
params.append('grant_type', 'password')
params.append('scope', 'mon-pix')

let config = {
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
  }
}
const session = {}

module.exports.login = async (username, password) => {
  params.append('username', username)
  params.append('password', password)

  await axios.post('https://app.pix.fr/api/token', params, config)
    .then(response => {
      const token = response.data.access_token

      session.token = token
      config = {
        headers: {
          Authorization: 'Bearer ' + token
        }
      }
    })
    .catch(error => {
      console.error(error)
    })

  await axios.get('https://app.pix.fr/api/users/me', config)
    .then(response => {
      session.me = response.data.data
    })
    .catch(error => {
      console.error(error)
    })

  return session
}
