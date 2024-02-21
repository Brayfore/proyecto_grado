const VocabularySchema = require('../database/models/vocabulary.model')

class VocabularyService {
    constructor(){
        this.model = VocabularySchema
    }
    async get(){
        const vocabularyQueries = await this.model.find()
        return vocabularyQueries
    }
    async getOne(id){
        const vocabulary= await this.model.findById(id)
        return vocabulary
    }
    async post(vocabulary){
        const vocabularyCreate = await this.model.create(vocabulary)
        return {ok:true, vocabularyCreate}
    }

    async update(id,vocabulary){
        const vocabularyUpdate = await this.model.findByIdAndUpdate(id, vocabulary)
        return vocabularyUpdate
    }
    async delete(id){
        const vocabularyDelete = await this.model.findByIdAndDelete(id)
        return vocabularyDelete
    }
}

module.exports = VocabularyService


