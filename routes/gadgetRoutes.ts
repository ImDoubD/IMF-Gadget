import { Router } from 'express';
import gadgetController from '../controller/gadgetController';
import authMiddleware from '../authMiddleware';

const router = Router();

router.get('/gadgets', authMiddleware, gadgetController.getAllGadgets);
router.post('/gadgets', authMiddleware, gadgetController.createGadget);
router.patch('/gadgets/:id', authMiddleware, gadgetController.updateGadget);
router.delete('/gadgets/:id', authMiddleware, gadgetController.deleteGadget);
router.post('/gadgets/:id/self-destruct', authMiddleware, gadgetController.triggerSelfDestruct);

export default router;