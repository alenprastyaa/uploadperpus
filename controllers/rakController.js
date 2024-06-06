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
