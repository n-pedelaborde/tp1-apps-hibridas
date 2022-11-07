import express from 'express'
import * as TestimoniosApiController from '../controllers/testimonios.api.controllers.js'

const route = express.Router()

route.route('/api/projects/:idProject/testimonios')
    .get(TestimoniosApiController.allTestimonios)
    .post(TestimoniosApiController.newTestimonio)

route.route('/api/projects/:idProject/testimonios/:idTestimonio')
    .delete(TestimoniosApiController.borrarTestimonio)

export default route