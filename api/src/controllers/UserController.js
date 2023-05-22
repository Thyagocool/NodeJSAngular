const UserRepository = require('../repositories/UserRepository')

const userRepository = new UserRepository();

class UserController {
    static async selectAll(req, res) {
        const search = req.query;
        const result = await userRepository.selectAll(search)
        res.status(200).json(result)
    }

    static async createData(req, res) {
        try {
            const data = req.body;
            const result = await userRepository.createData(data)
            res.status(201).json({message: `User was inserted`});
        } catch (error) {
            res.status(404).json({message: error.message});
        }
    }

    static async updateData(req, res) {
        try {
            const { id } = req.params;
            const data = req.body;
            await userRepository.updateData(id, data);
            res.status(204).json({message: 'User was updated'});
        } catch (error) {
            res.status(400).json({message: error.message});
        }
    }

    static async deleteData(req, res) {
        try {
            const { id } = req.params;
            await userRepository.deleteData(id);
            res.status(204).json({message: 'User was deleted'});
        } catch (error) {
            res.status(400).json({message: error.message});
            
        }
    }
}

module.exports = UserController;