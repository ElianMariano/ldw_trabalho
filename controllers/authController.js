import jwt from 'jsonwebtoken';
import Aluno from '../models/Aluno.js';
import bcrypt from 'bcryptjs';
import { createError } from '../utils/error.js';

export const login = async (req, res, next) => {
    try{
        const aluno = await Aluno.findOne({email: req.body.email});
        if (!aluno) { return next(createError(401, "Aluno não encontrado.")) };

        const senhaValidada = await bcrypt.compare(req.body.senha, aluno.senha);
        if (!senhaValidada) {return next(createError(401, "Senha inválida."))}

        const {senha, ...dados} = aluno._doc;

        const accessToken = jwt.sign({id: aluno._id, admin: aluno.ativo}, process.env.JWT_SECRET, {expiresIn: '1h'});

        res.cookie("acessToken", accessToken, {httpOnly: true}).status(200).json(dados);

        res.status(200).json(dados);
    } catch (error){
        next(error);
    }
};