import express from 'express'
import UserRouter from './routes/user.router.js'
import AdminRouter from './routes/admin.router.js'

const app = express()
app.set('view engine', 'ejs')
app.use(express.urlencoded({ extended: true }))

app.use('/', express.static('public'))
app.use('/', UserRouter, AdminRouter)

app.listen(2022, function () {
    console.log('tamo online')
})
