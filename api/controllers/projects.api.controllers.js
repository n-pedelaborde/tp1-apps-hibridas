import * as ProjectsServices from '../../services/projects.services.js';

function findProjects(req, res) {
    const filter = {}

    // ?public=*cualquiertexto* me da los true, y no poner nada muestra los false. D:
    if (req.query.public) {
        filter.public = Boolean(req.query.public)
    }

    if (req.query.tecnologias) {
        filter.tecnologias = req.query.tecnologias
    }

    ProjectsServices.findProjects(filter)
        .then(function (projects) {
            res.status(200).json(projects)
        })
}

function guardarProject(req, res) {
    const project = {
        name: req.body.name,
        description: req.body.description,
        tecnologias: Array(req.body.tecnologias),
        link: req.body.link,
        img: req.body.img,
        public: Boolean(req.body.public),
    }

    ProjectsServices.guardarProject(project)
        .then(function (newProduct) {
            res.status(201).json(newProduct)
        })
}

function findProjectByID(req, res) {
    const id = req.params.idProject

    ProjectsServices.findProjectByID(id)
        .then(function (project) {
            if (project) {
                res.status(200).json(project)
            } else {
                res.status(404).json({ message: "No se encontró el proyecto" })
            }
        })
}

function editarProject(req, res) {
    const id = req.params.idProject
    const project = {}
    if (req.body.name) {
        project.name = req.body.name
    }
    if (req.body.description) {
        project.description = req.body.description
    }
    if (req.body.name) {
        project.tecnologias = Array(req.body.tecnologias)
    }
    if (req.body.link) {
        project.link = req.body.link
    }
    if (req.body.img) {
        project.img = req.body.img
    }
    if (req.body.name) {
        project.public = Boolean(req.body.public)
    }

    ProjectsServices.editarProject(id, project)
        .then(function (project) {
            if (project) {
                res.status(200).json({ message: "Editaste el proyecto" })
            } else {
                res.status(404).json({ message: "No se encontró el proyecto" })
            }
        })
}

function eliminarProject(req, res) {
    const id = req.params.idProject
    ProjectsServices.eliminarProject(id)
        .then(function (project) {
            if (project) {
                res.status(200).json({ message: "Eliminaste el proyecto, sus testimonioos e imágenes" })
            } else {
                res.status(404).json({ message: "No se encontró el proyecto" })
            }
        })
}

export {
    findProjects,
    guardarProject,
    findProjectByID,
    editarProject,
    eliminarProject
}