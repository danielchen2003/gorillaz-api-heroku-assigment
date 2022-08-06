const mongoose = require("mongoose")
const Schema = mongoose.Schema

const Album = new Schema(
  {
    title: { type: "string", required: true },
    numberoftracks: { type: "number", required: true },
    year: { type: "number", required: true },
    country: { type: "string", required: true },
    label: { type: "string", required: true },
  },
  { timestamps: true }
)

module.exports = mongoose.model("album", Album)
