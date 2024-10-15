import { Field, InputType, ObjectType } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Schema as MongooseSchema } from 'mongoose';
import { Base } from '@/_common/base/schemas/base.schema';
import { IsString } from 'class-validator';
import { CreateAnswerInput } from '@/answer/inputs/create-answer.input';
import { plainToInstance } from 'class-transformer';
import { IAnswer } from '@/answer/interfaces/answer.interface';

export type AnswerDocument = HydratedDocument<Answer>;

@InputType('AnswerInput', { isAbstract: true })
@ObjectType('AnswerOutput', { isAbstract: true })
@Schema({ collection: 'answers', timestamps: true })
export class Answer extends Base implements IAnswer {
  @Field(() => String)
  @IsString()
  readonly promptId: MongooseSchema.Types.ObjectId;

  @Field(() => String)
  @IsString()
  readonly message: string = '';

  static fromCreateAnswerInput(input: CreateAnswerInput) {
    return plainToInstance(Answer, input);
  }
}

export const AnswerSchema = SchemaFactory.createForClass(Answer);
