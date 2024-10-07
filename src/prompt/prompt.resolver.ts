import { Query, Resolver } from '@nestjs/graphql';
import { Prompt } from '@/prompt/schemas/prompt.schema';
import { PromptService } from '@/prompt/prompt.service';

@Resolver(() => Prompt)
export class MoveOptionResolver {
  constructor(private promptService: PromptService) {}

  @Query(() => [Prompt])
  async getAllPrompts() {
    return await this.promptService.getAllPrompts();
  }
}
