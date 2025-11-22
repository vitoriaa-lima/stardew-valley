var comunidadeModel = require("../models/comunidadeModel");

function cadastrar(req, res) {
    var titulo = req.body.tituloServer;
    var mensagem = req.body.mensagemServer;
    var fkUsuario = req.body.fkUsuario;

    if (titulo == undefined) {
        res.status(400).send("Seu título está undefined!");
    } else if (mensagem == undefined) {
        res.status(400).send("Sua mensagem está undefined!");
    } else if (fkUsuario == undefined) {
        res.status(400).send("ID do usuário está undefined!");
    } else {
        comunidadeModel.cadastrar(titulo, mensagem, fkUsuario)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            )
            .catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

function listar(req, res) {
    comunidadeModel.listar().then(
        function (resultado) {
            if (resultado.length > 0) {
                res.json(resultado);
            } else {
                res.status(404).send(`Comentários não encontrados.`);
            }
        }
    ).catch(
        function (erro) {
            console.log(erro);
            res.status(500).json(erro.sqlMessage);
        }
    )
}

function deletar(req, res) {
    var idComentario = req.params.idComentario;

    comunidadeModel.deletar(idComentario).then(
        function (resultado) {
            res.json(resultado);
        }
    ).catch(
        function (erro) {
            console.log(erro);
            console.log("Houve um erro ao deletar o post", erro.sqlMessage);
            res.status(500).json(erro.sqlMessage);
        }
    )
}

module.exports = {
    cadastrar,
    listar,
    deletar
};