  
const axios = require('axios')
let certification

module.exports = async (token, userId) => {
  const config = {
    headers: {
      Authorization: 'Bearer ' + token
    }
  }

 await axios.get(`https://app.pix.fr/api/certifications`, config)
    .then(response => {
      certification = response.data.data
    })
    .catch(error => {
      console.error(error)
    })


  return certification
}
