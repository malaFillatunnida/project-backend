import { Sequelize } from "sequelize";
import db from "../config/db.js";

const { DataTypes } = Sequelize;

const Product = db.define('wisata', {
    foto: {
        type: DataTypes.STRING
    },
    nama: {
        type: DataTypes.STRING
    },
    alamat: {
        type: DataTypes.STRING
    }
}, {
    freezeTableName: true
});

export default Product;