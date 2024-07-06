import { Sequelize } from "sequelize";

const db = new Sequelize('LKS-CRUD', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});

export default db;