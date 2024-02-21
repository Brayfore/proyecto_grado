const ListeningSchema = require('../database/models/listening.model')

class ListeningService {
    constructor(){
        this.model = ListeningSchema
    }
    async get(){
        const listeningQueries = await this.model.find()
        return listeningQueries
    }
    async getOne(id){
        const listening = await this.model.findById(id)
        return listening
    }
    async post(listening){
        const listeningCreate = await this.model.create(listening)
        return {ok:true, listeningCreate}
    }
    async update(id,listening){
        const listeningUpdate = await this.model.findByIdAndUpdate(id, listening)
        return listeningUpdate
    }
    async delete(id){
        const listeningDelete = await this.model.findByIdAndDelete(id)
        return listeningDelete
    }
}

module.exports = ListeningService