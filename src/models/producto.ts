import db from "../db/connection";
import { DataTypes } from "sequelize";

const Producto = db.define("producto", {
  name: {
    type: DataTypes.STRING(10),
  },
  description: {
    type: DataTypes.STRING
  },
  price: {
    type: DataTypes.DOUBLE
  },
  stock: {
    type: DataTypes.INTEGER
  }

},{
    createdAt: false,
    updatedAt: false
});

export default Producto;
