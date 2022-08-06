const db = require("../db")
const Album = require("../models/album")

db.on("error", console.error.bind(console, "MongoDB connection error:"))

const main = async () => {
  const albums = [
    {
      title: "Demon Days",
      numberoftracks: 15,
      year: 2005,
      country: "Germany",
      label: "Parlophone",
    },
    {
      title: "Gorillaz",
      numberoftracks: 16,
      year: 2001,
      country: "United States",
      label: "Parlophone",
    },
    {
      title: "Plastic Beach",
      numberoftracks: 16,
      year: 2010,
      country: "United Kingdom",
      label: "Parlophone",
    },
  ]

  await Album.insertMany(albums)
  console.log("Created albums!")
}
const run = async () => {
  await main()
  db.close()
}

run()
