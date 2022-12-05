import { DataSource } from "typeorm";
import { Client } from "./entities/client.entity";
import { Contact } from "./entities/contact.entity";
require("dotenv").config();

export const AppDataSource = new DataSource({
  type: "postgres",

  host: "localhost",

  port: 5432,

  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PWD,
  database: process.env.POSTGRES_DB,

  synchronize: false,

  logging: true,

  entities: [Client, Contact],

  migrations: ["src/migrations/*.ts"],
});

AppDataSource.initialize()
  .then(() => {
    console.log("Data Source initialized");
  })
  .catch((err) => {
    console.error("Error during Data Source initialization", err);
  });
