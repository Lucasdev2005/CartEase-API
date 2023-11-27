import { DataSource, DataSourceOptions } from "typeorm";
import { TableUsers1701049744028 } from "./migrations/1701049744028-table_users";

export const dataSourceOptions: DataSourceOptions = {
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    database: 'db',
    username: 'cartease',
    password: 'cartease@123',
    entities: [ __dirname + '/../**/*.entity{.ts,.js}',],
    migrations: [TableUsers1701049744028],
    migrationsRun: true,
    synchronize: false,
}

const dataSource = new DataSource(dataSourceOptions);

export default dataSource;