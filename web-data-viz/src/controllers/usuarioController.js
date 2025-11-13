var usuarioModel = require("../models/usuarioModel");
var aquarioModel = require("../models/aquarioModel");

function autenticar(req, res) {
    var email = req.body.emailServer;
    var senha = req.body.senhaServer;

    if (email == undefined) {
        res.status(400).send("Seu email está undefined!");
    } else if (senha == undefined) {
        res.status(400).send("Sua senha está indefinida!");
    } else {

        usuarioModel.autenticar(email, senha)
            .then(
                function (resultadoAutenticar) {
                    console.log(`\nResultados encontrados: ${resultadoAutenticar.length}`);
                    console.log(`Resultados: ${JSON.stringify(resultadoAutenticar)}`); // transforma JSON em String

                    if (resultadoAutenticar.length == 1) {
                        console.log(resultadoAutenticar);


                        res.json({
                            id: resultadoAutenticar[0].id,
                            email: resultadoAutenticar[0].email,
                            nome: resultadoAutenticar[0].nome,
                            senha: resultadoAutenticar[0].senha
                        });


                    } else if (resultadoAutenticar.length == 0) {
                        res.status(403).send("Email e/ou senha inválido(s)");
                    } else {
                        res.status(403).send("Mais de um usuário com o mesmo login e senha!");
                    }
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log("\nHouve um erro ao realizar o login! Erro: ", erro.sqlMessage);
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }

}

// function autenticar(req, res) {
//     var email = req.body.emailServer;
//     var senha = req.body.senhaServer;

//     if (email == undefined) {
//         res.status(400).send("Seu email está undefined!");
//     } else if (senha == undefined) {
//         res.status(400).send("Sua senha está indefinida!");
//     } else {

//         usuarioModel.autenticar(email, senha)
//             .then(
//                 function (resultadoAutenticar) {
//                     console.log(`\nResultados encontrados: ${resultadoAutenticar.length}`);
//                     console.log(`Resultados: ${JSON.stringify(resultadoAutenticar)}`); // transforma JSON em String

//                     if (resultadoAutenticar.length == 1) {
//                         console.log(resultadoAutenticar);

//                         aquarioModel.buscarAquariosPorEmpresa(resultadoAutenticar[0].empresaId)
//                             .then((resultadoAquarios) => {
//                                 if (resultadoAquarios.length > 0) {
//                                     res.json({
//                                         id: resultadoAutenticar[0].id,
//                                         email: resultadoAutenticar[0].email,
//                                         nome: resultadoAutenticar[0].nome,
//                                         senha: resultadoAutenticar[0].senha
//                                     });
//                                 } else {
//                                     res.status(204).json({ aquarios: [] });
//                                 }
//                             })
//                     } else if (resultadoAutenticar.length == 0) {
//                         res.status(403).send("Email e/ou senha inválido(s)");
//                     } else {
//                         res.status(403).send("Mais de um usuário com o mesmo login e senha!");
//                     }
//                 }
//             ).catch(
//                 function (erro) {
//                     console.log(erro);
//                     console.log("\nHouve um erro ao realizar o login! Erro: ", erro.sqlMessage);
//                     res.status(500).json(erro.sqlMessage);
//                 }
//             );
//     }

// }

function cadastrar(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var nome = req.body.nomeServer;
    var email = req.body.emailServer;
    var genero = req.body.generoServer;
    var dataNascimento = req.body.dataNascimentoServer;
    var senha = req.body.senhaServer;

    // Faça as validações dos valores
    if (nome == undefined) {
        res.status(400).send("Seu nome está undefined!");
    } else if (email == undefined) {
        res.status(400).send("Seu email está undefined!");
    } else if (senha == undefined) {
        res.status(400).send("Sua senha está undefined!");
    } else if (genero == undefined) {
        res.status(400).send("Seu gênero está undefined!");
    } else if (dataNascimento == undefined) {
        res.status(400).send("Sua data de nascimento está undefined!");
    }

    else {

        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        usuarioModel.cadastrar(nome, email, genero, dataNascimento, senha)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
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


function cadastrarDois(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var nomeFazenda = req.body.fazendaServer;
    var fazendaFavorita = req.body.fazendaFavoritaServer;
    var animal = req.body.animalServer;
    var personagem = req.body.personagemServer;
    var coisaFavorita = req.body.coisaFavoritaServer;
    var perfeicao = req.body.perfeicaoServer;
    var verdadeira = req.body.verdadeiraServer;
    var fkUsuario = req.body.fkUsuario;

    // Faça as validações dos valores
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
    }

    else {

        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        usuarioModel.cadastrarDois(fkUsuario, nomeFazenda, fazenda, animal, personagem, coisaFavorita, perfeicao, verdadeira)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
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

module.exports = {
    autenticar,
    cadastrar,
    cadastrarDois
}