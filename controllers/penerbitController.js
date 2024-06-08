import Penerbit from "../models/penerbitModel.js";

export const getPenerbit = async (req, res) => {
    try {
        const response = await Penerbit.findAll();
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
};

// NEW
export const getPenerbitById = async (req, res) => {
    try {
      const response = await Penerbit.findOne({
        where: {
          uuid: req.params.id,
        },
      });
      if (!response)
        return res.status(401).json({ msg: "Penerbit detail tidak ditemukan" });
      res.status(200).json(response);
    } catch (error) {
      res.status(500).json({ msg: error.message });
    }
  };

  export const updatePenerbit = async (req, res) => {
    const {  nama,  alamat, telp } = req.body;
    try {
      const resss = await Penerbit.findOne({
        where: {
          uuid: req.params.id,
        },
      });
      if (!resss)
        return res.status(404).json({ msg: "Penerbit tidak ditemukan" });
      const response = await Penerbit.update(
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
      res.status(200).json({ msg: "Penerbit berhasil diupdate", response });
    } catch (error) {
      res.status(500).json({ msg: error.message });
    }
  };

  export const deletePenerbit = async (req, res) => {
    const { nama, alamat, telp } =
      req.params;
    try {
      const resss = await Penerbit.findOne({
        attributes: {
          nama,
          alamat,
          telp,
        },
        where: {
          uuid: req.params.id,
        },
      });
      if (!resss) return res.status(404).json({ msg: "Penerbit tidak ditemukan" });
      await Penerbit.destroy({
        where: {
          uuid: req.params.id,
        },
      });
      res.status(200).json({ msg: "Penerbit berhasil dihapus", resss });
    } catch (error) {
      res.status(500).json({ msg: error.message });
    }
  };








export const createPenerbit = async (req, res) => {
    const { nama, alamat, telp } = req.body;
    try {
        await Penerbit.create({
            nama: nama,
            alamat: alamat,
            telp: telp,
        });
        res.status(201).json({ msg: "Pembuatan Penerbit Berhasil" });
    } catch (error) {
        res.status(400).json({ msg: error.message });
    }
};
