import { UserModel } from './user.model'
import { Order, User } from './users.interface'

const createNewUser = async (data: User) => {
  const ifExists = await UserModel.findOne({ userId: data.userId })
  if (ifExists) throw new Error('User already exists')
  const newUser = new UserModel(data)
  const result = newUser.save()
  return result
}

const findAllUsers = async () => {
  return await UserModel.find({}, 'username fullName age email address')
}

const findAnUser = async (id: number) => {
  return await UserModel.findOne({ userId: id })
}

const UpdateAnUser = async (id: number, doc: User) => {
  return await UserModel.findOneAndUpdate({ userId: id }, doc, { new: true })
}

const deleteOne = async (id: number) => {
  return await UserModel.deleteOne({ userId: id })
}

const addAProduct = async (id: number, product: Order) => {
  return await UserModel.updateOne(
    { userId: id },
    { $push: { orders: product } },
  )
}

const getOrdersOfUser = async (id: number) => {
  return await UserModel.aggregate([
    { $match: { userId: id } },
    { $project: { _id: 0, orders: 1 } },
  ])
}

const totalPriceOfUser = async (id: number) => {
  return await UserModel.aggregate([
    { $match: { userId: id } },
    { $unwind: '$orders' },
    {
      $group: { _id: null, totalPrice: { $sum: '$orders.price' } },
    },
    {
      $project: { _id: 0, totalPrice: 1 },
    },
  ])
}
export default {
  createNewUser,
  findAllUsers,
  findAnUser,
  UpdateAnUser,
  deleteOne,
  addAProduct,
  getOrdersOfUser,
  totalPriceOfUser,
}
