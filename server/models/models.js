import sequelize from "../db.config.js";
import { DataTypes } from "sequelize";

const User = sequelize.define('user', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    email: { type: DataTypes.STRING, unique: true, isEmail: true },
    password: { type: DataTypes.STRING },
    role: { type: DataTypes.STRING, defaultValue: "USER" }
})
const Game = sequelize.define('game', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    title: { type: DataTypes.STRING },
    code: { type: DataTypes.STRING },
    description: { type: DataTypes.STRING },
    img: { type: DataTypes.STRING },
    category: { type: DataTypes.STRING },
    genre: { type: DataTypes.STRING },
    rate: { type: DataTypes.STRING },
    copyrights: { type: DataTypes.STRING },
    hints: { type: DataTypes.STRING },
    developer: { type: DataTypes.STRING },
    franchise: { type: DataTypes.STRING },
    release_date: { type: DataTypes.STRING },
})

const Reviews = sequelize.define('reviews', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    type_of_user: { type: DataTypes.STRING },
    status: { type: DataTypes.STRING },
    text: { type: DataTypes.STRING },
    support: { type: DataTypes.STRING },
})

const Characteristic = sequelize.define('characteristic', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    os: { type: DataTypes.STRING },
    processor: { type: DataTypes.STRING },
    ram: { type: DataTypes.STRING },
    vc: { type: DataTypes.STRING },
    directx: { type: DataTypes.STRING },
    network: { type: DataTypes.STRING },
    hdd: { type: DataTypes.STRING },
    sc: { type: DataTypes.STRING },
    additionally: { type: DataTypes.STRING },
})

Game.hasMany(Reviews)
Reviews.belongsTo(Game)

Game.hasMany(Characteristic)
Characteristic.belongsTo(Game)

// module.exports = {
//     User,
//     Game,
//     Reviews,
//     Characteristic
// }

export default {
    User,
    Game,
    Reviews,
    Characteristic
}