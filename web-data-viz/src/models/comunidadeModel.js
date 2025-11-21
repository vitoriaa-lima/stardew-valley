var database = require("../database/config")

function cadastrar(titulo, mensagem, fkUsuario) {
    var instrucaoSql = `
        INSERT INTO comunidade(fk_usuario, titulo, mensagem) VALUES
            (${fkUsuario}, '${titulo}', '${mensagem}');
    `;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    cadastrar
};