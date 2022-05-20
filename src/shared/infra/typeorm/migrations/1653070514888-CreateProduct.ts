import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateProducts1653070514888 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "products",
        columns: [
          {
            name: "id",
            type: "uuid",
            isPrimary: true,
          },
          {
            name: "name",
            type: "varchar",
          },
          {
            name: "value",
            type: "numeric",
          },
          {
            name: "promotion_id",
            type: "uuid",
            isNullable: true,
          },
          {
            name: "created_at",
            type: "timestamp",
            default: "now()",
          },
        ],
        foreignKeys: [
            {
                name: "fk_promotion",
                columnNames: ["promotion_id"],
                referencedTableName: "promotions",
                referencedColumnNames: ["id"]
            }
        ]
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("products");
  }
}
