import ApiError from '../error/ApiError.js';
import { User } from '../models/models.js'

class userController {
    async registration(req, res, next) {
        const { email, password, username } = req.body;
        if (!email || !password || !username) {
            next(ApiError.badRequest('Не задано ключевое поле email/password/username'))
        }
        const user = await User.create({ email, password, username })
        res.json(user)
    }
    async login(req, res) {

    }
    async check(req, res) {

    }
    async getAllUsers(req, res) {
        const users = await User.findAll();
        res.json(users)
    }
}

export default new userController()