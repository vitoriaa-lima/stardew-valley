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

router.post("/curtir", function(req, res){
    comunidadeController.curtir(req, res);
})

router.get("/listarCurtidos/:idUsuario", function(req, res){
    comunidadeController.listarCurtidos(req, res);
})

module.exports = router;