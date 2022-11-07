import express from 'express'
import * as ImagenesApiController from '../controllers/imagenes.api.controllers.js'

const route = express.Router()

route.route('/api/projects/:idProject/imagenes')
    .get(ImagenesApiController.verImagenes)
    .post(ImagenesApiController.imagenNueva)

route.route('/api/projects/:idProject/imagenes/:idImagen')
    .delete(ImagenesApiController.borrarImagen)

export default route