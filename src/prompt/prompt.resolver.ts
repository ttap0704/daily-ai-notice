import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Prompt } from '@/prompt/schemas/prompt.schema';
import { PromptService } from '@/prompt/prompt.service';
import { PassOutput } from '@/_common/pass/outputs/pass.output';
import { CreatePromptInput } from '@/prompt/inputs/create-prompt.input';

@Resolver(() => Prompt)
export class PromptResolver {
  constructor(private promptService: PromptService) {}

  @Query(() => [Prompt])
  async getAllPrompts(): Promise<Prompt[]> {
    return await this.promptService.getAllPrompts();
  }

  @Mutation(() => PassOutput)
  async createPrompt(
    @Args('prompt') prompt: CreatePromptInput,
  ): Promise<PassOutput> {
    return await this.promptService.createPrompt(prompt);
  }
}
