import {Sequelize} from "sequelize";

const db = new Sequelize('songseng','root','',{
    host: 'localhost',
    dialect: "mysql"
});

export default db;