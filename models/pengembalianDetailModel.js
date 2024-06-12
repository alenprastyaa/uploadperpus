import { Sequelize } from "sequelize";
import db from "../config/Database.js";
import Buku from "./bukuModel.js";
import Pengembalian from "./pengembalianModel.js";

const { DataTypes } = Sequelize;

const PengembalianDetail = db.define(
  "pengembalian_detail",
  {
    uuid: {
      type: DataTypes.STRING,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },

    pengembalian_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },

    buku_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
  },

  {
    freezeTableName: true,
  }
);

Pengembalian.hasOne(PengembalianDetail, {
  foreignKey: "pengembalian_id",
});

Buku.hasOne(PengembalianDetail, {
  foreignKey: "buku_id",
});

export default PengembalianDetail;
