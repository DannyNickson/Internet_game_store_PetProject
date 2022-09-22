import { Router } from "express";
import userController from "../conrtollers/userController.js";
const router = new Router()

router.post('/registration',userController.registration)
router.post('/login',userController.login)
router.get('/auth',userController.check)
router.get('/userlist',userController.getAllUsers)

export default router;