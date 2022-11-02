import express from 'express';
import {createGrupoMuscular, updateGrupoMuscular, deleteGrupoMuscular, getGrupoMuscular, getGrupoMusculars} from '../models/GrupoMuscular.js';

const router = express.Router();

router.post('/', createGrupoMuscular);
router.put('/:id', updateGrupoMuscular);
router.delete('/:id', deleteGrupoMuscular);
router.get('/:id', getGrupoMuscular);
router.get('/', getGrupoMusculars);

export default router;