//import bluebird from 'bluebird';

const Config = {
    db: { /* don't expose password or any sensitive info, done only for demo */
      host: 'localhost',     
      user:  'root',
      password: 'root',
      database: 'metricas_auto'     
    },
    listPerPage: 10,
  };

// port: 3306,

// Promise: bluebird

/*const config = {    
    db_host : "localhost",
    db_port : "3306",
    db_database : "facturacion",
    db_user : "root",
    db_pass : "root"
};
*/

//module.exports = config;

export {Config};