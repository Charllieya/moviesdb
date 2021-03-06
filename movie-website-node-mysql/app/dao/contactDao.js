const pool = require("../config/dbconfig");

class ContactDao {
    //sometimes you have a parent dao class so its best to give the classes more define names.
    constructor() {
        this.pool = pool;
    }

    findAll(req, res) {
        // let sql = "SELECT * FROM movies where deleted_at is NULL"; // simple statement unless you have a lot of joins.
        let sql = "SELECT * FROM contact_info";
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
        let sql = "SELECT * FROM contact_info where fname = ?";
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

    create(req, res) {
        // let sql = "SELECT * FROM movies where id= ?";
        let fields = Object.keys(req.body);
        // fields[ fields.indexOf('condition')] = 'condition'; //if i were using my cars database
        let values = Object.values(req.body);
        //Required Min Data
        if (!req.body.fname || !req.body.lname || !req.body.email) {
            res.json({
                error: true,
                message: "ERROR! There is missing data in this form!",
            });
        }
        // res.json({ "here": "yo" });
        //dynamically. dont send in NULLS using this!
        let sql = `INSERT INTO contact_info(${fields.join(",")})VALUES(${Array(
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
}

module.exports = ContactDao;