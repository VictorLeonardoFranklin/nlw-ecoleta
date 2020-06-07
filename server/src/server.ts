import express from 'express';
import cors from 'cors';
import path from 'path';
import routes from './routes';

const app = express();

//configura as permissões de urls de acesso a API
app.use(cors());
//utilizado para receber informações do body da aplicação comocls parametro
app.use(express.json());
app.use(routes);

// Definindo a rota para acesso as imagens definidas da aplicação
// função express.static() utilizada para resolver o path dos arquivos static da aplicação
app.use('/uploads', express.static(path.resolve(__dirname,'..','uploads')));
//definindo a porta onde vai rodar o server
app.listen(3333);