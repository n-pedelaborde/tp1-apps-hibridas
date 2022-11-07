import * as imagenesService from '../../services/imagenes.services.js'

function verImagenes(req, res) {
    const idProject = req.params.idProject

    imagenesService.verImagenes(idProject)
        .then(function (result) {
            res.status(200).json(result)
        })
}

function imagenNueva(req, res) {
    const idProject = req.params.idProject
    const testimonio = {
        url: req.body.url,
        descripcion: req.body.descripcion,
    }

    imagenesService.imagenNueva(idProject, testimonio)
        .then(function (result) {
            res.status(201).json(result)
        })
}

function borrarImagen(req, res) {
    const id = req.params.idImagen

    imagenesService.borrarImagen(id)
        .then(function (testimonio) {
            if (testimonio) {
                res.status(200).json({ message: "Eliminaste una imagen" })
            } else {
                res.status(404).json({ message: "No se encontró la imagen" })
            }
        })
}

export {
    verImagenes,
    imagenNueva,
    borrarImagen
}