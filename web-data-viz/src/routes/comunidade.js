var express = require("express");
var router = express.Router();

var comunidadeController = require("../controllers/comunidadeController");

router.post("/cadastrar", function(req, res){
    comunidadeController.cadastrar(req, res);
})

module.exports = router;