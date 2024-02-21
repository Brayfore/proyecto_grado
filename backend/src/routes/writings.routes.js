const {Router} = require('express')
const WritingController = require('../controllers/writing.controller')
const WritingSchema = require('../database/models/writing.model')

const router = Router()

const controller = new WritingController()

router.get('/', async (req, res)=>{
    const writings = await controller.index()
    res.json({writings})
})

router.post('/', async (req, res) => {

    const { instructions, question, fill_in, option_1, option_2, option_3, right_answer, classification} = req.body
    const writing = new WritingSchema({
        instructions: instructions,
        question: question,
        fill_in: fill_in,
        option_1: option_1,
        option_2: option_2,
        option_3: option_3,
        right_answer: right_answer,
        classification: classification
    })
    await controller.create(writing)
    res.status(201).json({writing})
})

router.get('/:id', async(req, res) =>{
    try{
        const {id} = req.params
        const writing = await controller.findOne(id)
        res.status(200).json({writing})
    }
    catch(error){
        res.status(404).json({message : error.message})
    }
})

router.put('/:id', async (req, res) => {
    const {id} = req.params
    const {instructions = '',  question = '',  fill_in = '',  option_1 = '',  option_2 = '', option_3 = '',
    right_answer = '', classification = ''} = req.body
    const values = {}
    if(instructions) values.instructions = instructions
    if (question) values.question =  question
    if (fill_in) values.fill_in = fill_in
    if (option_1) values.option_1 = option_1
    if (option_2) values.option_2 = option_2
    if(option_3) values.option_3 = option_3
    if(right_answer) values.right_answer = right_answer
    if(classification) values.classification = classification

    try{
        const writing = await controller.update(id,values)
        res.status(200).json({writing})
    }catch (error){
        res.status(404).json({message: error.message})
    }
})

router.delete('/:id', async(req, res) =>{
    const{id} = req.params
    try{
        const writing = await controller.delete(id)
        res.status(200).json({writing})
    }catch(error){
        res.status(400).json({message: error.message})
    }
})

module.exports = router