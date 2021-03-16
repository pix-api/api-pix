const axios = require('axios')
let account

module.exports = async token => {
  const config = {
    headers: {
      Authorization: 'Bearer ' + token
    }
  }

  await axios.get('https://app.pix.fr/api/users/me', config)
    .then(response => {
      account = response.data.data
    })
    .catch(error => {
      console.error(error)
    })

  delete account.relationships

  return account
}
