import jwt from 'jsonwebtoken';
import {createError} from '../utils/error.js';

export const verificarToken = (req, res, next) => {
    try {
        const accessToken = req.cookie.accessToken;

        if (!accessToken) {return next(createError(401, "Você não está autenticado."))};
        const decoded = jwt.verify(accessToken, process.env.JWT_SECRET);

        req.aluno = decoded;
        next();
    } catch (error) {
        next(error);
    }
};