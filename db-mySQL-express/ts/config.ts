import { Sequelize } from 'sequelize-typescript'
import { User } from './user.model'


const connection = new Sequelize({
  dialect: 'mysql',
  host: CONFIG.DB.HOST,
  username: CONFIG.DB.USER,
  password: CONFIG.DB.PASSWORD,
  database: CONFIG.DB.DATABASE,
  logging: false,
  models: [User],
})

export default connection
