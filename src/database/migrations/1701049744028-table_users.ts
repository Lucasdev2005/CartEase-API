import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class TableUsers1701049744028 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        const table = new Table({
            name: 'users',
            columns: [
                {
                    name: 'USR_UserId',
                    type: 'int', // Tipo de dados para o ID (de acordo com a entidade)
                    isGenerated: true,
                    generationStrategy: 'increment',
                    isPrimary: true,
                },
                {
                    name: 'USR_Username',
                    type: 'varchar', // Tipo de dados para a string
                    isNullable: false,
                },
                {
                    name: 'USR_UserAdress',
                    type: 'varchar', // Tipo de dados para a string
                    isNullable: false,
                },
                {
                    name: 'USR_UserPassword',
                    type: 'varchar', // Tipo de dados para a string
                    isNullable: false,
                },
            ],
        });

        await queryRunner.createTable(table);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('users');
    }

}
