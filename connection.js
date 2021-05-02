const mysql = require("mysql");

// connect to mysql
const con = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "",
	database: "todo",
});

con.connect((err) => {
	if (!err) {
		console.log("Connected to database");
	} else {
		console.log(err);
	}
});

module.exports = con;