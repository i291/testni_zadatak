import { Sequelize } from "sequelize";
const db=new Sequelize('mojabaza','root','',{
    host:"localhost",
    dialect:'mysql'
})
export default db;