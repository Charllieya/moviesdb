const pool = require("../config/dbconfig");

class YearDao {
    //sometimes you have a parent dao class so its best to give the classes more define names.
    constructor() {
        this.pool = pool;
    }

    findAll(req, res) {
        // let sql = "SELECT * FROM movies where deleted_at is NULL"; // simple statement unless you have a lot of joins.
        let sql = "SELECT * FROM decades order by decade";
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

    findbyYear(req, res, year) {
        var year2 = Number(year) + 9; //added year plus nine because search year by decade. 
        let sql = `select * from movies where year between ? and ? order by year`
        this.pool.query(sql, [year, year2], function(error, rows) {
            if (error) {
                res.json({
                    error: true,
                    message: error,
                });
            }
            console.log(year);
            console.log(year2);
            res.json(rows);
        });
    }
}

module.exports = YearDao;