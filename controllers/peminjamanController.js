import Peminjaman from "../models/peminjamanModel.js";

export const getPeminjaman = async (req, res) => {
  try {
    const response = await Peminjaman.findAll();
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

export const createPeminjaman = async (req, res) => {
  const { tanggal_pinjam, tanggal_kembali, anggota_id, petugas_id } = req.body;
  try {
    await Peminjaman.create({
      tanggal_pinjam: tanggal_pinjam,
      tanggal_kembali: tanggal_kembali,
      anggota_id: anggota_id,
      petugas_id: petugas_id,
    });
    res.status(201).json({ msg: "Peminjaman Berhasil" });
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};
