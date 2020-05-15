const express = require("express");
const router = express.Router(); // express has its on internal router. We are using express internal ability to chain routers together.

// /api/movies
//dont mean: http://localhost:3000/movies <<<<- does not exist
router.use("/movies", require("./api/movieRoutes")); // calls movieRoutes file.

router.use("/genres", require("./api/genreRoutes"));

router.use("/years", require("./api/yearRoutes"));

router.use("/pages", require("./api/pageRoutes"));

router.use("/contacts", require("./api/contactRoutes"));
//it allows us to add in additional routes on the api. We created a system in which all routes will be pre-fixed with /api. We have the ability to create additional endpoints.

module.exports = router;