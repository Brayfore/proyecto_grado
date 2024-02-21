const {Router} = require('express')
const ListeningController = require('../controllers/listening.controller')
const ListeningSchema = require('../database/models/listening.model')

const router = Router()

const controller = new ListeningController()

router.get('/', async(req, res) =>{
    const listening = await controller.index()
    res.json({listening})
})

router.post('/', async (req, res) => {

    const {audios, script, classification, category, TypeofQ, right_answer} = req.body
    const listening = new ListeningSchema({
        audios: audios,
        script: script,
        classification: classification,
        category: category,
        TypeofQ: TypeofQ,
        right_answer: right_answer
    })
    await controller.create(listening)
    res.status(201).json({listening})
})

router.get('/:id', async(req, res) =>{
    try{
        const {id} = req.params
        const listening = await controller.findOne(id)
        res.status(200).json({listening})
    }
    catch(error){
        res.status(404).json({message : error.message})
    }
})

router.put('/:id', async (req, res) => {
    const {id} = req.params
    const {audios = '', script = '', classification = '', category = '', TypeofQ = '', right_answer = ''} = req.body
    const values = {}
    if(audios) values.audios = audios
    if(script) values.script = script
    if (classification) values.classification = classification
    if (category) values.category = category
    if (TypeofQ) values.TypeofQ = TypeofQ
    if (right_answer) values.right_answer = right_answer

    try{
        const reading = await controller.update(id,values)
        res.status(200).json({reading})
    }catch (error){
        res.status(404).json({message: error.message})
    }
})

router.delete('/:id', async(req, res) =>{
    const{id} = req.params
    try{
        const listening = await controller.delete(id) //delete
        res.status(200).json({listening})
    }catch(error){
        res.status(400).json({message: error.message})
    }
})

module.exports = router