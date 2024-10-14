import { Field, InputType, ObjectType } from '@nestjs/graphql';
import { Schema as MongooseSchema } from 'mongoose';
import { IBase } from '@/_common/base/interfaces/base.interface';

@InputType('BaseInput', { isAbstract: true })
@ObjectType('BaseOutput', { isAbstract: true })
export class Base implements IBase {
  @Field(() => String)
  readonly _id: MongooseSchema.Types.ObjectId;

  @Field(() => Date)
  readonly createdAt: Date;

  @Field(() => Date)
  readonly updatedAt: Date;
}
