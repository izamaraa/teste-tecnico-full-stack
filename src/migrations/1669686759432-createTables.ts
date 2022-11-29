import { MigrationInterface, QueryRunner } from "typeorm";

export class createTables1669686759432 implements MigrationInterface {
    name = 'createTables1669686759432'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "client" ("id" uuid NOT NULL, "name" character varying NOT NULL, "email" character varying NOT NULL, "tel" integer NOT NULL, "password" character varying NOT NULL, "dateCreated" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_96da49381769303a6515a8785c7" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "client"`);
    }

}
