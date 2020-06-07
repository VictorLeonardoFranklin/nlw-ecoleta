import path from 'path'

module.exports = {
    // client: 'mysql',
    // connection: {
    //     host : 'localhost',
    //     user : 'root',
    //     password : 'Cupfos30',
    //     database : 'ecoleta'
    //   },
    client: 'sqlite3',
    connection: {
        filename: path.resolve(__dirname, 'src','database','database.sqlite'),
    },
    migrations:{
        directory: path.resolve(__dirname,'src','database','migrations')
    },
    seeds:{
        directory: path.resolve(__dirname,'src','database','seeds')
    },    
    useNullAsDefault:true,

}