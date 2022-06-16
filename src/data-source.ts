import "reflect-metadata"
import { DataSource } from "typeorm"
import { User } from "./entity/User"

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "root",
    database: "graphql-server-boileplate",
    synchronize: true,
    logging: false,
    entities: [User],
    migrations: [],
    subscribers: [],    
})

// const db1DataSource = new DataSource({
//     type: "postgres",
//     host: "localhost",
//     port: 5432,
//     username: "postgres",
//     password: "root",
//     database: "graphql-server-boileplate",
//     synchronize: true,
//     logging: false,
//     entities: [User],
//     migrations: [],
//     subscribers: [],
//     name: "db1",
// })

// const testDataSource = new DataSource({
//     type: "postgres",
//     host: "localhost",
//     port: 5432,
//     username: "postgres",
//     password: "root",
//     database: "graphql-server-boileplate-test",
//     synchronize: true,
//     logging: false,
//     dropSchema: true,
//     entities: [User],
//     migrations: [],
//     subscribers: [],
//     name: "test",
// })

