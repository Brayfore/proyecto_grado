const WritingSchema = require('../database/models/writing.model')

class WritingService{
    constructor(){
        this.model = WritingSchema
    }
    async get(){
        const writingQueries= await this.model.find()
        return writingQueries
    }
    async getOne(id){
        const writing = await this.model.findById(id)
        return writing
    }
    async post(writing){
        const writingCreate = await this.model.create(writing)
        return {ok:true, writingCreate}
    }

    async update(id, writing){
        const writingUpdate = await this.model.findByIdAndUpdate(id, writing)
        return writingUpdate
    }
    async delete(id){
        const writingDelete = await this.model.findByIdAndDelete(id)
        return writingDelete
    }
}

module.exports = WritingService