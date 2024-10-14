import { Schema as MongooseSchema } from 'mongoose';

export interface IBase {
  readonly _id: MongooseSchema.Types.ObjectId;
  readonly createdAt: Date;
  readonly updatedAt: Date;
}
