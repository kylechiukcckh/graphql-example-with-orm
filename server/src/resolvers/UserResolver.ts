import { Resolver, Query, Arg, Mutation } from "type-graphql";
import { IsNull } from "typeorm";
import User from "../entities";
import { CreateUserRequest } from "../request";
import { GetUserResponse } from "../responses";

@Resolver(User)
export class UserResolver {
  @Query(() => GetUserResponse)
  async getUsers(
    @Arg("page", { defaultValue: "1", nullable: true }) page: number,
    @Arg("pageSize", { defaultValue: "10", nullable: true }) pageSize: number
  ): Promise<GetUserResponse> {
    if (page === null) {
      page = 1;
    }

    if (pageSize === null) {
      pageSize = 10;
    }

    const [users, total] = await User.findAndCount({
      where: { deletedAt: IsNull() },
      skip: (page - 1) * pageSize,
      take: pageSize,
    });

    const totalPages = Math.floor(total / pageSize);

    return {
      users,
      totalPages: total % pageSize > 0 ? totalPages + 1 : totalPages,
    };
  }

  @Mutation(() => User)
  async createUser(@Arg("userInfo") userInfo: CreateUserRequest) {
    const result = await User.create(userInfo)?.save();
    return result;
  }

  @Mutation(() => Boolean)
  async deleteUser(@Arg("id", { nullable: false }) id: string) {
    if (!id) {
      return;
    }

    const { affected } = await User.delete({ id });

    return affected;
  }
}
