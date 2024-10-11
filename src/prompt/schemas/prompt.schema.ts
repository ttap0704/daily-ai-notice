import { Field, InputType, ObjectType } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { Base } from '@/_common/base/schemas/base.schema';
import { IsString } from 'class-validator';
import { CreatePromptInput } from '@/prompt/inputs/create-prompt.input';
import { plainToInstance } from 'class-transformer';

export type PromptDocument = HydratedDocument<Prompt>;

@InputType('PromptInput', { isAbstract: true })
@ObjectType('PromptObject', { isAbstract: true })
@Schema({ collection: 'prompts', timestamps: true })
export class Prompt extends Base {
  @Field(() => String)
  @Prop({ default: '' })
  @IsString()
  title: string = '';

  @Field(() => String)
  @Prop({ default: '' })
  @IsString()
  description: string = '';

  static fromCreatePromptInput(input: CreatePromptInput) {
    return plainToInstance(Prompt, input);
  }
}

export const PromptSchema = SchemaFactory.createForClass(Prompt);
