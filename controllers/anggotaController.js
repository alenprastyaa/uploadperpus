import Anggota from "../models/anggotaModel.js";

export const getAnggota = async (req, res) => {
  try {
    const response = await Anggota.findAll();
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

export const createAnggota = async (req, res) => {
  const { nama, jenis_kelamin, alamat, telp } = req.body;
  try {
    await Peminjaman.create({
      nama: nama,
      jenis_kelamin: jenis_kelamin,
      alamat: alamat,
      telp: telp,
    });
    res.status(201).json({ msg: "Pembuatan Anggota Berhasil" });
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};
