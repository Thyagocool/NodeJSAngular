const postModel = require('../database/models/postModel')
const Repository = require('.')
const userModel = require('../database/models/userModel')


class PostRepository extends Repository{
    constructor(){
        super(postModel)
    }

    selectAllPost = async (search) => {
        try {
            const where = {...search}
            const resultSet = await postModel.findAll({include: userModel}, {where});
            return resultSet;

        } catch (error) {
            return {message: error.message};
        }
    }
}

module.exports = PostRepository;