var express = require("express");
var router = express.Router();

var dashboardController = require("../controllers/dashboardController");

router.get("/idadeMedia", function (req, res) {
    dashboardController.idadeMedia(req, res);
})
