const daoClass = require("../../dao/directorDao"); //dao needs to be in APP FOLDER
const dao = new daoClass();

const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    dao.findAll(req, res);
});
router.get("/:id", (req, res) => {
    var year = req.params.year;
    dao.findbyID(req, res, req.params.id);
});

module.exports = router;