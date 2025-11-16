var dashboardModel = require("../models/dashboardModel");

function idadeMedia(req, res){
    dashboardModel.idadeMedia()
    .then(function(resultado){
        if(resultado.length > 0){
            res.json(resultado[0]);
        } else {
            res.status(404).send(`Idade Média não encontrada.`);
        }
    })
    .catch(function(erro) {
        console.log(erro);
        res.status(500).json(erro.sqlMessage);
    })
}

function alcancaramPerfeicao(req, res){
    dashboardModel.alcancaramPerfeicao()
    .then(function(resultado){
        if(resultado.length > 0){
            res.json(resultado[0]);
        } else {
            res.status(404).send(`Alcançaram a Perfeição não encontrada.`);
        }
    }).catch(function(erro){
        console.log(erro);
        res.status(500).json(erro.sqlMessage);
    })
}

function personagemFav(req, res){
    dashboardModel.personagemFav()
    .then(function(resultado){
        if(resultado.length > 0){
            res.json(resultado[0]);
        } else{
            res.status(404).send(`Personagem mais favoritado não encontrado.`);
        }
    }).catch(function(erro){
        console.log(erro);
        res.status(500).json(erro.sqlMessage);
    })
}

module.exports = {
    idadeMedia,
    alcancaramPerfeicao,
    personagemFav
}