import { Entity, Column, PrimaryColumn, CreateDateColumn } from "typeorm";

import { v4 as uuid } from "uuid";

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

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}
