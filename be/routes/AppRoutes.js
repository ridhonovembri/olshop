const express = require('express')
const route = express.Router()
const user = require('../controllers/UserController')

route.get('/api/user/getusers', user.getAllUser)
route.post('/api/user/register', user.register)
route.post('/api/user/login', user.login)


module.exports = route