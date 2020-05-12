const daoClass = require("../../dao/genreDao"); //dao needs to be in APP FOLDER
const dao = new daoClass();

const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    dao.findAll(req, res);
});
router.get("/:genre", (req, res) => {
    dao.findbyGenre(req, res, req.params.genre);
});

module.exports = router;