import express, { Request, Response, ErrorRequestHandler } from 'express';
import path from 'path';
import apiRoutes from './routes/api';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();

const server = express();

server.use(cors());

server.use(express.static(path.join(__dirname, '../public')));
server.use(express.urlencoded({ extended: true }));
server.use(express.json())

server.get('/ping', (req: Request, res: Response) => res.json({ pong: true }));

server.use(apiRoutes);

server.use((req: Request, res: Response) => {
    res.status(404);
    res.json({ error: 'Endpoint not found.' });
});

const errorHandler: ErrorRequestHandler = (err, req, res, next) => {
    res.status(400); // Bad Request
    console.log(err);
    res.json({ error: 'An error has occurred.' });
}
server.use(errorHandler);

server.listen(process.env.PORT);