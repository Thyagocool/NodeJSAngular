const userModel = require('../database/models/userModel')
const Repository = require('./')
class UserRepository extends Repository{
    constructor(){
        super(userModel)
    }
}


module.exports = UserRepository;