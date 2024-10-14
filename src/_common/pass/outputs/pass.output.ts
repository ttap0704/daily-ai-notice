import { Field, ObjectType } from '@nestjs/graphql';
import { IsBoolean, IsString } from 'class-validator';
import { plainToInstance } from 'class-transformer';

@ObjectType('PassOutput')
export class PassOutput {
  @Field(() => Boolean)
  @IsBoolean()
  pass: boolean = true;

  @Field(() => String)
  @IsString()
  errorCode: string = '';

  static from(input: Partial<PassOutput>) {
    return plainToInstance(PassOutput, input);
  }
}
