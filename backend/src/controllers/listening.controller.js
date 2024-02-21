const ListeningService = require('../services/listening.service')

class ListeningController{
    constructor(){
        this.service = new ListeningService()
    }
    async index(){
        const listening = await this.service.get()
        return listening
    }
    async create(listening){
        const listeningCreated = await this.service.post(listening)
        return listeningCreated
    }
    async findOne(id){
        const listening = await this.service.findById(id)
        if(!listening){
            throw new Error('Reading not found')
        }
        return listening
    }

    async update(id, values){
        const listening = await this.service.update(id, values)
        if(!listening){
            throw new Error('Reading not found')
        }
        return listening
    }

    async delete(id){
        const listening = await this.service.delete(id)
        if(!listening){
            throw new Error('Reading not found')
        }
        return listening
    }
}

module.exports = ListeningController
