import {
  Entity,
  Column,
  PrimaryColumn,
  CreateDateColumn,
  OneToMany,
} from "typeorm";

import { v4 as uuid } from "uuid";
import { Contact } from "./contact.entity";

@Entity()
export class Client {
  @PrimaryColumn("uuid")
  readonly id: string;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  tel: number;

  @Column()
  password: string;

  @CreateDateColumn()
  dateCreated: Date;

  @OneToMany(() => Contact, (contact) => contact.client, {
    eager: true,
  })
  contacts: Contact[];

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}
