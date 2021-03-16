# Pix.js
Bibliothèque non officel de Pix afin de faciliter les appels à l'API de Pix sur des projets Node.js

## Utilisation
```js
const pix = require('.')

const main = async () => {
  const session = await pix.login(process.env.USERNAME, process.env.PASSWORD)

  const account = await session.account()
  console.log(account)
  const profile = await session.profile()
  console.log(profile)
}

main()
```
