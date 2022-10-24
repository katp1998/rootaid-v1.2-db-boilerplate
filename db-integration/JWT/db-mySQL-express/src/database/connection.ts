import { Sequelize } from 'sequelize-typescript'
import { User } from './models/user.models'
import dotenv from 'dotenv'

//IMPORTING DOTENV:
dotenv.config();

const connection = new Sequelize({
  dialect: 'mysql',
  host: process.env.DB_HOST,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  logging: false,
  models: [User],
})

export default connection


