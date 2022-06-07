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

// inserir dados na tabela
export async function inserirDados(req, res) {
    
}

//atualizar dados na tabela
export async function atualizarDados(req, res) {
    
}

//deletar dados na tabela
export async function deletarDados(req, res) {
    
}

export async function autalizarDados(req, res) {
    let pessoa = req.body;
    openDb().then(db => {
        db.run('UPDATE mike SET nome=?, WHERE idade=?', [pessoa.nome, pessoa.idade]);
    });
};

export async function deletarDados(req, res) {
    let id = req.body.nome;
    openDb().then(db => {
        db.get('DELETE FROM mike')
            .then(res=>res)
    });
};
 