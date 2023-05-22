const UserRepository = require("../repositories/UserRepository")
const jsonwebtoken = require("jsonwebtoken")
const {PRIVATE_KEY} = require("../middleware/auth")

const userRepository = new UserRepository();

class AuthController {
    static async authUser(req, res) {
        try {

            const data = req.body
            const user = await userRepository.selectAll(data);

            if(user.length == 0)  return res.status(400).json({message:'Username or Password incorrect!'});
            const token = jsonwebtoken.sign({ user },PRIVATE_KEY);
            res.status(200).json(token)
            
        } catch (error) {
            res.status(404).send({message: error.message})
        }
    }
}

module.exports = AuthController