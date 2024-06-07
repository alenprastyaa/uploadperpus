import Penerbit from "../models/penerbitModel.js";

export const getPenerbit = async (req, res) => {
    try {
        const response = await Penerbit.findAll();
        res.status(200).json(response);
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
