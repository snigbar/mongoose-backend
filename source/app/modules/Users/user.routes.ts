import express from 'express'
import userController from './user.controller'

const router = express.Router()

router.post('/', userController.insertUserInDB)
router.get('/', userController.getAllUser)

export const userRouter = router
