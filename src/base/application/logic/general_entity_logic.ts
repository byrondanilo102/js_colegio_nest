//import {connexion} from '../../util/connexion';
import {Connexion} from '../../util/connexion_knex';

class GeneralEntityLogic {
	
	connexion1?:Connexion ;//?:      | any = null
    query:string="";
    query_pagination:string="";

    constructor() {
        this.connexion1=new Connexion(); 
        this.query="";
        this.query_pagination="";
    }
}

export {GeneralEntityLogic};