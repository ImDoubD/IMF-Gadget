import Gadget from '../model/gadgetModel';
import { generateCodename, generateConfirmationCode, generateRandomPercentage } from '../utils/randomUtils';

class GadgetService {
  async getAllGadgets(status?: string) {
    const whereClause = status ? { status } : {};
    const gadgets = await Gadget.findAll({ where: whereClause });

    return gadgets.map((gadget) => ({
      ...gadget.get(),
      missionSuccessProbability: `${generateRandomPercentage()}%`,
    }));
  }

  async createGadget() {
    const codename = generateCodename();
    return await Gadget.create({ name: codename });
  }

  async updateGadget(id: string, updates: Partial<Gadget>) {
    const gadget = await Gadget.findByPk(id);
    if (!gadget) throw new Error('Gadget not found');

    return await gadget.update(updates);
  }

  async deleteGadget(id: string) {
    const gadget = await Gadget.findByPk(id);
    if (!gadget) throw new Error('Gadget not found');

    return await gadget.update({ status: 'Decommissioned', decommissionedAt: new Date() });
  }

  async triggerSelfDestruct(id: string) {
    const gadget = await Gadget.findByPk(id);
    if (!gadget) throw new Error('Gadget not found');

    const confirmationCode = generateConfirmationCode();
    return { confirmationCode, message: `Self-destruct sequence initiated for ${gadget.name}` };
  }
}

export default new GadgetService();