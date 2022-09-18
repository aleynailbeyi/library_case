import { DataSource } from "typeorm"
import { Book } from "./entity/Book"
import { User } from "./entity/User"

export const MyDataSource = new DataSource(
    {
        type: "postgres",
        host: "localhost",
        port: 5432,
        username: "postgres",
        password: "postgres",
        database: "postgres",
        logging: true,
        synchronize: true,
        entities: [User, Book],
     
    }
 )