const mongoose = require("mongoose")
const Schema = mongoose.Schema

const Single = new Schema(
  {
    name: { type: "string", required: true },
    lyrics: { type: "string", required: true },
    length: { type: "string", required: true },
    artist: { type: "string", required: true },
    album_id: { type: Schema.Types.ObjectId, ref: "album_id" },
  },
  { timestamps: true }
)

module.exports = mongoose.model("single", Single)
