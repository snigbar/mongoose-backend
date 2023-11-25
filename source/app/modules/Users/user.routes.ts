import express from 'express'
import userController from './user.controller'

const router = express.Router()

router.post('/', userController.insertUserInDB)
router.get('/', userController.getAllUser)
router.get('/:userId', userController.getUserById)

export const userRouter = router
