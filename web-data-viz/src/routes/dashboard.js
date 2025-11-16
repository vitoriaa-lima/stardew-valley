var express = require("express");
var router = express.Router();

var dashboardController = require("../controllers/dashboardController");

router.get("/idadeMedia", function (req, res) {
    dashboardController.idadeMedia(req, res);
})

router.get("/alcancaramPerfeicao", function (req, res){
    dashboardController.alcancaramPerfeicao(req, res);
})

router.get("/personagemFav", function (req, res){
    dashboardController.personagemFav(req, res);
})

module.exports = router;
