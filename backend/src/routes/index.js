const {Router} = require('express')
const readingRouter = require('./readings.routes')
const writingRouter = require('./writings.routes')
const vocabularyRouter = require('./vocabularys.routes')
const userRouter = require('./users.routes')
const listeningRouter = require('./listening.routes')

function routerApi(app){
    const router = Router()
    app.use('/api/v1', router)
    router.use('/listening', listeningRouter)
    router.use('/users', userRouter)
    router.use('/readings', readingRouter)
    router.use('/writings', writingRouter)
    router.use('/vocabularys', vocabularyRouter)
}

module.exports = routerApi