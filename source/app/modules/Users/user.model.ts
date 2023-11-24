import { Schema, model } from 'mongoose'
import { Order, User } from './users.interface'

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
  age: { type: Number, required: true, unique: true },
  email: { type: String, required: true },
  isActive: { type: Boolean, default: true },
  hobbies: [String],
  address: {
    street: String,
    city: String,
    country: String,
    required: true,
  },
  orders: [OrderSchema],
})

export default model<User>('users', UserSchema)
