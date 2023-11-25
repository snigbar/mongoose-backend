import { UserModel } from './user.model'
import { User } from './users.interface'

const createNewUser = async (data: User) => {
  const ifExists = await UserModel.findOne({ userId: data.userId })
  if (ifExists) throw new Error('User already exists')
  const newUser = new UserModel(data)
  const result = newUser.save()
  return result
}

export default {
  createNewUser,
}
