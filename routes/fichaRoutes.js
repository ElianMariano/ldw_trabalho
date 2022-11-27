import express from 'express';
import verificarToken from '../middleware/verificarToken.js';
import {createFicha, updateFicha, deleteFicha, getFicha, getFichas} from '../controllers/fichaControllers.js';

const router = express.Router();

router.post('/', verificarToken, createFicha);
router.put('/:id', verificarToken, updateFicha);
router.delete('/:id', verificarToken, deleteFicha);
router.get('/:id', verificarToken, getFicha);
router.get('/', verificarToken, getFichas);

export default router;