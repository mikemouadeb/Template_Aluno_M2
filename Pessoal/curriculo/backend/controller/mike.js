import { openDb } from '../configdb.js';

//criando a tabela no banco de dados
export async function criarTabela() {
    openDb().then(db => {
        db.exec('CREATE TABLE IF NOT EXISTS mike (nome TEXT, idade INTEGER, contato INTEGER, email TEXT, endereco TEXT)');
    });
};

// pegando todos os dados da tabela
export async function pegandoDados(req, res) {
    openDb().then(db => {
        db.all('SELECT * FROM mike').then(dados => res.json(dados));
    });
}
 