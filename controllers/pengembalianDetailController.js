import Pengembalian from "../models/pengembalianDetailModel.js";

export const getPengembalianDetail = async (req, res) => {
  try {
    const response = await Pengembalian.findAll();
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

export const createPengembalianDetail = async (req, res) => {
  const { pengembalian_id, buku_id } = req.body;
  try {
    await Pengembalian.create({
      pengembalian_id: pengembalian_id,
      buku_id: buku_id,
    });
    res.status(201).json({ msg: "Pengembalian Detail Berhasil" });
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};
