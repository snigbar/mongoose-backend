interface FullName {
  firstName: string
  lastName: string
}

interface Address {
  street: string
  city: string
  country: string
}

export interface Order {
  productName: string
  price: number
  quantity: number
}

export type User = {
  userId: number
  username: string
  password: string
  fullName: FullName
  age: number
  email: string
  isActive: boolean
  hobbies: string[]
  address: Address
  orders: Order[]
}
