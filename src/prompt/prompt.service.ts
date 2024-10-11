import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Prompt, PromptDocument } from '@/prompt/schemas/prompt.schema';
import { PassOutput } from '@/_common/pass/outputs/pass.output';
import { CreatePromptInput } from '@/prompt/inputs/create-prompt.input';

@Injectable()
export class PromptService {
  constructor(
    @InjectModel(Prompt.name)
    private promptDocumentModel: Model<PromptDocument>,
  ) {}

  async getAllPrompts(): Promise<Prompt[]> {
    return this.promptDocumentModel.find();
  }

  async createPrompt(input: CreatePromptInput): Promise<PassOutput> {
    return new PassOutput();
  }
}
