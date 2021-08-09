const customExpress = require('./config/customExpress')
const conexao = require('./infra/conexao')
const Tabelas = require('./infra/tabelas')
conexao.connect(error => {
    if(error) {
        console.error(error);
    } else {
        Tabelas.init(conexao) 
        console.log('Conexão com o banco feita com sucesso!')
        const app = customExpress()
        app.listen(8080, () => console.log("servidor rodando na porta 8080") )
    }
})