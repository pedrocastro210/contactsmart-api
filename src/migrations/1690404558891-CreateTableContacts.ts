import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateTableContacts1690404558891 implements MigrationInterface {
    name = 'CreateTableContacts1690404558891'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "contacts" DROP COLUMN "password"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "contacts" ADD "password" character varying NOT NULL`);
    }

}
