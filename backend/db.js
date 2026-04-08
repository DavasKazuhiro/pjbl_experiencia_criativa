import mysql from "mysql2";

export const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Coxinh@1973",
    database: "pjbl"
});
