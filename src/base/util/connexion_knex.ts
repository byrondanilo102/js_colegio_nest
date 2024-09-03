import {ConfigKnex} from './config_knex';
import {Pagination} from '../application/logic/pagination';
//import mysql2 from 'mysql2';
import knex from 'knex';


class Connexion {
    titulo="";
    connection?:any;
    //db?:mongodb.Db | any=null;

    constructor(){
        this.titulo="Connexion";                              
    }

    static async GetNewConnexion() {
        let connexion1= new Connexion();
		let connection=null;
		//let db:mongodb.Db | any=null;

		try	{            

            connection = await knex(ConfigKnex);
            
            connexion1.connection=connection;
            //connexion1.db=db;

        } catch(ex) {
            throw ex;
        }
    
        return connexion1;		
    }

    async executeQuery(sql:string) {

        try	{
            let results_general = await this.connection?.schema.raw(sql);
            
            let results = results_general[0];

            return results;

        } catch(ex) {
            throw ex;
        }
    }

    async executeSelect(table:string,pagination1:Pagination) {
        //values = ['codigo','LIKE','ACT%'];
        //offset(pagination1.skip).toSQL().toNative()

        try	{
            let results_general = await this.connection.select('*').from(table)
                                                        .limit(pagination1.limit)
                                                        .offset(pagination1.skip);

            return results_general;

        } catch(ex) {
            throw ex;
        }
    }

    async executeInsert(table:string,values:any[]) {
        //values = {codigo: 'ACT6',nombre: 'Actuador 6'}

        try	{
            let results = await this.connection(table)
                                    .insert(values);

            return results;

        } catch(ex) {
            throw ex;
        }
    }

    async executeUpdate(table:string,values_where:any,values:any[]) {
        //values_where = {id: 10 }
        //values = { codigo: "ACT66", nombre: "Actuador 66" }

        try	{
            let results = await this.connection(table).where(values_where)
                                                      .update(values);

            return results;

        } catch(ex) {
            throw ex;
        }
    }

    async executeDelete(table:string,values:any[]) {
        //values = { id: '10' }

        try	{
            let results = await this.connection(table).where(values)
                                                      .del();

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

    async executeSelectFunction(table:string,builder_function1:any,pagination1:Pagination) {
        /*
        let builder_function = (builder:any) => {
            builder.where(...values)
        };
        */
        //offset(pagination1.skip).toSQL().toNative()

        try	{                        

            let results_general = await this.connection.select('*')
                                                        .from(table)
                                                        .where(builder_function1)
                                                        .limit(pagination1.limit)
                                                        .offset(pagination1.skip);
            
            /*                                                        
            let sql_log = await this.connection.select('*').from(table)
                                                        .where(builder_function1)
                                                        .limit(pagination1.limit)
                                                        .offset(pagination1.skip).toSQL().toNative();
            */

            return results_general;

        } catch(ex) {
            throw ex;
        }
    }    

    async executeSelectObject(table:string,jobject1:any,pagination1:Pagination) {
        /*
        {
            first_name: 'Test',
            last_name:  'User'
        }
        */
        //offset(pagination1.skip).toSQL().toNative()

        try	{
            
            
            let results_general = await this.connection.select('*').from(table)
                                                        .where(jobject1)
                                                        .limit(pagination1.limit)
                                                        .offset(pagination1.skip);
            
            /*                                                        
            let sql_log = await this.connection.select('*').from(table)
                                                        .where(object1)
                                                        .limit(pagination1.limit)
                                                        .offset(pagination1.skip).toSQL().toNative();
            */
           
            return results_general;

        } catch(ex) {
            throw ex;
        }
    }
    
    async executeSelectKeyValue(table:string,key_value1:any[],pagination1:Pagination) {
        //values = ['codigo','LIKE','ACT%'];
        //offset(pagination1.skip).toSQL().toNative()

        try	{

            
            let results_general = await this.connection.select('*').from(table)
                                                        .where(...key_value1)
                                                        .limit(pagination1.limit)
                                                        .offset(pagination1.skip);

            /*
            let sql_log = await this.connection.select('*').from(table)
                                                        .where(...values)
                                                        .limit(pagination1.limit)
                                                        .offset(pagination1.skip).toSQL().toNative();
            */
            

            return results_general;

        } catch(ex) {
            throw ex;
        }
    }

    //curl -X POST -H 'Content-Type: application/json' -d '{}' 'http://localhost:3000/metricas_auto/general/actuador_api/todos'
}

export {Connexion};