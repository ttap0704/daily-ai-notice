import { IBase } from '@/_common/base/interfaces/base.interface';
import { Schema as MongooseSchema } from 'mongoose';

export interface IAnswer extends IBase {
  readonly promptId: MongooseSchema.Types.ObjectId;
  readonly message: string;
}
