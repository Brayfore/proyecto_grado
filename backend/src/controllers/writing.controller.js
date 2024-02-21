const WritingService = require('../services/writing.service')

class WritingController {
    constructor(){
        this.service = new WritingService()
    }
    async index(){
        const writings = await this.service.get()
        return writings
    }
    async create(writing){
        const writingCreated = await this.service.post(writing)
        return writingCreated
    }
    async findOne(id){
        const writing = await this.service.getOne(id)
        if(!writing){
            throw new Error('Reading not found')
        }
        return writing
    }
    async update(id, values){
        const writing = await this.service.update(id, values)
        if(!writing){
            throw new Error('Reading not found')
        }
        return writing
    }
    async delete(id){
        const writing = await this.service.delete(id)
        if(!writing){
            throw new Error('Reading not found')
        }
        return writing
    }
}

module.exports = WritingController
