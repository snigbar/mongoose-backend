import { UserModel } from './user.model'
import { User } from './users.interface'

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

export default {
  createNewUser,
  findAllUsers,
  findAnUser,
}
