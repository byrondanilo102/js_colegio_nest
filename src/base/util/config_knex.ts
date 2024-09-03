const ConfigKnex = {
  client: 'mysql2',  

  connection: {
      host: 'localhost',
      port: 3306,
      user:  'root',      
      password: 'root',
      database: '2015_colegio_relaciones',
      dateStrings: true         
    }
  };

//dateStrings: true
//timezone: 'UTC',
//timezone: 'UTC'

export {ConfigKnex};