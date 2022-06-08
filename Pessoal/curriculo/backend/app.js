import express from 'express';
import { openDb } from './configdb.js';
import { pegandoDados, inserirDados, atualizarDados, deletarDados } from './controller/mike.js';
import { criarTabela } from './controller/mike.js';
import cors from 'cors';

const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());

openDb();
criarTabela();

//pegando os dados do servidor
app.get('/', pegandoDados);
app.post('/', inserirDados);
app.put('/', atualizarDados);
app.delete('/', deletarDados);

//criando servidor
app.listen(port, () =>  
{
    console.log(`Servidor rodando no port ${port}`);
});