import { z, ZodType } from 'zod'
import { User } from './users.interface'

const fullNameSchema = z.object({
  firstName: z.string({
    required_error: 'Firstname is required',
    invalid_type_error: 'Firstname must be a string',
  }),
  lastName: z.string({
    required_error: 'Last name is required',
    invalid_type_error: 'Last name must be a string',
  }),
})

const addressSchema = z.object({
  street: z.string(),
  city: z.string(),
  country: z.string(),
})

const orderSchema = z.object({
  productName: z.string(),
  price: z.number().gt(0),
  quantity: z.number().gt(0),
})

const UserValidationSchema: ZodType<User> = z.object({
  userId: z.number(),
  username: z.string(),
  password: z.string().max(20).min(8),
  fullName: fullNameSchema,
  age: z.number(),
  email: z.string().email({
    message: 'Invalid email format. Please provide a valid email address.',
  }),
  isActive: z.boolean(),
  hobbies: z.array(z.string()),
  address: addressSchema,
  orders: z.array(orderSchema),
})

export const UserUpateValidationSchema: ZodType = z.object({
  userId: z.number(),
  username: z.string(),
  password: z.string().max(20).min(8).optional(),
  fullName: fullNameSchema,
  age: z.number(),
  email: z.string().email({
    message: 'Invalid email format. Please provide a valid email address.',
  }),
  isActive: z.boolean(),
  hobbies: z.array(z.string()),
  address: addressSchema,
  orders: z.array(orderSchema),
})

export default UserValidationSchema
