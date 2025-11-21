var database = require("../database/config")

function cadastrar(titulo, mensagem, fkUsuario) {
    var instrucaoSql = `
        INSERT INTO comunidade(fk_usuario, titulo, mensagem) VALUES
            (${fkUsuario}, '${titulo}', '${mensagem}');
    `;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function listar() {
    var instrucaoSql =`
        SELECT nome, comunidade.id, titulo, mensagem, 
	        DATE_FORMAT(dt_publicacao, '%d/%m/%Y') AS dataPublicacao
	    FROM comunidade JOIN usuario
            ON fk_usuario = usuario.id
        ORDER BY id DESC;
    `;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    cadastrar,
    listar
};