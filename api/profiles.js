  
const axios = require('axios')
let profile

module.exports = async (token, userId) => {
  const config = {
    headers: {
      Authorization: 'Bearer ' + token
    }
  }

 await axios.get(`https://app.pix.fr/api/users/${userId}/profile`, config)
    .then(response => {
      session.profile = response.data.included.map(res => res.attributes)
    })
    .catch(error => {
      console.error(error)
    })

  delete account.relationships

  return profile
}
