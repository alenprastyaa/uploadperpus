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
  const { username, petugas_id, password, nama, telp, alamat } = req.body;
  const hashPassword = await argon2.hash(password);
  try {
    await Petugas.create({
      username: username,
      petugas_id: petugas_id,
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


export const getPetugasById = async (req, res) => {
  try {
    const response = await Petugas.findOne({
      where: {
        uuid: req.params.id,
      },
    });
    if (!response) return res.status(401).json({ msg: "Data Petugas Tidak ditemukan" })
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

export const updatePetugas = async (req, res) => {
  const { username, petugas_id, password, nama, telp, alamat } = req.body;
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
        username, petugas_id, password, nama, telp, alamat
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
  const { username, password, nama, telp, alamat } = req.params;
  try {
    const resss = await Petugas.findOne({
      attributes: {
        username, petugas_id, password, nama, telp, alamat
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
