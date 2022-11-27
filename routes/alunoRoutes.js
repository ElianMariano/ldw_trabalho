import express from 'express';
import verificarToken from '../middleware/verificarToken.js';
import {createAluno, updateAluno, deleteAluno, getAluno, getAlunos} from '../controllers/alunoControllers.js';

const router = express.Router();

router.post('/', verificarToken, createAluno);
router.put('/:id', verificarToken,  updateAluno);
router.delete('/:id', verificarToken, deleteAluno);
router.get('/:id', verificarToken, getAluno);
router.get('/', verificarToken, getAlunos);

export default router;