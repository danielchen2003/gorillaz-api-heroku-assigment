const Single = require("../models/single")

const getAllSinges = async (req, res) => {
  try {
    const singles = await Single.find()
    return res.status(200).json({ singles })
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const getSinglesById = async (req, res) => {
  try {
    const { id } = req.params
    const singles = await Single.findById(id)
    if (singles) return res.status(200).json({ singles })
    else return res.status(404).send("Single not found")
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

module.exports = {
  getAllSinges,
  getSinglesById,
}
