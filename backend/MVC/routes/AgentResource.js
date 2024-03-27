import { Router } from 'express';

import AgentController from '../controllers/AgentController.js';

const router = Router();

router.get('/', AgentController.getAgents);
router.get('/:id', AgentController.getAgentById);
router.post('/', AgentController.addAgent);
router.patch('/:id', AgentController.updateAgent);
router.delete('/:id', AgentController.deleteAgent);

export default router;