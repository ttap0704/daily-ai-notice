import { InputType, OmitType } from '@nestjs/graphql';
import { Answer } from '@/answer/schemas/answer.schema';

@InputType('CreateAnswerInput', { isAbstract: true })
export class CreateAnswerInput extends OmitType(Answer, [
  '_id',
  'createdAt',
  'updatedAt',
] as const) {}
