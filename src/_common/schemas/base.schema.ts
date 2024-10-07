import { now } from 'mongoose';
import { Field } from '@nestjs/graphql';
import { Prop } from '@nestjs/mongoose';
import { Schema as MongooseSchema } from 'mongoose';

export class Base {
  @Field()
  @Prop()
  readonly _id: MongooseSchema.Types.ObjectId;

  @Field(() => Date)
  @Prop({ default: now })
  readonly createdAt: Date;

  @Field(() => Date)
  @Prop({ default: now })
  readonly updatedAt: Date;
}
