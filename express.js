import express from 'express'
import UserRouter from './routes/user.router.js'
import AdminRouter from './routes/admin.router.js'

import ProjectsApiRoute from './api/routes/projects.api.routes.js'
import TestimoniosApiRoute from './api/routes/testimonios.api.routes.js'
import ImagenesApiRoute from './api/routes/imagenes.api.routes.js'

const app = express()
app.set('view engine', 'ejs')
app.use(express.urlencoded({ extended: true }))

app.use('/', express.static('public'))
app.use('/', UserRouter, AdminRouter)

app.use('/', ProjectsApiRoute)
app.use('/', TestimoniosApiRoute)
app.use('/', ImagenesApiRoute)

app.listen(2022, function () {
    console.log('tamo online')
})
