const pool = require("../config/dbconfig");

class PageDao {
    //sometimes you have a parent dao class so its best to give the classes more define names.
    constructor() {
        this.pool = pool;
    }
    findAll(req, res) {
        // let sql = "SELECT * FROM movies where deleted_at is NULL"; // simple statement unless you have a lot of joins.
        let sql = "SELECT * FROM movie_pages";
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
    findbyName(req, res, name) {
        let sql = "SELECT * FROM movie_pages where name = ?";
        this.pool.query(sql, [name], function(err, rows) {
            if (err) {
                res.json({
                    error: true,
                    message: err,
                });
            }
            res.json(rows[0]);
        });
    }
}

module.exports = PageDao;