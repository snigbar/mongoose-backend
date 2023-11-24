import express, { Application } from 'express'
import cors from 'cors'
import { userRouter } from './modules/Users/user.routes'

const app: Application = express()
app.use(cors())
app.use(express.json())
app.use('/api/users', userRouter)

app.get('/', (req, res) => {
  res.send('running')
})

export default app
