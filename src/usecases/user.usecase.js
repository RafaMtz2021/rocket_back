const User = require ('../models/user.model')

async function createUser(user) {
  const createUser = await User.create(user)
}

module.exports = {
  createUser,

}
