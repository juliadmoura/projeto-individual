var database = require("../database/config")

function autenticar(email, senha) {

    var instrucao = `
        SELECT idusuario, nome, email FROM usuario WHERE email = '${email}' AND senha = '${senha}';
    `;
    console.log("Executando a instrução SQL autenticar: \n" + instrucao);
    return database.executar(instrucao);
}
function pegarid(id) {

    var instrucao = `
        SELECT iddecada from decada where ano= ${id};
    `;
    console.log("Executando a instrução SQL pegarid: \n" + instrucao);
    return database.executar(instrucao);
}
// Coloque os mesmos parâmetros aqui. Vá para a var instrucao
function cadastrar(nome, email, senha, decada) {

    
    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucao = `
        INSERT INTO usuario (nome, email, senha, fk_decada) VALUES ('${nome}', '${email}', '${senha}', '${decada}');
    `;
    console.log("Executando a instrução SQL cadastrar: \n" + instrucao);
    return database.executar(instrucao);
}

module.exports = {
    autenticar,
    cadastrar,
    pegarid
};