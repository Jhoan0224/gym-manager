import {mysqlConnection} from '../../database/db-connect.js'


export async function AddUserService(formUser) {
    try {
        const sql = 'INSERT INTO `membresia`(`nombre`, `precio`) VALUES(?, ?)';
        const values = [formUser.nombre, formUser.precio];
        console.log( "VALUES ===== ",values)

        const connection = await mysqlConnection();

        const [result, fields] = await connection.execute(sql, values);

        console.log('result :>> ', result);
        console.log('fields :>> ', fields);
        connection.end();
        
    } catch (error) {
        console.log('error', error);
    }
}

export async function UpdateUserService(formUser) {
    
}