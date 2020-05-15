const express = require("express"); // gives us access to express
const app = express(); //exstantate express into app.

const cors = require("cors"); // gives us access to cors. Cors handle the http for us. A middelware meaning that it will be executed in the middle of the communciation and will do many things.
const bodyParser = require("body-parser"); //allows us to parse the body. Send information back to our api that can be parse by our api.
const router = require("./app/routes/router"); //all more flexiable for api to scale. calls router file.

// as an api gets bigger (Scales), do you have a file system that can scale instead of a 1000 lines in one index.js. Router is a way to make the api more flexiable without people 1000 lines of code in one file.

const PORT = 3075;
app.listen(PORT, () => {
    console.log(`Server on PORT: ${PORT}`);
});

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json()); //parse json package that is sent back to our api.

//ALL ROUTES
app.get("/", (req, res) => {
    res.json({
        "All movies": "http://localhost:3075/api/movies",
        "Find by Genre": "http://localhost:3075/api/genres",
        "Find by Decade": "http://localhost:3075/api/years",
        "All pages": "http://localhost:3075/api/pages",
    });
});

app.post("/update", (req, res) => {
    console.log(req.body);

    res.json(req.body);
});

app.post("/create", (req, res) => {
    console.log(req.body);

    res.json(req.body);
});

app.post("/delete/:id", (req, res) => {
    console.log(req.body);

    res.json(req.body);
});

app.use("/api", router); //this entire system only exist after /api. pre-fixed with