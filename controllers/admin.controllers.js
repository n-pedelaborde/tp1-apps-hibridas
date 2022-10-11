import * as ProjectsServices from "../services/projects.services.js"

function allProjects(req, res) {
    ProjectsServices.findProjects()
        .then(function (projects) {
            res.render("admin/projects", { projects })
        })
}

function publicar(req, res) {
    const id = req.params.idProject
    const estado = { public: Boolean(req.body.public) }
    ProjectsServices.editarProject(id, estado)
        .then(function () {
            res.render("admin/success", { message: `Se cambió la visibilidad del proyecto.` })
        })
}

function formEditar(req, res) {
    const id = req.params.idProject
    ProjectsServices.findProjectByID(id)
        .then(function (project) {
            res.render("admin/editar", { project })
        })
}

function editar(req, res) {
    const id = req.params.idProject
    const project = {
        name: req.body.name,
        description: req.body.description,
        link: req.body.link,
        img: req.body.img,
        public: Boolean(req.body.public),
    }
    ProjectsServices.editarProject(id, project)
        .then(function () {
            res.render("admin/success", { message: `Se guardaron los cambios.`})
        })
}

function formNuevo(req, res) {
    res.render("admin/nuevo", { project: {} })
}

function guardar(req, res) {
    const project = {
        name: req.body.name,
        description: req.body.description,
        link: req.body.link,
        img: req.body.img,
        public: Boolean(req.body.public),
    }
    ProjectsServices.guardarProject(project)
        .then(function (nuevoProject) {
            res.render("admin/success", { message: `Se guardó el proyecto.`})
        })
}

function formEliminar(req, res) {
    const id = req.params.idProject
    ProjectsServices.findProjectByID(id)
        .then(function (project) {
            res.render("admin/eliminar", { project })
        })
}

function eliminar(req, res) {
    const id = req.params.idProject
    ProjectsServices.eliminarProject(id)
        .then(function () {
            res.render("admin/success", { message: `Se eliminó el proyecto.` })
        })
}

export {
    allProjects,
    publicar,
    formEditar,
    editar,
    formNuevo,
    guardar,
    formEliminar,
    eliminar,
}