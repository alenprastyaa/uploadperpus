import { response } from "express";
import Petugas from "../models/petugasModel.js";
import argon2 from "argon2";

export const getPetugas = async (req, res) => {
  try {
    const response = await Petugas.findAll();
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

export const createPetugas = async (req, res) => {
  const { username, password, nama, telp, alamat } = req.body;
  const hashPassword = await argon2.hash(password);
  try {
    await Petugas.create({
      username: username,
      password: hashPassword,
      nama: nama,
      telp: telp,
      alamat: alamat,
    });
    res.status(201).json({ msg: "Register Berhasil" });
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};
