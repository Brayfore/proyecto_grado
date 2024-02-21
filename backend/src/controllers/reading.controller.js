const ReadingService = require('../services/reading.service')

class ReadingController{
    constructor(){
        this.service = new ReadingService()
    }
    async index(){
        const readings= await this.service.get()
        return readings
    }
    async create(reading){
        const readingCreated = await this.service.post(reading)
        return readingCreated
    }
    async findOne(id){
        const reading = await this.service.findById(id)
        if(!reading){
            throw new Error('Reading not found')
        }
        return reading
    }
    async update(id, values){
        const reading = await this.service.update(id, values)
        if(!reading){
            throw new Error('Reading not found')
        }
        return reading
    }
    async delete(id){
        const reading = await this.service.delete(id)
        if(!reading){
            throw new Error('Reading not found')
        }
        return reading
    }
}

module.exports = ReadingController
