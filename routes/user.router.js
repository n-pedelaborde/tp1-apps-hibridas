import express from 'express'
const route = express.Router()
import * as UserController from '../controllers/user.controllers.js'

route.route('/')
  .get(UserController.allProjects)
  .get(function (req, res) {
    res.render('main')
  })
  
export default route