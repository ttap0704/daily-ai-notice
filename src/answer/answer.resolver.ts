import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Answer } from '@/answer/schemas/answer.schema';
import { AnswerService } from '@/answer/answer.service';
import { PassOutput } from '@/_common/pass/outputs/pass.output';
import { CreateAnswerInput } from '@/answer/inputs/create-answer.input';

@Resolver(() => Answer)
export class AnswerResolver {
  constructor(private answerService: AnswerService) {}
}
