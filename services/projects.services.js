import { MongoClient, ObjectId } from 'mongodb'
const client = new MongoClient('mongodb://127.0.0.1:27017')

async function findProjects() {
    return client.connect()
        .then(async function () {
            const db = client.db('AH_P1')
            return db.collection('Projects').find().toArray()
        })
}

async function findProjectByID(id) {
    return client.connect()
        .then(function () {
            const db = client.db('AH_P1')
            return db.collection('Projects').findOne({ _id: ObjectId(id) })
        })
}

async function editarProject(id, project) {
    return client.connect()
        .then(function () {
            return client.db('AH_P1').collection('Projects').updateOne({ _id: ObjectId(id) }, { $set: project })
        })
}

async function guardarProject(project) {
    const nuevoProject = { ...project }
    return client.connect()
        .then(function () {
            return client.db('AH_P1').collection('Projects').insertOne(nuevoProject)
        })
}

async function eliminarProject(id) {
    return client.connect()
        .then(function () {
            return client.db('AH_P1').collection('Projects').deleteOne({ _id: ObjectId(id) })
        })
}

export {
    findProjects,
    findProjectByID,
    editarProject,
    guardarProject,
    eliminarProject
}