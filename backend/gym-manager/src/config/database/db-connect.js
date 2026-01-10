import mysql2 from 'mysql2/promise';

export async function mysqlConnection() {

    // const connection = await mysql2.createConnection({
    //     host: 'localhost',
    //     port: 3306,
    //     user: 'root',
    //     password: 'my20',
    //     database: 'gym_manager_db'
    // });
}

export const mysqlPoolConnect = mysql2.createPool({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'my20',
    database: 'gym_manager_db'
});

