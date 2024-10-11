import { Field, InputType, ObjectType, OmitType } from '@nestjs/graphql';
import { Schema as MongooseSchema } from 'mongoose';

@InputType('BaseInput', { isAbstract: true })
@ObjectType('BaseObject', { isAbstract: true })
export class Base {
  @Field()
  readonly _id: MongooseSchema.Types.ObjectId;

  @Field(() => Date)
  readonly createdAt: Date;

  @Field(() => Date)
  readonly updatedAt: Date;
}

export function OmitTypeBase() {
  return OmitType(Base, ['_id', 'createdAt', 'updatedAt'] as const);
}
