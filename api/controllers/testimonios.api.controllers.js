import * as testimoniosService from '../../services/testimonios.services.js'

function allTestimonios(req, res) {
    const idProject = req.params.idProject

    testimoniosService.allTestimonios(idProject)
        .then(function (result) {
            res.status(200).json(result)
        })
}

function newTestimonio(req, res) {
    const idProject = req.params.idProject
    const testimonio = {
        nombre: req.body.nombre,
        empresa: req.body.empresa,
        texto: req.body.texto,
    }

    testimoniosService.newTestimonio(idProject, testimonio)
        .then(function (result) {
            res.status(201).json(result)
        })
}

function borrarTestimonio(req, res) {
    const id = req.params.idTestimonio

    testimoniosService.borrarTestimonio(id)
        .then(function (testimonio) {
            if (testimonio) {
                res.status(200).json({ message: "Eliminaste un testimonio" })
            } else {
                res.status(404).json({ message: "No se encontró el testimonio" })
            }
        })
}

export {
    allTestimonios,
    newTestimonio,
    borrarTestimonio
}