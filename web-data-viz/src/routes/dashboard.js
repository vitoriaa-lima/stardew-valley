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

router.get("/genero", function (req, res){
    dashboardController.genero(req, res);
})

router.get("/tipoPet", function (req, res){
    dashboardController.tipoPet(req, res);
})

router.get("/perfeicao", function (req, res){
    dashboardController.perfeicao(req, res);
})

router.get("/tipoFazenda", function (req, res){
    dashboardController.tipoFazenda(req, res);
})

module.exports = router;
