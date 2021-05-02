const express = require("express");
const controller = require('../controller/controller');

const router = express.Router();

router.get("/", controller.getTasks);

router.post("/", controller.createTask);

router.get("/update/:id", controller.updateTask);

router.get("/delete/:id", controller.deleteTask);

module.exports = router;
