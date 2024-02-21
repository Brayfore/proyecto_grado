const UserSchema = require('../database/models/user.model')

class UserService{
    constructor(){
        this.model = UserSchema
    }
    async get(){
        const userQueries= await this.model.find()
        return userQueries
    }
    async getOne(id){
        const user = await this.model.findById(id)
        return user
    }
    async post(user){
        const userCreate = await this.model.create(user)
        return {ok:true, userCreate}
    }
    async update(id, user){
        const userUpdate = await this.model.findByIdAndUpdate(id, user)
        return userUpdate
    }
    async delete(id){
        const userDelete = await this.model.findByIdAndDelete(id)
        return userDelete
    }
}

module.exports = UserService