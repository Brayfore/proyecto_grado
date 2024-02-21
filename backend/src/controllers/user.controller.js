const UserService = require('../services/user.service')

class UserController{
    constructor(){
        this.service = new UserService()
    }
    async index(){
        const users = await this.service.get()
        return users
    }
    async create(user){
        const userCreated = await this.service.post(user)
        return userCreated
    }
    async findOne(id){
        const user = await this.service.findById(id)
        if(!user){
            throw new Error('Reading not found')
        }
        return user
    }
    async update(id, values){
        const user = await this.service.update(id, values)
        if(!user){
            throw new Error('Reading not found')
        }
        return user
    }
    async delete(id){
        const user = await this.service.delete(id)
        if(!user){
            throw new Error('Reading not found')
        }
        return user
    }
}   

module.exports = UserController
