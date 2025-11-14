var express = require("express");
var router = express.Router();

var fazendaController = require("../controllers/fazendaController");

router.post("/cadastrar", function (req, res){
    fazendaController.cadastrar(req, res);
})

module.exports = router;