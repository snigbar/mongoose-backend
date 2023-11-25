import { Request, Response } from 'express'
import UserValidationSchema, {
  UserUpateValidationSchema,
  orderSchema,
} from './user.validation'
import useServices from './use.services'

const insertUserInDB = async (req: Request, res: Response) => {
  try {
    const validatedData = UserValidationSchema.parse(req.body)
    const result = await useServices.createNewUser(validatedData)
    res.status(200).json({
      success: true,
      message: 'User is created succesfully',
      data: result,
    })
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: err.message || 'something went wrong',
      error: err,
    })
  }
}

const getAllUser = async (req: Request, res: Response) => {
  try {
    const result = await useServices.findAllUsers()
    res.status(200).json({
      success: true,
      message: 'Retrived all users',
      data: result,
    })
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: err.message || 'something went wrong',
      error: err,
    })
  }
}

const getUserById = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params
    const result = await useServices.findAnUser(Number(userId))
    if (!result) {
      throw new Error('No user found')
    }
    res.status(200).json({
      success: true,
      message: 'User Found',
      data: result,
    })
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: err.message || 'something went wrong',
      error: err,
    })
  }
}

const updateUserById = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params
    const doc = req.body
    const validatedData = UserUpateValidationSchema.parse(doc)
    const user = await useServices.findAnUser(Number(userId))
    if (!user) {
      throw new Error('No user found')
    }

    const result = await useServices.UpdateAnUser(Number(userId), validatedData)
    res.status(200).json({
      success: true,
      message: 'User updated successfully!',
      data: result,
    })
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: err.message || 'something went wrong',
      error: err,
    })
  }
}

const deleteUserById = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params
    const user = await useServices.findAnUser(Number(userId))
    if (!user) {
      throw new Error('No user found')
    }

    await useServices.deleteOne(Number(userId))
    res.status(200).json({
      success: true,
      message: 'User deleted successfully',
      data: null,
    })
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: err.message || 'something went wrong',
      error: err,
    })
  }
}

const addAProductToOrders = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params
    const user = await useServices.findAnUser(Number(userId))
    if (!user) {
      throw new Error('No user found')
    }
    const data = req.body
    const validatedData = orderSchema.parse(data)
    await useServices.addAProduct(Number(userId), validatedData)
    res.status(200).json({
      success: true,
      message: 'Order created successfully!',
      data: null,
    })
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: err.message || 'something went wrong',
      error: err,
    })
  }
}

const getUserOrders = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params
    const user = await useServices.findAnUser(Number(userId))
    if (!user) {
      throw new Error('No user found')
    }

    const result = await useServices.getOrdersOfUser(Number(userId))

    res.status(200).json({
      success: true,
      message: 'Order fetched successfully!',
      data: result,
    })
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: err.message || 'something went wrong',
      error: err,
    })
  }
}

export default {
  insertUserInDB,
  getAllUser,
  getUserById,
  updateUserById,
  deleteUserById,
  addAProductToOrders,
  getUserOrders,
}
