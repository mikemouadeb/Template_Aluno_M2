import express from 'express';
import { openDb } from './configdb.js';
import { pegandoDados } from './controller/mike.js';
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


//criando servidor
app.listen(port, () =>  
{
    console.log(`Servidor rodando no port ${port}`);
});