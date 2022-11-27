import express from 'express';
import verificarToken from '../middleware/verificarToken.js';
import {createInstrutor, updateInstrutor, deleteInstrutor, getInstrutor, getInstrutors} from '../controllers/instrutorController.js';

const router = express.Router();

router.post('/', verificarToken, createInstrutor);
router.put('/:id', verificarToken, updateInstrutor);
router.delete('/:id', verificarToken, deleteInstrutor);
router.get('/:id', verificarToken, getInstrutor);
router.get('/', verificarToken, getInstrutors);

export default router;