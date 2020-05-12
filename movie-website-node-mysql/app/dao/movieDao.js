const pool = require("../config/dbconfig");

class MovieDao {
    //sometimes you have a parent dao class so its best to give the classes more define names.
    constructor() {
        this.pool = pool;
    }
    findAll(req, res) {
        // let sql = "SELECT * FROM movies where deleted_at is NULL"; // simple statement unless you have a lot of joins.
        let sql = "SELECT * FROM movies";
        this.pool.query(sql, function(err, rows) {
            if (err) {
                res.json({
                    //error and message suppose to look like: "error", "message". It works withou
                    error: true,
                    message: err,
                });
            }
            res.json(rows);
        });
    }
    findbyID(req, res, id) {
        let sql = "SELECT * FROM movies where id= ?";
        this.pool.query(sql, [id], function(err, rows) {
            if (err) {
                res.json({
                    error: true,
                    message: err,
                });
            }
            res.json(rows[0]);
        });
    }

    // findbyGenre(req, res, genre) {
    //     let sql = `SELECT m.id, m.title, m.year, g.genre
    // from movies m
    //     join genres g ON m.genre_id = g.id
    //     WHERE g.genre=?;
    // `;
    //     this.pool.query(sql, [genre], function(error, rows) {
    //         if (error) {
    //             res.json({
    //                 error: true,
    //                 message: error
    //             });
    //         }
    //         res.json(rows);
    //     });
    // }

    //MY WAY (CHARLLIEYA)
    // updateById(req, res) {
    //     // let sql = "SELECT * FROM movies where id= ?";
    //     let sql = 'UPDATE movies set format = ? WHERE id =?' //update the data!
    //     this.pool.query(sql, [req.body.format, req.body.id], (err, rows) => {
    //         if (err) {
    //             res.json({
    //                 error: true,
    //                 message: err
    //             });
    //         };
    //         res.json(rows);
    //     });
    // }

    //BRYCE WAY:
    updateById(req, res) {
        let fields = Object.keys(req.body); // making dynamic. fields is now an array
        // fields[fields.indexOf('condition')] = 'condition'; //if i were using my cars database (for condition because condition is a reserve word in sql) : at position in the array, make equal to backtick array
        let values = Object.values(req.body); //making dynmical

        if (!req.params.id) {
            res.json({
                error: true,
                message: "Missing ID",
            });
        } else if (fields.length == 0) {
            res.json({
                error: true,
                message: "No fields to update",
            });
        }

        let sql = `UPDATE movies set ${fields.join("=?,")}=? WHERE id =?`; //update the data!
        //have to put =? at the end of the join because join only add between things!
        console.log(sql);

        this.pool.query(sql, [...values, req.params.id], (err, rows) => {
            //... means SPREAD. It takes values from of array (in this instance).
            //did this method because, cant send id in body of values. if we didnt use params, then id would have to be passed in last.  he sent id as a "url param" and that seperated id for the body content.

            if (err) {
                res.json({
                    error: true,
                    message: err,
                });
            }
            res.json(rows);
        });
    }

    //MY WAY (CHARLLIEYA)
    // createById(req, res) {
    //     // let sql = "SELECT * FROM movies where id= ?";
    //     // let sql = `INSERT INTO movies(title,year,director_id,genre_id)
    //     // VALUES ("Pretty in Pink",1986,3,3);`;
    //     // let sql = `INSERT INTO movies(title,year,director_id,genre_id)VALUES("${req.body.title}", ${req.body.year},${req.body.director_id},${req.body.genre_id});`;
    //     let sql = `INSERT INTO movies(title,year,director_id,genre_id)VALUES(?,?,?,?);`;
    //     this.pool.query(sql, [ //req.body.title, req.body.year, req.body.director_id, req.body.genre_id
    //         ],
    //         (err, rows) => {
    //             if (err) {
    //                 res.json({
    //                     error: true,
    //                     message: err
    //                 });
    //             };
    //             res.json(rows);
    //         });
    // }

    //BRYCE WAY:
    createById(req, res) {
        // let sql = "SELECT * FROM movies where id= ?";
        let fields = Object.keys(req.body);
        // fields[ fields.indexOf('condition')] = 'condition'; //if i were using my cars database
        let values = Object.values(req.body);
        //Required Min Data
        if (!req.body.title || !req.body.year) {
            res.json({
                error: true,
                message: "Missing Data",
            });
        }
        // res.json({ "here": "yo" });
        //dynamically. dont send in NULLS using this!
        let sql = `INSERT INTO movies(${fields.join(",")})VALUES(${Array(
      values.length
    )
      .fill("?")
      .join(",")});`;
        this.pool.query(
            sql,
            values, //req.body.title, req.body.year, req.body.director_id, req.body.genre_id
            (err, rows) => {
                if (err) {
                    res.json({
                        error: true,
                        message: err,
                    });
                }
                res.json(rows);
            }
        );
    }
    deletebyID(req, res, id) {
        let sql = "UPDATE movies set deleted_at = NOW()  WHERE id=?";
        this.pool.query(sql, [id], function(err, rows) {
            if (err) {
                res.json({
                    error: true,
                    message: err,
                });
            }
            res.json(rows);
        });
    }
}

module.exports = MovieDao;