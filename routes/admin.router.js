import express from 'express'
const route = express.Router()
import * as AdminController from '../controllers/admin.controllers.js'

route.route('/admin/projects')
  .get(AdminController.allProjects)
  .get(function (req, res) {
    res.render('admin/projects')
  })

route.route('/admin/projects/:idProject/publicar')
.post(AdminController.publicar)

route.route('/admin/projects/nuevo')
  .get(AdminController.formNuevo)
  .post(AdminController.guardar)

route.route('/admin/projects/:idProject/eliminar')
  .get(AdminController.formEliminar)
  .post(AdminController.eliminar)

route.route('/admin/projects/:idProject/editar')
  .get(AdminController.formEditar)
  .post(AdminController.editar)

export default route