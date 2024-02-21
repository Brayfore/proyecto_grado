const express = require('express')
const { port: APP_PORT, port } = require('./config/config')
const routerApi = require('./routes')
const cors= require('cors')



const app = express()
const mongoose = require('mongoose')


mongoose.connect("mongodb+srv://admin:1002654237@proyectogrado.swh0ctl.mongodb.net/")

app.use(express.json())
app.use(cors())

routerApi(app)

app.listen(port, () => {
    console.log(`APP corriendo por el puerto ${port}`
    )
})