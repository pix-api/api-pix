# Pix.js
Bibliothèque non officel de Pix afin de faciliter les appels à l'API de Pix sur des projets Node.js

## Utilisation
```js
const pix = require('pix.js')

const username = "Nom d'utilisateur"
const password = 'Mots de passe'

const main = async () => {
  const session = await pix.login(username, password)
}

main()
```