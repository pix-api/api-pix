const pix = require('.')

const main = async () => {
  const session = await pix.login(process.env.USERNAME, process.env.PASSWORD)

  const account = await session.account()
  console.log(account)
  const profile = await session.profile()
  console.log(profile)
}

main()
