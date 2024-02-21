const {Router} = require('express')
const VocabularyController = require('../controllers/vocabulary.controller')
const VocabularySchema = require('../database/models/vocabulary.model')

const router = Router()

const controller = new VocabularyController()

router.get('/', async (req, res)=>{
    const vocabularys = await controller.index()
    res.json({vocabularys})
})

router.post('/', async (req, res) => {

    const { name_in_spanish, name_in_english,  images,  audios, pronunciation} = req.body
    const vocabulary= new VocabularySchema({
        name_in_spanish: name_in_spanish,
        name_in_english: name_in_english,
        images: images,
        audios: audios,
        pronunciation: pronunciation
    })
    await controller.create(vocabulary)
    res.status(201).json({vocabulary})
})

router.get('/:id', async(req, res) =>{
    try{
        const {id} = req.params
        const vocabulary = await controller.findOne(id)
        res.status(200).json({vocabulary})
    }
    catch(error){
        res.status(404).json({message : error.message})
    }
})


router.put('/:id', async (req, res) => {
    const {id} = req.params
    const {name_in_spanish = '', name_in_english = '', images = '', audios = '', pronunciation = ''} = req.body
    const values = {}
    if(name_in_spanish) values.name_in_spanish = name_in_spanish
    if (name_in_english) values.name_in_english = name_in_english
    if (images) values.images = images
    if (audios) values.audios = audios
    if(pronunciation) values.pronunciation = pronunciation

    try{
        const vocabulary = await controller.update(id,values)
        res.status(200).json({vocabulary})
    }catch (error){
        res.status(404).json({message: error.message})
    }
})

router.delete('/:id', async(req, res) =>{
    const{id} = req.params
    try{
        const vocabulary = await controller.delete(id)
        res.status(200).json({vocabulary})
    }catch(error){
        res.status(400).json({message: error.message})
    }
})

module.exports = router

