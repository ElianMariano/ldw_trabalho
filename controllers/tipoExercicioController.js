import TipoExercicio from '../models/TipoExercicio.js';

export const createTipoExercicio = async (req, res, next) => {
    const tipoExercicio = new TipoExercicio(req.body);

    try{
        const createdTipoExercicio = await tipoExercicio.save();
        res.status(201).json(createdTipoExercicio);
    }
    catch (error){
        next(error);
    }
}

export const updateTipoExercicio = async (req, res, next) => {
    try {
        const updateTipoExercicio = await TipoExercicio.findByIdAndUpdate(req.params.id, { $set: req.body }, {new: true});

        res.status(200).json(updateTipoExercicio);
    }
    catch (error){
        next(error);
    }
}

export const deleteTipoExercicio = async (req, res, next) => {
    try {
        await TipoExercicio.findByIdAndDelete(req.params.id);

        res.status(200).json({message: "Tipo Exercicio excluído com sucesso."});
    }
    catch (error){
        next(error);
    }
}

export const getTipoExercicio = async (req, res, next) => {
    try {
        const tipoExercicio = await TipoExercicio.findById(req.params.id);

        res.status(200).json(tipoExercicio);
    }
    catch (error){
        next(error);
    }
}

export const getTipoExercicios = async (req, res, next) => {
    try {
        const tipoExercicio = await TipoExercicio.find();

        res.status(200).json(tipoExercicio);
    }
    catch (error){
        next(error);
    }
}