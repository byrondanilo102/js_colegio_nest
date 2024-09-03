import mysql from 'mysql2/promise';
import {Pagination } from '../application/logic/pagination';
import {Config} from './config';

class Connexion {
    titulo:string="";
    connection?:mysql.Connection;
    //db?:mongodb.Db | any=null;

    constructor(){
        this.titulo="Connexion";                              
    }

    static async GetNewConnexion() {
        let connexion1= new Connexion();
		let connection=null;
		//let db:mongodb.Db | any=null;

		try	{

            console.log(mysql);

            connection = await mysql.createConnection(Config.db);
                       
            console.log(mysql);
            console.log(connection);
            
            connexion1.connection=connection;
            //connexion1.db=db;

        } catch(ex) {
            throw ex;
        }
    
        return connexion1;	

        /*
        let connexion1= new connexion();
		let connection=null;
		let db:mongodb.Db | any=null;

		try	{

            connection = await mongoClient.connect('mongodb://'+config.db_host+':'+config.db_port+'/'+config.db_database)
            
            db = await connection.db(config.db_database)

            connexion1.connection=connection;
            connexion1.db=db;

        } catch(ex) {
            throw "new Exception";
        }
    
        return connexion1;	
        */	
    }

    async executeQuery(sql:string) {

        try	{
            let results_general = await this.connection?.execute(sql);
            
            const [results, ] = [...results_general!];

            return results;

        } catch(ex) {
            throw ex;
        }
    }

    async execute(sql:string,values: any[]) {

        try	{
            let results_general = await this.connection?.execute(sql,values);
            
            const [results, ] = [...results_general!];

            return results;

        } catch(ex) {
            throw ex;
        }
    }

    static GetQueryPagination(pagination1:Pagination) {
        let query_pagination="";
        
        query_pagination = " LIMIT " + pagination1.limit + " OFFSET " + pagination1.skip;

        return query_pagination;
    }

    //curl -X POST -H 'Content-Type: application/json' -d '{}' 'http://localhost:3000/metricas_auto/general/actuador_api/todos'
}

export {Connexion};