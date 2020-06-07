import knex from 'knex'
import path from 'path';

// Defini a conexão com o banco de dados
const connection = knex({
    client: 'sqlite3',
    connection: {
        filename: path.resolve(__dirname, 'database.sqlite'),
    },    
    useNullAsDefault:true,
});

// MySQl conection
// const connection = knex({
// client: 'mysql',
//   connection: {
//     host : 'localhost',
//     user : 'root',
//     password : 'Cupfos30',
//     database : 'ecoleta'
//   },
//   migrations: {
//     tableName: 'knex_migrations'
//   }
// });

export default connection;