
import { createConnection } from "typeorm";
import { DB_CONNECTION_STRING } from "./config"
import app from "./app"
import { Routes } from "./routes";


createConnection().then(async connection => {
    app.use("/", Routes);
    app.listen(DB_CONNECTION_STRING);
    console.log(`Express server has started on port ${DB_CONNECTION_STRING}.`);
  }).catch(error => console.log(error));
