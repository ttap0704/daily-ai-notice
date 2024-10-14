import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Prompt, PromptSchema } from '@/prompt/schemas/prompt.schema';
import { PromptService } from '@/prompt/prompt.service';
import { PromptResolver } from '@/prompt/prompt.resolver';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Prompt.name, schema: PromptSchema }]),
  ],
  providers: [PromptResolver, PromptService],
  exports: [],
})
export class PromptModule {}
