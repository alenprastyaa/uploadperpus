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



export const getPengembalianDetailById = async (req, res) => {
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

export const updatePengembalianDetail = async (req, res) => {
  const { pengembalian_id, buku_id } = req.body;
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
        pengembalian_id, buku_id
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

export const deletePengembalianDetail = async (req, res) => {
  const { pengembalian_id, buku_id } = req.params;
  try {
    const resss = await Pengembalian.findOne({
      attributes: {
        pengembalian_id, buku_id
      },
      where: {
        uuid: req.params.id,
      },
    });
    if (!resss)
      return res.status(404).json({ msg: "Data pengembalian Detail tidak ditemukan" });
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

