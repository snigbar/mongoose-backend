import { Request, Response } from 'express'
import UserValidationSchema from './user.validation'
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

export default {
  insertUserInDB,
  getAllUser,
}
