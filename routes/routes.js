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

module.exports = router;
