import express from 'express';
import route from './route';

const routes: express.Router = express.Router();

routes.use('/api', route.route);

export default routes;
