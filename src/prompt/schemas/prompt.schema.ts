import { InputType, ObjectType } from '@nestjs/graphql';
import { Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { Base } from '@/_common/schemas/base.schema';

export type PromptDocument = HydratedDocument<Prompt>;

@InputType('PromptInput', { isAbstract: true })
@ObjectType('PromptObject', { isAbstract: true })
@Schema({ collection: 'prompts', timestamps: true })
export class Prompt extends Base {}

export const PromptSchema = SchemaFactory.createForClass(Prompt);
