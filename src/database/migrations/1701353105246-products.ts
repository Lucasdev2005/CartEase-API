import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class Products1701353105246 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        const table = new Table({
            name: "products",
            columns: [
                {
                    name: "PRD_ProductId",
                    type: 'int',
                    isGenerated: true,
                    generationStrategy: 'increment',
                    isPrimary: true,
                },
                {
                    name: "PRD_ProductStock",
                    type: 'int',
                    default: 1,
                    isNullable: false,
                },
                {
                    name: "PRD_ProductName",
                    type: 'varchar',
                    length: '30',
                    isNullable: false,
                },
                {
                    name: "PRD_SellerId",
                    type: 'int',
                    isNullable: false,
                }
            ],
            foreignKeys: [
                {
                    name: "user_products",
                    referencedTableName: "users",
                    referencedColumnNames: ["USR_UserId"],
                    columnNames: ["PRD_SellerId"],
                    onDelete: "CASCADE",
                    onUpdate: "CASCADE"
                }
            ]
        });
        queryRunner.createTable(table);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        queryRunner.dropTable('products');
    }

}
