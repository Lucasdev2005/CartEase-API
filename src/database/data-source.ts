import { DataSource, DataSourceOptions } from "typeorm";
import { TableUsers1701049744028 } from "./migrations/1701049744028-table_users";
import { Products1701353105246 } from "./migrations/1701353105246-products";
import { Product } from "./entities/Product";
import { User } from "./entities/User";

export const dataSourceOptions: DataSourceOptions = {
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    database: 'db',
    username: 'cartease',
    password: 'cartease@123',
    entities: [
        Product,
        User
    ],
    migrations: [
        TableUsers1701049744028,
        Products1701353105246
    ],
    migrationsRun: true,
    synchronize: false,
}

const dataSource = new DataSource(dataSourceOptions);

export default dataSource;