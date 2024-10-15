import { Field, InputType, ObjectType } from '@nestjs/graphql';
import { Schema as MongooseSchema } from 'mongoose';
import { IBase } from '@/_common/base/interfaces/base.interface';
import { IsDate, IsString } from 'class-validator';

@InputType('BaseInput', { isAbstract: true })
@ObjectType('BaseOutput', { isAbstract: true })
export class Base implements IBase {
  @Field(() => String)
  @IsString()
  readonly _id: MongooseSchema.Types.ObjectId;

  @Field(() => Date)
  @IsDate()
  readonly createdAt: Date;

  @Field(() => Date)
  @IsDate()
  readonly updatedAt: Date;
}
