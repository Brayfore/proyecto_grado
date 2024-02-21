const {Router} = require('express')
const ReadingController = require('../controllers/reading.controller')
const ReadingSchema = require('../database/models/reading.model')

const router = Router()

const controller = new ReadingController()

router.get('/', async (req, res)=>{
    const readings = await controller.index()
    res.json({readings})
})

router.post('/', async (req, res) => {

    const {text, question, option_1, option_2, option_true, audios} = req.body
    const reading = new ReadingSchema({
        text: text,
        question: question,
        option_1: option_1,
        option_2: option_2,
        option_true: option_true,
        audios: audios
    })
    await controller.create(reading)
    res.status(201).json({reading})

})

router.get('/:id', async(req, res) =>{
    try{
        const {id} = req.params
        const reading = await controller.findOne(id)
        res.status(200).json({reading})
    }
    catch(error){
        res.status(404).json({message : error.message})
    }
})

router.put('/:id', async (req, res) => {
    const {id} = req.params
    const {text = '', question = '', option_1 = '', option_2 = '', option_true = '', audios = ''} = req.body
    const values = {}
    if(text) values.text = text
    if(question) values.question= question
    if (option_1) values.option_1 = option_1
    if (option_2) values.option_2 = option_2
    if (option_true) values.option_true = option_true
    if (audios) values.audios = audios

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
        const reading = await controller.delete(id) //delete
        res.status(200).json({reading})
    }catch(error){
        res.status(400).json({message: error.message})
    }
})

module.exports = router