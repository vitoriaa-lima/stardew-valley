var database = require("../database/config")

function autenticar(email, senha) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ", email, senha)
    var instrucaoSql = `
        SELECT id, email, nome, senha FROM usuario WHERE email = '${email}' AND senha = '${senha}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

// Coloque os mesmos parâmetros aqui. Vá para a var instrucaoSql
function cadastrar(nome, email, genero, dt_nascimento, senha) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", nome, email, genero, dt_nascimento, senha);
    
    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucaoSql = `
        INSERT INTO usuario(nome, email, genero, dt_nascimento, senha) VALUES ('${nome}', '${email}', '${genero}', '${dt_nascimento}', '${senha}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarDados(id) {
    var instrucaoSql = `
        SELECT u.id, 
            fu.coisa_favorita AS coisaFavorita,
            fu.nome_fazenda AS nomeFazenda,
            f.caminho_img AS imgFazenda,
            f.descricao,
            f.dica,
            pet.nome AS nomePet,
            pet.caminho_img AS imgPet,
            p.nome AS nomePersonagem,
            p.caminho_img AS imgPersonagem,
            p.aniversario,
            p.presente_favorito AS presenteFavorito,
            p.casavel,
            p.genero
        FROM usuario AS u 
            JOIN fazenda_usuario AS fu 
                ON fu.fk_usuario = u.id
            JOIN personagem AS p
                ON p.id = fu.fk_personagem_favorito
            JOIN pet
                ON pet.id = fu.fk_pet_favorito
            JOIN fazenda AS f
                ON f.id = fk_fazenda_favorita
        WHERE u.id = ${id};
    `;

    console.log("Executando a introdução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    autenticar,
    cadastrar,
    buscarDados
};