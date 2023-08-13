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
  production: {
    username: "root",
    password: null,
    database: "ecommers_db",
    host: "127.0.0.1",
    dialect: "postgres",
    dialectOptions: {},
  },
};
