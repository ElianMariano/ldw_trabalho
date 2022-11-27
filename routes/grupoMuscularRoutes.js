import express from 'express';
import verificarToken from '../middleware/verificarToken.js';
import {createGrupoMuscular, updateGrupoMuscular, deleteGrupoMuscular, getGrupoMuscular, getGrupoMusculars} from '../controllers/grupoMuscularControllers.js';

const router = express.Router();

router.post('/', verificarToken, createGrupoMuscular);
router.put('/:id', verificarToken, updateGrupoMuscular);
router.delete('/:id', verificarToken, deleteGrupoMuscular);
router.get('/:id', verificarToken, getGrupoMuscular);
router.get('/', verificarToken, getGrupoMusculars);

export default router;