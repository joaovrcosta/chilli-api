import {MigrationInterface, QueryRunner} from "typeorm";

export class PostRefactoring1653416947636 implements MigrationInterface {
    name = 'PostRefactoring1653416947636'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "products" DROP CONSTRAINT "fk_promotion"`);
        await queryRunner.query(`ALTER TABLE "promotions" ADD "type" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "promotions" DROP CONSTRAINT "PK_380cecbbe3ac11f0e5a7c452c34"`);
        await queryRunner.query(`ALTER TABLE "promotions" DROP COLUMN "id"`);
        await queryRunner.query(`ALTER TABLE "promotions" ADD "id" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "promotions" ADD CONSTRAINT "PK_380cecbbe3ac11f0e5a7c452c34" PRIMARY KEY ("id")`);
        await queryRunner.query(`ALTER TABLE "promotions" DROP COLUMN "compre"`);
        await queryRunner.query(`ALTER TABLE "promotions" ADD "compre" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "promotions" DROP COLUMN "pague"`);
        await queryRunner.query(`ALTER TABLE "promotions" ADD "pague" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "products" DROP CONSTRAINT "PK_0806c755e0aca124e67c0cf6d7d"`);
        await queryRunner.query(`ALTER TABLE "products" DROP COLUMN "id"`);
        await queryRunner.query(`ALTER TABLE "products" ADD "id" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "products" ADD CONSTRAINT "PK_0806c755e0aca124e67c0cf6d7d" PRIMARY KEY ("id")`);
        await queryRunner.query(`ALTER TABLE "products" DROP COLUMN "price"`);
        await queryRunner.query(`ALTER TABLE "products" ADD "price" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "products" DROP COLUMN "promotion_id"`);
        await queryRunner.query(`ALTER TABLE "products" ADD "promotion_id" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "products" ADD CONSTRAINT "FK_dbae3af02a33ff539da00d565a7" FOREIGN KEY ("promotion_id") REFERENCES "promotions"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "products" DROP CONSTRAINT "FK_dbae3af02a33ff539da00d565a7"`);
        await queryRunner.query(`ALTER TABLE "products" DROP COLUMN "promotion_id"`);
        await queryRunner.query(`ALTER TABLE "products" ADD "promotion_id" uuid`);
        await queryRunner.query(`ALTER TABLE "products" DROP COLUMN "price"`);
        await queryRunner.query(`ALTER TABLE "products" ADD "price" numeric NOT NULL`);
        await queryRunner.query(`ALTER TABLE "products" DROP CONSTRAINT "PK_0806c755e0aca124e67c0cf6d7d"`);
        await queryRunner.query(`ALTER TABLE "products" DROP COLUMN "id"`);
        await queryRunner.query(`ALTER TABLE "products" ADD "id" uuid NOT NULL`);
        await queryRunner.query(`ALTER TABLE "products" ADD CONSTRAINT "PK_0806c755e0aca124e67c0cf6d7d" PRIMARY KEY ("id")`);
        await queryRunner.query(`ALTER TABLE "promotions" DROP COLUMN "pague"`);
        await queryRunner.query(`ALTER TABLE "promotions" ADD "pague" numeric NOT NULL`);
        await queryRunner.query(`ALTER TABLE "promotions" DROP COLUMN "compre"`);
        await queryRunner.query(`ALTER TABLE "promotions" ADD "compre" numeric NOT NULL`);
        await queryRunner.query(`ALTER TABLE "promotions" DROP CONSTRAINT "PK_380cecbbe3ac11f0e5a7c452c34"`);
        await queryRunner.query(`ALTER TABLE "promotions" DROP COLUMN "id"`);
        await queryRunner.query(`ALTER TABLE "promotions" ADD "id" uuid NOT NULL`);
        await queryRunner.query(`ALTER TABLE "promotions" ADD CONSTRAINT "PK_380cecbbe3ac11f0e5a7c452c34" PRIMARY KEY ("id")`);
        await queryRunner.query(`ALTER TABLE "promotions" DROP COLUMN "type"`);
        await queryRunner.query(`ALTER TABLE "products" ADD CONSTRAINT "fk_promotion" FOREIGN KEY ("promotion_id") REFERENCES "promotions"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
