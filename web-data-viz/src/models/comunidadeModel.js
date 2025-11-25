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
    var instrucaoSql = `
        SELECT nome,
            usuario.id AS idAutor, 
            comunidade.id AS idPublicacao, 
            titulo, 
            mensagem, 
	        DATE_FORMAT(dt_publicacao, '%d/%m/%Y') AS dataPublicacao
	    FROM comunidade JOIN usuario
            ON fk_usuario = usuario.id
        ORDER BY comunidade.id DESC;
    `;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function deletar(idComentario) {
    var instrucaoSql = `
        DELETE FROM comunidade WHERE id = ${idComentario};
    `;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function curtir(idComentario, idUsuario, idAutor) {
    var instrucaoSql = `
        INSERT INTO curtida VALUES (${idUsuario}, ${idComentario}, ${idAutor}, 1);
    `;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function listarCurtidos(idUsuario) {
    var instrucaoSql = `
        SELECT fk_publicacao AS idPublicacao, 
            fk_usuario AS idUsuario
	        FROM curtida
	        WHERE fk_usuario = ${idUsuario};
    `;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    cadastrar,
    listar,
    deletar,
    curtir,
    listarCurtidos
};