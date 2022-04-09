import Kategori from "../models/KategoriModel.js";

export const getAllKategori = async (req, res) => {
  try {
    const kategori = await Kategori.findAll();
    res.json(kategori);
  } catch (error) {
    res.json({ message: error.message });
  }
};

export const getKategoriById = async (req, res) => {
  try {
    const kategori = await Kategori.findAll({
      where: {
        id: req.params.id,
      },
    });
    res.json(kategori[0]);
  } catch (error) {
    res.json({ message: error.message });
  }
};

export const createKategori = async (req, res) => {
  try {
    await Kategori.create(req.body);
    res.json({
      message: "Kategori Created",
    });
  } catch (error) {
    res.json({ message: error.message });
  }
};

export const updateKategori = async (req, res) => {
  try {
    await Kategori.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    res.json({
      message: "Kategori Updated",
    });
  } catch (error) {
    res.json({ message: error.message });
  }
};

export const deleteKategori = async (req, res) => {
  try {
    await Kategori.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.json({
      message: "Kategori Deleted",
    });
  } catch (error) {
    res.json({ message: error.message });
  }
};
