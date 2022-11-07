import { MongoClient, ObjectId } from 'mongodb'
const client = new MongoClient('mongodb://127.0.0.1:27017')

const db = client.db('AH_P1')
const testimonios = db.collection('Testimonios')

async function allTestimonios(id) {
    const filter = {
        project_id: new ObjectId(id)
    }
    return client.connect()
        .then(async function () {
            return testimonios.find(filter).toArray()
        })
}

async function newTestimonio(id, testimonio) {
    const nuevoTestimonio = {
        ...testimonio,
        project_id: new ObjectId(id)
    }

    return client.connect()
        .then(async function () {
            return testimonios.insertOne(nuevoTestimonio)
        })
        .then(function (result) {
            return nuevoTestimonio
        })
}

async function borrarTestimonio(id) {
    return client.connect()
        .then(async function () {
            return testimonios.deleteOne({ _id: new ObjectId(id) })
        })
}

export {
    allTestimonios,
    newTestimonio,
    borrarTestimonio
}


