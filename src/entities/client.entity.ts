import {
  Entity,
  Column,
  PrimaryColumn,
  CreateDateColumn,
  OneToMany,
  UpdateDateColumn,
} from "typeorm";

import { v4 as uuid } from "uuid";
import { Contact } from "./contact.entity";

@Entity()
export class Client {
  @PrimaryColumn("uuid")
  readonly id: string;

  @Column({ length: 128 })
  name: string;

  @Column({ unique: true }) /*se der bo é aqui*/ email: string;

  @Column()
  tel: number;

  @Column()
  password: string;

  @CreateDateColumn()
  dateCreated: Date;

  @UpdateDateColumn()
  update_at: Date;

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
