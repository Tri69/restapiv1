const express = require("express");
const router = express.Router();
const controller = require("../controllers/useController");
const fs = require("fs");
const view = require("../../views/index.ejs")


router.get("/", (req, res, next) => {
	res.send("<h1>Test Rest API</h1> <br> <a href='localhost:3002/surah'>Surah</a>")
})

router.get("/surah", controller.surah)
router.get("/alfatihah", controller.alfatihah);

router.use("/", (req, res) => {
	res.send("404 not Found")
})

module.exports = router;