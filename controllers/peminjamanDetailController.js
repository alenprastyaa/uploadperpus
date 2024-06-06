import PeminjamanDetail from "../models/peminjamanDetail.js";

export const getPeminjamanDetail = async (req, res) => {
    try {
        const response = await PeminjamanDetail.findAll();
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
};

export const createPeminjamanDetail = async (req, res) => {
    const { peminjaman_id, buku_id } = req.body;
    try {
        await PeminjamanDetail.create({
            peminjaman_id: peminjaman_id,
            buku_id: buku_id
        });
        res.status(201).json({ msg: "Pembuatan Peminjaman Detail Berhasil" });
    } catch (error) {
        res.status(400).json({ msg: error.message });
    }
};
