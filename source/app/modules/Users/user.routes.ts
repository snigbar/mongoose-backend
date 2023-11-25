import express from 'express'
import userController from './user.controller'

const router = express.Router()

router.post('/', userController.insertUserInDB)
router.get('/', userController.getAllUser)
router.get('/:userId', userController.getUserById)
router.put('/:userId', userController.updateUserById)
router.delete('/:userId', userController.deleteUserById)

export const userRouter = router
