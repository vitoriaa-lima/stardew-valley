var database = require("../database/config");

function cadastrar(fkUsuario, nomeFazenda, fazendaFavorita, animal, personagem, coisaFavorita, perfeicao, verdadeira){
    var instrucao = `
        INSERT INTO fazenda_usuario(fk_usuario, nome_fazenda, fk_fazenda_favorita, fk_pet_favorito, fk_personagem_favorito, coisa_favorita, perfeicao, verdadeira_perfeicao) VALUES (${fkUsuario}, '${nomeFazenda}', ${fazendaFavorita}, ${animal},  ${personagem} ,'${coisaFavorita}', ${perfeicao}, ${verdadeira});
        `;

    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

module.exports = {
    cadastrar
}