import Instrutor from '../models/Instrutor.js';

export const createInstrutor = async (req, res, next) => {
    const instrutor = new Instrutor(req.body);

    try{
        const createdInstrutor = await instrutor.save();
        res.status(201).json(createdInstrutor);
    }
    catch (error){
        next(error);
    }
}

export const updateInstrutor = async (req, res, next) => {
    try {
        const updateInstrutor = await Instrutor.findByIdAndUpdate(req.params.id, { $set: req.body }, {new: true});

        res.status(200).json(updateInstrutor);
    }
    catch (error){
        next(error);
    }
}

export const deleteInstrutor = async (req, res, next) => {
    try {
        await Instrutor.findByIdAndDelete(req.params.id);

        res.status(200).json({message: "Instrutor excluído com sucesso."});
    }
    catch (error){
        next(error);
    }
}

export const getInstrutor = async (req, res, next) => {
    try {
        const instrutor = await Instrutor.findById(req.params.id);

        res.status(200).json(instrutor);
    }
    catch (error){
        next(error);
    }
}

export const getInstrutors = async (req, res, next) => {
    try {
        const instrutor = await Instrutor.find();

        res.status(200).json(instrutor);
    }
    catch (error){
        next(error);
    }
}