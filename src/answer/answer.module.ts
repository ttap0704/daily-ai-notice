import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Answer, AnswerSchema } from '@/answer/schemas/answer.schema';
import { AnswerService } from '@/answer/answer.service';
import { AnswerResolver } from '@/answer/answer.resolver';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Answer.name, schema: AnswerSchema }]),
  ],
  providers: [AnswerResolver, AnswerService],
  exports: [],
})
export class AnswerModule {}
