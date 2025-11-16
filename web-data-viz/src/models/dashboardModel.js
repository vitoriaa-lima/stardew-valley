var database = require("../database/config");

function idadeMedia(){
    var instrucaoSql = `
        SELECT TRUNCATE(AVG(TIMESTAMPDIFF(YEAR, dt_nascimento, NOW())), 0) AS idadeMedia 
        FROM usuario;

    `;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    idadeMedia
};