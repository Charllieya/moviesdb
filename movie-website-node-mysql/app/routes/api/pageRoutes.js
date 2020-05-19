const daoClass = require("../../dao/pagesDao"); //dao needs to be in APP FOLDER
const dao = new daoClass();

const express = require("express");
const router = express.Router();

//root route: /api/movies/ - the last '/' is what the '/' is referring too. everything before it is already pre-fixed.

//ALL CARS ROUTES ->> /api/movies/
router.get("/", (req, res) => {
    dao.findAll(req, res);
});
//FIND BY ID ROUTES ->> /api/movies/:id
router.get("/:name", (req, res) => {
    dao.findbyName(req, res, req.params.name);
});

module.exports = router;