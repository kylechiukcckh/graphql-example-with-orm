import { MaxLength, Length } from "class-validator";
import { Field, InputType } from "type-graphql";

@InputType()
export class CreateUserRequest {
  @Field()
  @Length(1, 255)
  name!: string;

  @Field()
  @Length(1, 3)
  age!: number;

  @Field()
  @MaxLength(1)
  gender!: string;

  @Field()
  //TODO: Custom validator for email format
  email!: string;

  @Field()
  @MaxLength(3)
  cityOfBirth!: string;
}
