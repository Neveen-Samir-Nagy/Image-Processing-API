import express from 'express';
import route from './routes/parent_route';

const app: express.Application = express();
const port: number = 3000;

app.listen(port, async () => {
    console.log('Listening to port:', port);
});

app.use('/', route);

export default app;
