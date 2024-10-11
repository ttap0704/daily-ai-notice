import { Field, ObjectType } from '@nestjs/graphql';
import { IsBoolean, IsString } from 'class-validator';

@ObjectType('PassOutputObject')
export class PassOutput {
  @Field(() => Boolean)
  @IsBoolean()
  pass: boolean;

  @Field(() => String)
  @IsString()
  errorCode: string;
}
