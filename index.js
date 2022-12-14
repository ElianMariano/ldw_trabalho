import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import connectDatabase from "./models/db.js";
import alunoRoutes from './routes/alunoRoutes.js';
import fichaRoutes from './routes/fichaRoutes.js';
import grupoMuscularRoutes from './routes/grupoMuscularRoutes.js';
import instrutor from './routes/instrutorRoutes.js';
import tipoExercicioRoutes from './routes/tipoExercicioRoutes.js';
import routeAuth from './routes/authRoutes';

const app = express();
dotenv.config();

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/api/auth', routeAuth);
app.use('/api/alunos', alunoRoutes);
app.use('/api/instrutores', instrutor);
app.use('/api/gruposmusculares', grupoMuscularRoutes);
app.use('/api/tiposexercicios', tipoExercicioRoutes);
app.use('/api/ficha', fichaRoutes);

app.listen(8080, () => {
    connectDatabase();
    console.log(`Servidor rodando na porta: ${process.env.PORT}`)
});