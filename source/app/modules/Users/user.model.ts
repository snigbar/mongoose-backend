import { Schema, model } from 'mongoose'
import { Order, User } from './users.interface'
import bcrypt from 'bcrypt'
import config from '../../config/config'

const OrderSchema = new Schema<Order>({
  productName: { type: String, required: true },
  price: { type: Number, required: true },
  quantity: { type: Number, required: true },
})

const UserSchema = new Schema<User>({
  userId: {
    type: Number,
    unique: true,
    required: true,
  },
  username: {
    type: String,
    unique: true,
  },
  password: String,
  fullName: {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
  },
  age: { type: Number, required: true },
  email: { type: String, required: true, unique: true },
  isActive: { type: Boolean, default: true },
  hobbies: [String],
  address: {
    street: { type: String, required: true },
    city: { type: String, required: true },
    country: { type: String, required: true },
  },
  orders: [OrderSchema],
})

UserSchema.pre('save', async function (next) {
  // eslint-disable-next-line @typescript-eslint/no-this-alias
  const user = this // doc
  // create hashed password
  user.password = await bcrypt.hash(user.password, Number(config.saltRound))
  next()
})

UserSchema.post('save', function (result, next) {
  result.password = ''
  next()
})

UserSchema.post('save', function (result, next) {
  result.password = ''
  next()
})
UserSchema.post('findOneAndUpdate', function (result, next) {
  result.password = ''
  next()
})

export const UserModel = model<User>('users', UserSchema)
