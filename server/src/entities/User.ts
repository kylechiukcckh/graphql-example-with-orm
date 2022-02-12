import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
} from "typeorm";
import { Field, ObjectType, ID } from "type-graphql";

@Entity()
@ObjectType()
class User extends BaseEntity {
  @Field(() => ID)
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @Field()
  @Column()
  name!: string;

  @Field()
  @Column({ type: "int2" })
  age!: number;

  @Field()
  @Column({ length: 1, type: "character" })
  gender!: string;

  @Field()
  @Column()
  email!: string;

  @Field()
  @Column({ length: 6, name: "COB", type: "nvarchar" })
  cityOfBirth!: string;

  @CreateDateColumn()
  createdAt!: Date;

  @UpdateDateColumn()
  updatedAt!: Date;

  @DeleteDateColumn()
  deletedAt!: Date;
}
export default User;
