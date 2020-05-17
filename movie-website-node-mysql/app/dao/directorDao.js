const pool = require("../config/dbconfig");

class DirectorDao {
    //sometimes you have a parent dao class so its best to give the classes more define names.
    constructor() {
        this.pool = pool;
    }

    findAll(req, res) {
        // let sql = "SELECT * FROM movies where deleted_at is NULL"; // simple statement unless you have a lot of joins.
        let sql = "SELECT * FROM directors order by fname";
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
        // var year2 = Number(year) + 9; //added year plus nine because search year by decade. 
        // let sql = `select * from movies where year between ? and ? order by year`
        let sql = `SELECT m.id, m.title, m.year, m.director_id, d.fname,d.lname
        from movies m
            join directors d ON m.director_id = d.id
            WHERE d.id=? order by m.id;`
        this.pool.query(sql, [id], function(error, rows) {
            if (error) {
                res.json({
                    error: true,
                    message: error,
                });
            }
            // console.log(year);
            // console.log(year2);
            res.json(rows);
        });
    }
}

module.exports = DirectorDao;