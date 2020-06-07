import express from 'express';
import knex from './database/connection';
import PointsController from './controllers/PointsController'
import ItemsController from './controllers/ItemsController'
import multer from 'multer';
import multerconfig from './config/multer';

const routes = express.Router();
const upload = multer(multerconfig);

const pointsController = new PointsController();
const itemsController = new ItemsController();
//retorna todos os usuários ou caso o paramêtro search for utilizado 
//trás os usuários filtrados
routes.get('/items', itemsController.index);

routes.get('/points', pointsController.index);
routes.get('/points/:id', pointsController.show);

//Cadastro de pontos de coleta
routes.post('/points',upload.single('image'), pointsController.create);

export default routes;