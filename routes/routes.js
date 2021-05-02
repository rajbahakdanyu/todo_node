const express = require("express");
const controller = require("../controller/controller");
const sqlcon = require("../connection");

const router = express.Router();

router.get("/", (req, res) => {
	sqlcon.query("SELECT * FROM task", (err, rows, feilds) => {
        if (!err) {
            res.render('main', { tasks: rows });
        } else {
            console.log(err);
        }
    });
});

router.post("/", (req, res) => {
    var querystring = `INSERT INTO task (title) VALUES ('${req.body.title}')`;

	sqlcon.query(querystring, (err, rows, feilds) => {
        if (!err) {
            res.redirect('/');
        } else {
            console.log(err);
        }
    });
});

router.get('/update/:id', (req, res) => {
    var querystring = `SELECT * FROM task WHERE id = ${req.params.id}`;

	sqlcon.query(querystring, (err, rows, feilds) => {
        if (!err) {
            if (rows[0].completed == 0) {
                querystring = `UPDATE task SET completed = 1 WHERE id = ${req.params.id}`;
            } else {
                querystring = `UPDATE task SET completed = 0 WHERE id = ${req.params.id}`;
            }
            sqlcon.query(querystring, (err, rows, feilds) => {
                if (!err) {                    
                    res.redirect('/');
                } else {
                    console.log(err);
                }
            });
        } else {
            console.log(err);
        }
    });
})

module.exports = router;
