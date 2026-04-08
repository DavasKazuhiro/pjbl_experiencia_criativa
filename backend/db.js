import mysql from "mysql2";

export const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "alterar senha aqui",
    database: "pjbl_davi_natume"
});
