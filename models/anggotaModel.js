import { Sequelize } from "sequelize";
import db from "../config/Database.js";
import Petugas from "./petugasModel.js";

const { DataTypes } = Sequelize;

const Anggota = db.define(
  "anggota",
  {
    uuid: {
      type: DataTypes.STRING,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },

    nama: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    kode_anggota: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },

    jenis_kelamin: {
      type: DataTypes.ENUM("L", "P"),
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },

    telp: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },

    alamat: {
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


export default Anggota;
