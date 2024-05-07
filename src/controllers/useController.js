const surah = require("../content/surah")
const alfatihah = require("../content/alfatihah")
exports.surah = (req, res, next) => {
	res.json(surah)
}
exports.alfatihah = (req, res, next) => {
	res.json(alfatihah)
}
