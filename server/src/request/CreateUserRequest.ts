import {
  MaxLength,
  Length,
  IsEmail,
  IsPositive,
  IsInt,
  Max,
} from "class-validator";
import { Field, InputType } from "type-graphql";

@InputType()
export class CreateUserRequest {
  @Field()
  @Length(1, 255)
  name!: string;

  @Field()
  @IsPositive()
  @IsInt()
  @Max(200)
  age!: number;

  @Field()
  @MaxLength(1)
  gender!: string;

  @Field()
  @IsEmail()
  email!: string;

  @Field()
  @MaxLength(3)
  cityOfBirth!: string;
}
