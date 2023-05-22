const PostRepository = require('../repositories/PostRepository')

const postRepository = new PostRepository();

class PostController {
    static async selectAll(req, res) {
        const search = req.query;
        const result = await postRepository.selectAllPost(search)
        res.status(200).json(result)
    }

    static async createData(req, res) {
        try {
            const data = req.body;
            const result = await postRepository.createData(data)
            res.status(201).json({message: `Post was inserted`});
        } catch (error) {
            res.status(404).json({message: error.message});
        }
    }

    static async updateData(req, res) {
        try {
            const { id } = req.params;
            const data = req.body;
            await postRepository.updateData(id, data);
            res.status(204).json({message: 'Post was updated'});
        } catch (error) {
            res.status(400).json({message: error.message});
        }
    }

    static async deleteData(req, res) {
        try {
            const { id } = req.params;
            await postRepository.deleteData(id);
            res.status(204).json({message: 'Post was deleted'});
        } catch (error) {
            res.status(400).json({message: error.message});
            
        }
    }
}

module.exports = PostController;