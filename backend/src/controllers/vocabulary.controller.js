const VocabularyService = require('../services/vocabulary.service')

class VocabularyController {
    constructor(){
        this.service = new VocabularyService()
    }
    async index(){
        const vocabularys = await this.service.get()
        return vocabularys
    }
    async create(vocabulary){
        const vocabularyCreated = await this.service.post(vocabulary)
        return vocabularyCreated
    }
    async findOne(id){
        const vocabulary = await this.service.findById(id)
        if(!vocabulary){
            throw new Error('Reading not found')
        }
        return vocabulary
    }
    async update(id, values){
        const vocabulary = await this.service.update(id, values)
        if(!vocabulary){
            throw new Error('Reading not found')
        }
        return vocabulary
    }
    async delete(id){
        const vocabulary = await this.service.delete(id)
        if(!vocabulary){
            throw new Error('Reading not found')
        }
        return vocabulary
    }
}

module.exports = VocabularyController
