import { DataSource, DataSourceOptions } from "typeorm";

export const dataSourceOptions: DataSourceOptions = {
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    database: 'db',
    username: 'cartease',
    password: 'cartease@123',
    entities: [ __dirname + '/../**/*.entity{.ts,.js}',],
    migrations: [ __dirname + '/../**/*.migrations{.ts,.js}',],
    migrationsRun: true,
    synchronize: false,
}

const dataSource = new DataSource(dataSourceOptions);

export default dataSource;