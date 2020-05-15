const daoClass = require("../../dao/yearDao"); //dao needs to be in APP FOLDER
const dao = new daoClass();

const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    dao.findAll(req, res);
});
router.get("/:year", (req, res) => {
    var year = req.params.year;
    dao.findbyYear(req, res, req.params.year);
});

module.exports = router;