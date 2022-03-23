const express = require('express')
const user = require('../routers/user.router')
const logger = require('../middlewares/logger')
const cors = require('cors')
const server = express()

//Middleware
server.use(cors({
	origin:'*'
}))

server.use(express.json())
server.use(logger)

//Routes
server.use('/user',user)

module.exports = server
