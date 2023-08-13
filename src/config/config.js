require('dotenv').config()

module.exports = {
  development: {
    username: "postgres",
    password: "1234",
    database: "ecommers_db",
    port: 5432,
    host: "localhost",
    dialect: "postgres",
    logging: false,
  },
  test: {
    username: "root",
    password: null,
    database: "ecommers_db",
    host: "127.0.0.1",
    dialect: "postgres",
  },
  "production": {
    "username": process.env.DB_USER,
    "password": process.env.DB_PASSWORD,
    "database": process.env.DB_NAME,
    "host": process.env.DB_HOST,
    "port": process.env.DB_PORT,
    "dialect": "postgres",
    "dialectOptions": {ssl: {required: true, rejectUnauthorized: false}},
  }
};
