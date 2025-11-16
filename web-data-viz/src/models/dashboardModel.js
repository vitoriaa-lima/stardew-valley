var database = require("../database/config");

function idadeMedia(){
    var instrucaoSql = `
        SELECT TRUNCATE(AVG(TIMESTAMPDIFF(YEAR, dt_nascimento, NOW())), 0) AS idadeMedia 
        FROM usuario;

    `;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function alcancaramPerfeicao(){
    var instrucaoSql = `
        SELECT COUNT(u.id) AS totalUsuarios,
	        SUM(verdadeira_perfeicao) AS alcancaramVerdadeiraPerfeicao
        FROM usuario AS u JOIN fazenda_usuario AS fu
		    ON u.id = fu.fk_usuario;
    `;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function personagemFav(){
    var instrucaoSql = `
        SELECT p.nome AS nomePersonagem,
	        COUNT(fk_personagem_favorito) AS frequencia
        FROM fazenda_usuario AS fu
	        JOIN personagem AS p
		        ON p.id = fu.fk_personagem_favorito
	        GROUP BY nomePersonagem
	        LIMIT 1;
    `;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    idadeMedia,
    alcancaramPerfeicao,
    personagemFav
};