import Pengarang from "../models/pengarangModel.js";
import Pengembalian from "../models/pengembalianModel.js";

export const getPengarang = async (req, res) => {
  try {
    const response = await Pengarang.findAll();
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};
// new
export const getPengarangById = async (req, res) => {
  try {
    const response = await Pengarang.findOne({
      where: {
        uuid: req.params.id,
      },
    });
    if (!response)
      return res.status(401).json({ msg: "Pengarang tidak ditemukan" });
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

export const updatePengarang = async (req, res) => {
  const { nama, pengarang_id, alamat, telp } = req.body;
  try {
    const resss = await Pengarang.findOne({
      where: {
        uuid: req.params.id,
      },
    });
    if (!resss)
      return res.status(404).json({ msg: "Pengarang tidak ditemukan" });
    const response = await Pengarang.update(
      {
        nama,
        alamat,
        telp,
      },
      {
        where: {
          uuid: req.params.id,
        },
      }
    );
    res.status(200).json({ msg: "Pengarang berhasil diupdate", response });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

export const deletePengarang = async (req, res) => {
  const { nama, pengarang_id, alamat, telp } = req.params;
  try {
    const resss = await Pengarang.findOne({
      attributes: {
        nama,
        pengarang_id,
        alamat,
        telp,
      },
      where: {
        uuid: req.params.id,
      },
    });
    if (!resss)
      return res.status(404).json({ msg: "Pengarang tidak ditemukan" });
    await Pengarang.destroy({
      where: {
        uuid: req.params.id,
      },
    });
    res.status(200).json({ msg: "Pengarang berhasil dihapus", resss });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

export const createPengarang = async (req, res) => {
  const { nama, pengarang_id, alamat, telp } = req.body;
  try {
    await Pengarang.create({
      nama: nama,
      pengarang_id: pengarang_id,
      alamat: alamat,
      telp: telp,
    });
    res.status(201).json({ msg: "Pembuatan Pengarang Berhasil" });
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};
