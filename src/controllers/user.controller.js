const user = require('../usecases/user.usecase')

async function createUser(request,response) {
  try {
      const newUser = request.body
      const createUser = await user.createUser(newUser)
      response.statusCode = 201
      response.json({
          success: true,
          message: 'User succesfully created!',
          data: {
              recipe: newUser,
          }
      })
  } catch (error) {
      console.error(error);
      response.statusCode = 500
      response.json({
          success: false,
          message: 'Could not create user',
          error,
      })
  }
}

module.exports = {
  createUser,

}