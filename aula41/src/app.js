import express from 'express';
import mongoose from 'mongoose';
import cookieParser from 'cookie-parser';

import usersRouter from './routes/users.router.js';
import petsRouter from './routes/pets.router.js';
import adoptionsRouter from './routes/adoption.router.js';
import sessionsRouter from './routes/sessions.router.js';
import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUiExpress from 'swagger-ui-express';
import __dirname from './utils/index.js';

const app = express();
const PORT = process.env.PORT||8081;
const connection = mongoose.connect(`mongodb+srv://marianamohr:c9zKW4F8Vadmdn5d@cluster0.zm7bida.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`)
const swaggerOptions = {
    definition:{
        openapi: "3.0.0",
        info:{
            title:"API da AdoptMe",
            description:"API for my application"
        },
        
    },
    apis:[`${__dirname}/docs/**/*.yaml`]
}

const specs = swaggerJSDoc(swaggerOptions);

app.use(express.json());
app.use(cookieParser());

app.use('/api/users',usersRouter);
app.use('/api/pets',petsRouter);
app.use('/api/adoptions',adoptionsRouter);
app.use('/api/sessions',sessionsRouter);
app.use('/apidocs', swaggerUiExpress.serve, swaggerUiExpress.setup(specs))

app.listen(PORT,()=>console.log(`Listening on ${PORT}`))
