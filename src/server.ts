import Fastify from 'fastify';
import cors from '@fastify/cors';
import { routes } from './route';

const app = Fastify({ logger : true});

const start = async () => {

    await app.register(routes);
    await app.register(cors);

    try{
        await app.listen({ port: 3333})
    }catch(err) {
        process.exit(1)
    }
}

start();