import { Field, InputType, ObjectType } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { Base } from '@/_common/base/schemas/base.schema';
import { IsString } from 'class-validator';
import { CreatePromptInput } from '@/prompt/inputs/create-prompt.input';
import { plainToInstance } from 'class-transformer';
import { IPrompt } from '@/prompt/interfaces/prompt.interface';

export type PromptDocument = HydratedDocument<Prompt>;

@InputType('PromptInput', { isAbstract: true })
@ObjectType('PromptOutput', { isAbstract: true })
@Schema({ collection: 'prompts', timestamps: true })
export class Prompt extends Base implements IPrompt {
  @Field(() => String)
  @Prop({ default: '' })
  @IsString()
  readonly title: string = '';

  @Field(() => String)
  @Prop({ default: '' })
  @IsString()
  readonly description: string = '';

  static fromCreatePromptInput(input: CreatePromptInput) {
    return plainToInstance(Prompt, input);
  }
}

export const PromptSchema = SchemaFactory.createForClass(Prompt);
