# Pix.js
Bibliothèque non officel de Pix afin de faciliter les appels à l'API de Pix sur des projets Node.js

## Utilisation
```js
const pix = require('.')

const main = async () => {
  const session = await pix.login(process.env.USERNAME, process.env.PASSWORD)

  //Afficher les détails du compte
  const account = await session.account()
  console.log(account)
  
  //Afficher les statistiques du compte
  const profile = await session.profile()
  console.log(profile)
  
  //Afficher les détatils la/des certification(s)
  const certification = await session.certification()
  console.log(certification)
}

main()
```
