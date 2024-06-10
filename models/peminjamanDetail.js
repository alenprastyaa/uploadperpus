import { Sequelize } from "sequelize";
import db from "../config/Database.js";
import Peminjaman from "./peminjamanModel.js";
import Buku from "./bukuModel.js";

const { DataTypes } = Sequelize;

const PeminjamanDetail = db.define(
  "peminjaman_detail",
  {
    uuid: {
      type: DataTypes.STRING,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },

    peminjaman_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },

    Buku_id: {
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

Peminjaman.hasMany(PeminjamanDetail);
PeminjamanDetail.belongsTo(Peminjaman, { foreignKey: "id" });

Buku.hasMany(PeminjamanDetail);
PeminjamanDetail.belongsTo(Buku, { foreignKey: "id" });

export default PeminjamanDetail;
