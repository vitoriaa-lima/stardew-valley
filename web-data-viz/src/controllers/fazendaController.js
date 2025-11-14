var fazendaModel = require("../models/fazendaModel");

function cadastrar(req, res) {
    var nomeFazenda = req.body.fazendaServer;
    var fazendaFavorita = req.body.fazendaFavoritaServer;
    var animal = req.body.animalServer;
    var personagem = req.body.personagemServer;
    var coisaFavorita = req.body.coisaFavoritaServer;
    var perfeicao = req.body.perfeicaoServer;
    var verdadeira = req.body.verdadeiraServer;
    var fkUsuario = req.body.fkUsuario;

    if (nomeFazenda == undefined) {
        res.status(400).send("Seu nome da fazenda está undefined!");
    } else if (fazendaFavorita == undefined) {
        res.status(400).send("Sua fazenda está undefined!");
    } else if (animal == undefined) {
        res.status(400).send("Seu animal está undefined!");
    } else if (personagem == undefined) {
        res.status(400).send("Seu personagem está undefined!");
    } else if (coisaFavorita == undefined) {
        res.status(400).send("Sua coisa favorita está undefined!");
    } else if (perfeicao == undefined) {
        res.status(400).send("Sua perfeição esrá undefined!");
    } else if (verdadeira == undefined) {
        res.status(400).send("Sua verdadeira perfeição esrá undefined!");
    } else if (fkUsuario == undefined) {
        res.status(400).send("Sua verdadeira perfeição esrá undefined!");
    } else {

        fazendaModel.cadastrar(fkUsuario, nomeFazenda, fazendaFavorita, animal, personagem, coisaFavorita, perfeicao, verdadeira).then(function(resposta){
            res.status(200).send("Fazenda Usuário cadastrada com sucesso");
        }).cath(function(erro){
            res.status(500).json(erro.sqlMessage);
        })
    }





}

module.exports = {
    cadastrar
}