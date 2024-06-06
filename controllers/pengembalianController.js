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
