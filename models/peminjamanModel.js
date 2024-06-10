import { Sequelize } from "sequelize";
import db from "../config/Database.js";
import Petugas from "./petugasModel.js";
import Anggota from "./anggotaModel.js";

const { DataTypes } = Sequelize;

const Peminjaman = db.define(
  "peminjaman",
  {
    uuid: {
      type: DataTypes.STRING,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },

    tanggal_pinjam: {
      type: DataTypes.DATE,
      allowNull: false,
      validate: {
        notEmpty: true,
        isDate: true,
      },
    },

    tanggal_kembali: {
      type: DataTypes.DATE,
      allowNull: false,
      validate: {
        notEmpty: true,
        isDate: true,
      },
    },

    anggota_id: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },

    petugas_id: {
      type: DataTypes.STRING,
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

export default Peminjaman;
