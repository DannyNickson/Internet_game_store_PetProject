import { User } from '../models/models.js'

class userController {
    async registration(req, res) {
        const { email, password, username } = req.body;
        try {
            const user = await User.create({ email, password, username })
            res.json(user)
        } catch (error) {
            console.log(error);
            res.status(500)
        }
    }
    async login(req, res) {

    }
    async check(req, res) {

    }
    async getAllUsers(req,res){
        const users = await User.findAll();
        res.json(users)
    }
}

export default new userController()