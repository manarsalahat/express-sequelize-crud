# Express Sequelize CRUD API

## Project Description
This project is a simple backend application built using Express.js and Sequelize.  
It demonstrates:
- Model creation
- One-to-many relationship
- CRUD operations
- Organized routes and controllers
- Sequelize migrations

The project uses two models:
- User
- Order

### Relationship
- One User has many Orders
- One Order belongs to one User



## Technologies Used
- Node.js
- Express.js
- Sequelize
- Sequelize CLI
- SQLite



## Project Structure

express-sequelize-crud/
│
├── config/
├── controllers/
│   ├── userController.js
│   └── orderController.js
├── migrations/
├── models/
│   ├── user.js
│   └── order.js
├── routes/
│   ├── userRoutes.js
│   └── orderRoutes.js
├── seeders/
├── app.js
├── database.sqlite
├── package.json
└── README.md