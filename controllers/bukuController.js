import Buku from "../models/bukuModel.js";

export const getBuku = async (req, res) => {
  try {
    const response = await Buku.findAll();
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

export const createBuku = async (req, res) => {
  const { judul, tahun_terbit, jumlah, isbn, pengarang_id, penerbit_id, kode_rak } = req.body;
  try {
    await Peminjaman.create({
      judul: judul,
      tahun_terbit: tahun_terbit,
      jumlah: jumlah,
      isbn: isbn,
      pengarang_id: pengarang_id,
      penerbit_id: penerbit_id,
      kode_rak: kode_rak,
    });
    res.status(201).json({ msg: "Input Buku Berhasil" });
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};