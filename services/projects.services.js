import { MongoClient, ObjectId } from 'mongodb'
const client = new MongoClient('mongodb://127.0.0.1:27017')

const db = client.db('AH_P1')
const projects = db.collection('Projects')
const testimonios = db.collection('Testimonios')
const imagenes = db.collection('Imagenes')

async function findProjects(filter) {
    const filterQuery = {
        ...filter
    }
    if (filterQuery.tecnologias) {
        filterQuery.tecnologias = { $regex: filterQuery.tecnologias, $options: 'i' }
    }
    // probé varios "Evaluation Query Operators" como $regex pensando que podrían
    // filtrar por true o false pero ninguno sirvió. Googleando no encontré solución
    return client.connect()
        .then(async function () {
            return projects.find(filterQuery).toArray()
        })
}

async function findProjectByID(id) {
    return client.connect()
        .then(function () {
            return projects.findOne({ _id: ObjectId(id) })
        })
}

async function editarProject(id, project) {
    return client.connect()
        .then(function () {
            return projects.updateOne({ _id: ObjectId(id) }, { $set: project })
        })
}

async function guardarProject(project) {
    const nuevoProject = { ...project }
    return client.connect()
        .then(function () {
            return projects.insertOne(nuevoProject)
        })
}

async function eliminarProject(id) {
    return client.connect()
        .then(function () {
            return projects.deleteOne({ _id: ObjectId(id) })
        })
        .then(function () {
            return testimonios.deleteMany({ project_id: ObjectId(id) })
        })
        .then(function () {
            return imagenes.deleteMany({ project_id: ObjectId(id) })
        })
}

export {
    findProjects,
    findProjectByID,
    editarProject,
    guardarProject,
    eliminarProject
}