import Pengembalian from "../models/pengembalianModel.js";

export const getPengembalian = async (req, res) => {
  try {
    const response = await Pengembalian.findAll();
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

export const createPengembalian = async (req, res) => {
  const { tanggal_pengembalian, denda, peminjaman_id, anggota_id, petugas_id } = req.body;
  try {
    await Pengembalian.create({
      tanggal_pengembalian: tanggal_pengembalian,
      denda: denda,
      peminjaman_id: peminjaman_id,
      anggota_id: anggota_id,
      petugas_id: petugas_id,
    });
    res.status(201).json({ msg: "Pengembalian Berhasil" });
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};


export const getPengembalianByID = async (req, res) => {
  try {
    const response = await Pengembalian.findOne({
      where: {
        uuid: req.params.id,
      },
    });
    if (!response) return res.status(401).json({ msg: "Data Pengembalian tidak di temukan" })
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

export const updatePengembalian = async (req, res) => {
  const { tanggal_pengembalian, denda, peminjaman_id, anggota_id, petugas_id } = req.body;
  try {
    const resss = await Pengembalian.findOne({
      where: {
        uuid: req.params.id,
      },
    });
    if (!resss)
      return res.status(404).json({ msg: "Data Pengembalian tidak ditemukan" });
    const response = await Pengembalian.update(
      {
        tanggal_pengembalian, denda, peminjaman_id, anggota_id, petugas_id
      },
      {
        where: {
          uuid: req.params.id,
        },
      }
    );
    res.status(200).json({ msg: "Data berhasil dihapus", response });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

export const deletePengembalian = async (req, res) => {
  const { tanggal_pengembalian, denda, peminjaman_id, anggota_id, petugas_id } = req.params;
  try {
    const resss = await Pengembalian.findOne({
      attributes: {
        tanggal_pengembalian, denda, peminjaman_id, anggota_id, petugas_id
      },
      where: {
        uuid: req.params.id,
      },
    });
    if (!resss)
      return res.status(404).json({ msg: "Data pengembalian tidak ditemukan" });
    await Pengembalian.destroy({
      where: {
        uuid: req.params.id,
      },
    });
    res.status(200).json({ msg: "Data berhasil dihapus", resss });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};


