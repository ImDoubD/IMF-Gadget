import { Request, Response } from 'express';
import gadgetService from '../service/gadgetService';

class GadgetController {
  async createGadget(req: Request, res: Response) {
    try {
      const gadget = await gadgetService.createGadget();
      res.status(201).json(gadget);
    } catch (error) {
      res.status(500).json({ error: (error as Error).message });
    }
  }

  async updateGadget(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const updates = req.body;
      const gadget = await gadgetService.updateGadget(id, updates);
      res.json(gadget);
    } catch (error) {
      res.status(500).json({ error: (error as Error).message });
    }
  }

  async deleteGadget(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const gadget = await gadgetService.deleteGadget(id);
      res.json(gadget);
    } catch (error) {
      res.status(500).json({ error: (error as Error).message });
    }
  }

  async triggerSelfDestruct(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const response = await gadgetService.triggerSelfDestruct(id);
      res.json(response);
    } catch (error) {
      res.status(500).json({ error: (error as Error).message });
    }
  }

  async getAllGadgets(req: Request, res: Response) {
    try {
      const { status } = req.query;
      const gadgets = await gadgetService.getAllGadgets(status as string);
      res.json(gadgets);
    } catch (error) {
      res.status(500).json({ error: (error as Error).message });
    }
  }
}

export default new GadgetController();