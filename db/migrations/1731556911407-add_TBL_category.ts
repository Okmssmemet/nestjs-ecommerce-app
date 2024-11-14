import { MigrationInterface, QueryRunner } from "typeorm";

export class AddTBLCategory1731556911407 implements MigrationInterface {
    name = 'AddTBLCategory1731556911407'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE SEQUENCE IF NOT EXISTS "categories_id_seq" OWNED BY "categories"."id"`);
        await queryRunner.query(`ALTER TABLE "categories" ALTER COLUMN "id" SET DEFAULT nextval('"categories_id_seq"')`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "categories" ALTER COLUMN "id" DROP DEFAULT`);
        await queryRunner.query(`DROP SEQUENCE "categories_id_seq"`);
    }

}
