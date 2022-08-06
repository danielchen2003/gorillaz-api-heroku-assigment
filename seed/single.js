const db = require("../db")
const Album = require("../models/album")
const Single = require("../models/single")

db.on("error", console.error.bind(console, "MongoDB connection error:"))

const main = async () => {
  const demonDays = await Album.find({ name: "Demon Days" })
  const gorillaz = await Album.find({ name: "Gorillaz" })
  const plasticBeach = await Album.find({ name: "Plastic Beach" })

  const singles = [
    {
      name: "Demon Days",
      lyrics:
        "Aaaaaaaaaahhhhhh... In demon days, it's cold inside You don't get nobody, people sigh It's so bad, lasting far, but love yourself Hiding in a hole in there All the glasses are too big Bring it back, got to hold it back To let you do that yet you don't want me back Before it fall down, falling down falling down",
      length: "4:29",
      artist: "Gorillaz",
      album_id: demonDays[0]._id,
    },
    {
      name: "Plastic Beach",
      lyrics:
        "To the dark, dark seas Comes the only whale Watching ships go by It's the day we try It doesn't know, it's a Casio on a plastic beach It's a Casio on a plastic beach It's styrofoam deep sea landfill It's styrofoam deep sea landfill It's automated computer speech It's automated computer speech It's a Casio on a plastic beach It's a Casio Did they haul you out On a really hot day? When the call got made You've gone away It doesn't know, it's a Casio on a plastic beach It's a Casio on a plastic beach It's styrofoam deep sea landfill It's styrofoam deep sea landfill It's automated computer speech It's automated computer speech It's a Casio on a plastic beach It's a Casio Plastico, plastico, plastico and green green glow Plastico, plastico, plastico, green green glow Plastico, plastico, plastico and green green glow Plastico, plastico, plastico It's a Casio on a plastic beach It's a Casio on a plastic beach It's styrofoam deep sea landfill It's styrofoam deep sea landfill It's automated computer speech It's automated computer speech It's a Casio on a plastic beach It's a Casio",
      length: "3:47",
      artist: "Gorillaz",
      album_id: plasticBeach[0]._id,
    },
    {
      name: "Tomorrow Comes Today",
      lyrics:
        "Everybody's here with me Got no camera to see Don't think I'm all in this world The camera won't let me go The verdict doesn't love our soul The digital won't let me go Yeah yeah yeah, I'll pay (Yeah, yeah) When tomorrow, tomorrow comes today Stereo, I want it on It's taken me far too long Don't think I'm all in this world I don't think I'll be here too long I don't think I'll be here too long I don't think I'll be here too long Yeah yeah yeah, I'll pay When tomorrow, tomorrow comes today",
      length: "3:14",
      artist: "Gorillaz",
      album_id: gorillaz[0]._id,
    },
  ]

  await Single.insertMany(singles)
  console.log("Created song with Alums!")
}
const run = async () => {
  await main()
  db.close()
}
run()
