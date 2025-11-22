var express = require("express");
var router = express.Router();

var comunidadeController = require("../controllers/comunidadeController");

router.post("/cadastrar", function(req, res){
    comunidadeController.cadastrar(req, res);
})

router.get("/listar", function(req, res){
    comunidadeController.listar(req, res);
})

router.delete("/deletar/:idComentario", function(req, res){
    comunidadeController.deletar(req, res);
})

module.exports = router;