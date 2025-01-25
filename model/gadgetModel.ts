import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../database';

class Gadget extends Model {
  public id!: string;
  public name!: string;
  public status!: 'Available' | 'Deployed' | 'Destroyed' | 'Decommissioned';
  public decommissionedAt?: Date;
}

Gadget.init({
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  status: {
    type: DataTypes.ENUM('Available', 'Deployed', 'Destroyed', 'Decommissioned'),
    defaultValue: 'Available',
    allowNull: false,
  },
  decommissionedAt: {
    type: DataTypes.DATE,
    allowNull: true,
  },
}, {
  sequelize,
  modelName: 'Gadget',
});

export default Gadget;