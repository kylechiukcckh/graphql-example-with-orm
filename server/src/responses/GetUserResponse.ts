import { Field, ObjectType } from "type-graphql";
import User from "../entities";

@ObjectType()
export class GetUserResponse {
  @Field(() => [User])
  users!: User[];

  @Field()
  totalPages: number = 0;
}
