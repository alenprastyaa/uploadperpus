import  Pengarang from "../models/pengarangModel.js";

export const getPengarang = async (req, res) => {
    try {
        const response = await Pengarang.findAll();
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
};

export const createPengarang = async (req, res) => {
    const { nama, alamat, telp } = req.body;
    try {
        await Pengarang.create({
            nama: nama,
            alamat: alamat,
            telp: telp,
        });
        res.status(201).json({ msg: "Pembuatan Pengarang Berhasil" });
    } catch (error) {
        res.status(400).json({ msg: error.message });
    }
};
