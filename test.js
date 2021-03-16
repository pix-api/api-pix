const pix = require('.')

const main = async () => {
  const session = await pix.login(process.env.USERNAME, process.env.PASSWORD)
  console.log(session)
}

main()
