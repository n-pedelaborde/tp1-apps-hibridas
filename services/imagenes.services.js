import { MongoClient, ObjectId } from 'mongodb'
const client = new MongoClient('mongodb://127.0.0.1:27017')

const db = client.db('AH_P1')
const imagenes = db.collection('Imagenes')

async function verImagenes(id) {
    const filter = {
        project_id: new ObjectId(id)
    }
    return client.connect()
        .then(async function () {
            return imagenes.find(filter).toArray()
        })
}

async function imagenNueva(id, imagen) {
    const agregarImagen = {
        ...imagen,
        project_id: new ObjectId(id)
    }

    return client.connect()
        .then(async function () {
            return imagenes.insertOne(agregarImagen)
        })
        .then(function (result) {
            return agregarImagen
        })
}

async function borrarImagen(id) {
    return client.connect()
        .then(async function () {
            return imagenes.deleteOne({ _id: new ObjectId(id) })
        })
}

export {
    verImagenes,
    imagenNueva,
    borrarImagen
}