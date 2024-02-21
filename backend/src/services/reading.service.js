const ReadingSchema = require('../database/models/reading.model')

class ReadingService {
    constructor(){
        this.model = ReadingSchema
    }
    async get(){
        const readingQueries = await this.model.find()
        return readingQueries
    }
    async getOne(id){
        const reading = await this.model.findById(id)
        return reading
    }
    async post(reading){
        const readingCreate = await this.model.create(reading)
        return {ok:true, readingCreate}
    }

    async update(id,reading){
        const readingUpdate = await this.model.findByIdAndUpdate(id, reading)
        return readingUpdate
    }
    async delete(id){
        const readingDelete = await this.model.findByIdAndDelete(id)
        return readingDelete
    }
}

module.exports = ReadingService



