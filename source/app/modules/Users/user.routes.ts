import express from 'express'
import userController from './user.controller'

const router = express.Router()

router.post('/', userController.insertUserInDB)
router.get('/', userController.getAllUser)
router.get('/:userId', userController.getUserById)
router.put('/:userId', userController.updateUserById)
router.delete('/:userId', userController.deleteUserById)
router.put('/:userId/orders', userController.addAProductToOrders)
router.get('/:userId/orders', userController.getUserOrders)
router.get('/:userId/orders/total-price', userController.calculateTheSumOfUser)

export const userRouter = router
