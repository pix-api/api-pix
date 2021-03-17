  
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
      profile = response.data.included.map(res => res.attributes)
      profile.score = response.data.data.attributes
    })
    .catch(error => {
      console.error(error)
    })


  return profile
}
