const { Router } = require("express")
const controllers = require("../controllers")
const router = Router()

router.get("/", (req, res) => res.send("This is the root!"))

router.get("/singles", controllers.getAllSinges)

router.get("/singles/:id", controllers.getSinglesById)

module.exports = router
