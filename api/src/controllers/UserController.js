const UserRepository = require('../repositories/UserRepository')

const userRepository = new UserRepository();

class UserController {
    static async selectAll(req, res) {
        const search = req.query;
        const result = await userRepository.selectAll(search)
        res.status(200).json(result)
    }
}

module.exports = UserController;