const {Router} = require('express')
const UserController = require('../controllers/user.controller')
const UserSchema = require('../database/models/user.model')

const router = Router()

const controller = new UserController()

router.get('/', async (req, res)=>{
    const users = await controller.index()
    res.json({users})
})

router.post('/', async (req, res) => {

    const { name, email, password, rol} = req.body
    const user = new UserSchema({
        name: name,
        email: email, 
        password: password,
        rol: rol,   
    })
    await controller.create(user)
    res.status(201).json({user})
})


router.get('/:id', async(req, res) =>{
    try{
        const {id} = req.params
        const user = await controller.findOne(id)
        res.status(200).json({user})
    }
    catch(error){
        res.status(404).json({message : error.message})
    }
})

router.put('/:id', async (req, res) => {
    const {id} = req.params
    const {name = '', email = '', password = '', rol = ''} = req.body
    const values = {}
    if(name) values.name = name
    if (email) values.email = email
    if (password) values.password = password
    if (rol) values.rol = rol

    try{
        const user = await controller.update(id,values)
        res.status(200).json({user})
    }catch (error){
        res.status(404).json({message: error.message})
    }
})

router.delete('/:id', async(req, res) =>{
    const{id} = req.params
    try{
        const user = await controller.delete(id) //delete
        res.status(200).json({user})
    }catch(error){
        res.status(400).json({message: error.message})
    }
})

module.exports = router
