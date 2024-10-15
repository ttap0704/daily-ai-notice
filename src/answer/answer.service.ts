import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Answer, AnswerDocument } from '@/answer/schemas/answer.schema';
import { PassOutput } from '@/_common/pass/outputs/pass.output';
import { CreateAnswerInput } from '@/answer/inputs/create-answer.input';

@Injectable()
export class AnswerService {
  constructor(
    @InjectModel(Answer.name)
    private answerDocumentModel: Model<AnswerDocument>,
  ) {}
}
