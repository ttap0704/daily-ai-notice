import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Prompt, PromptDocument } from '@/prompt/schemas/prompt.schema';

@Injectable()
export class PromptService {
  constructor(
    @InjectModel(Prompt.name)
    private promptDocumentModel: Model<PromptDocument>,
  ) {}

  async getAllPrompts(): Promise<Prompt[]> {
    return this.promptDocumentModel.find();
  }
}
