var express = require("express");
var router = express.Router();

var comunidadeController = require("../controllers/comunidadeController");

router.post("/comentar", function(req, res){
    comunidadeController.comentar(req, res);
})

module.exports = router;