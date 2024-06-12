import Peminjaman from "../models/peminjamanModel.js";
import Pengembalian from "../models/pengembalianModel.js";
import Petugas from "../models/petugasModel.js";
import bcrypt from "bcrypt";
import argon2, { hash } from "argon2";

export const getPetugas = async (req, res) => {
  try {
    const response = await Petugas.findAll({
      include: {
        model: Peminjaman,
        include: {
          model: Pengembalian,
        },
      },
    });
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

export const createPetugas = async (req, res) => {
  const { username, password, nama, telp, alamat } = req.body;
  const pw = await argon2.hash(password);
  try {
    Petugas.create({
      username: username,
      password: pw,
      nama: nama,
      telp: telp,
      alamat: alamat,
    });
    res.status(201).json({ msg: "Pembuatan Petugas Berhasil" });
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};

export const getPetugasById = async (req, res) => {
  try {
    const response = await Petugas.findOne({
      where: {
        uuid: req.params.id,
      },
    });
    if (!response)
      return res.status(401).json({ msg: "Data Petugas Tidak ditemukan" });
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

export const updatePetugas = async (req, res) => {
  const { username, password, nama, telp, alamat } = req.body;
  try {
    const resss = await Petugas.findOne({
      where: {
        uuid: req.params.id,
      },
    });
    if (!resss)
      return res.status(404).json({ msg: "Data Petugas tidak ditemukan" });
    const response = await Petugas.update(
      {
        username,
        password,
        nama,
        telp,
        alamat,
      },
      {
        where: {
          uuid: req.params.id,
        },
      }
    );
    res.status(200).json({ msg: "Data Petugas berhasil dihapus", response });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

export const deletePetugas = async (req, res) => {
  const { petugas_id, username, password, nama, telp, alamat } = req.params;
  try {
    const resss = await Petugas.findOne({
      attributes: {
        username,
        password,
        nama,
        telp,
        alamat,
      },
      where: {
        uuid: req.params.id,
      },
    });
    if (!resss)
      return res.status(404).json({ msg: "Data Petugas tidak ditemukan" });
    await Petugas.destroy({
      where: {
        uuid: req.params.id,
      },
    });
    res.status(200).json({ msg: "Data Petugas berhasil dihapus", resss });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};
