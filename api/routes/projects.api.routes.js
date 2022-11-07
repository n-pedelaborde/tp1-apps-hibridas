import express from 'express'
import * as ProjectsApiController from '../controllers/projects.api.controllers.js'

const route = express.Router()

route.route('/api/projects')
    .get(ProjectsApiController.findProjects)
    .post(ProjectsApiController.guardarProject)

route.route('/api/projects/:idProject')
    .get(ProjectsApiController.findProjectByID)
    .patch(ProjectsApiController.editarProject)
    .delete(ProjectsApiController.eliminarProject)

export default route