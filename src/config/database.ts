import mysql from "mysql2/promise";
import { Connection } from "mysql2/typings/mysql/lib/Connection";

const getConnection = async () => {
  const connection = await mysql.createConnection({
    port: 3306,
    host: "localhost",
    user: "root",
    password: "123456",
    database: "nodejspro",
  });
  return connection;
};

export default getConnection;
