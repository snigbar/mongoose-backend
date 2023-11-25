# Mongoose Express CRUD

This Node.js Express application manages users and orders, integrating MongoDB with Mongoose. Below are the key routes and their functionality.

## How to Install and Run Locally

### 1. Clone Repository
```bash
git clone https://github.com/your-username/assignment2.git
cd assignment2

npm install

PORT=3000
MONGO_URI=mongodb://localhost:27017/your-database-name
JWT_SECRET=your-secret-key

npm run build
npm start

###Access Application
Open http://localhost:3000 in your browser.

#### Lint TypeScript:
npm run lint
fix lint: npm run lint:fix

#### Format code
npm run prettier
fix: npm run prettier:fix

## Build and Start Production Server

npm run build
npm run start:prod

## Routes
### User Management

#### 1. Create a new user

- **Endpoint:** `POST /api/users`

#### 2. Retrieve a list of all users

- **Endpoint:** `GET /api/users`
- 
#### 3. Retrieve a specific user by ID

- **Endpoint:** `GET /api/users/:userId`

#### 4. Update user information

- **Endpoint:** `PUT /api/users/:userId`

#### 5. Delete a user

- **Endpoint:** `DELETE /api/users/:userId`

### Order Management

#### 1. Add New Product in Order

- **Endpoint:** `PUT /api/users/:userId/orders`


#### 2. Retrieve all orders for a specific user

- **Endpoint:** `GET /api/users/:userId/orders`

#### 3. Calculate Total Price of Orders for a Specific User

- **Endpoint:** `GET /api/users/:userId/orders/total-price`

## Error Handling
it shows error massage on if error occurs

