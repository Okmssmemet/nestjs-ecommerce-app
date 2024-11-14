import { MigrationInterface, QueryRunner } from "typeorm";

export class AddTBLAll21731615520257 implements MigrationInterface {
    name = 'AddTBLAll21731615520257'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "orders" ADD "status" "public"."orders_status_enum" NOT NULL DEFAULT 'processing'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "orders" DROP COLUMN "status"`);
    }

}
