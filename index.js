// import
const express = require("express");
const router = require("./routes/routes");
const sqlcon = require("./connection");

// express app
const app = express();
app.use(
	express.urlencoded({
		extended: true,
	})
);

// register view engine
app.set("view engine", "ejs");

// routes
app.use(router);

// starting app
app.listen(3000);
