import { InputType, OmitType } from '@nestjs/graphql';
import { Prompt } from '@/prompt/schemas/prompt.schema';

@InputType('CreatePromptInput', { isAbstract: true })
export class CreatePromptInput extends OmitType(Prompt, [
  '_id',
  'createdAt',
  'updatedAt',
] as const) {}
