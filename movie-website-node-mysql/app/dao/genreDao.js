const pool = require("../config/dbconfig");

class GenreDao {
    //sometimes you have a parent dao class so its best to give the classes more define names.
    constructor() {
        this.pool = pool;
    }

    findAll(req, res) {
        // let sql = "SELECT * FROM movies where deleted_at is NULL"; // simple statement unless you have a lot of joins.
        let sql = "SELECT * FROM genres";
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

    findbyGenre(req, res, genre) {
        let sql = `SELECT m.id, m.title, m.year, g.genre
    from movies m
        join genres g ON m.genre_id = g.id
        WHERE g.genre=?;
    `;
        this.pool.query(sql, [genre], function(error, rows) {
            if (error) {
                res.json({
                    error: true,
                    message: error,
                });
            }
            res.json(rows);
        });
    }
}

module.exports = GenreDao;