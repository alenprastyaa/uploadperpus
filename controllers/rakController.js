import Rak from "../models/rakModel.js";

export const getRak = async (req, res) => {
    try {
        const response = await Rak.findAll();
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
};

export const createRak = async (req, res) => {
    const { kode_rak, lokasi } = req.body;
    try {
        await Rak.create({
            kode_rak: kode_rak,
            lokasi: lokasi
        });
        res.status(201).json({ msg: "Pembuatan Rak Berhasil" });
    } catch (error) {
        res.status(400).json({ msg: error.message });
    }
};

export const getRakById = async (req, res) => {
    try {
        const response = await Rak.findOne({
            where: {
                uuid: req.params.id,
            },
        });
        if (!response) return res.status(401).json({ msg: "Rak Buku tidak di temukan" })
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
};

export const updateRak = async (req, res) => {
    const { kode_rak, lokasi } = req.body;
    try {
        const resss = await Rak.findOne({
            where: {
                id: req.params.id,
            },
        });
        if (!resss)
            return res.status(404).json({ msg: "Data Rak tidak ditemukan" });
        const response = await Rak.update(
            {
                kode_rak, lokasi
            },
            {
                where: {
                    id: req.params.id,
                },
            }
        );
        res.status(200).json({ msg: "Data berhasil dihapus", response });
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
};

export const deleteRak = async (req, res) => {
    const { kode_rak, lokasi } = req.params;
    try {
        const resss = await Rak.findOne({
            attributes: {
                kode_rak, lokasi
            },
            where: {
                id: req.params.id,
            },
        });
        if (!resss)
            return res.status(404).json({ msg: "Data Rak tidak ditemukan" });
        await Rak.destroy({
            where: {
                id: req.params.id,
            },
        });
        res.status(200).json({ msg: "Data berhasil dihapus", resss });
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
};
