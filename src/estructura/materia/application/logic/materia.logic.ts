import {Injectable} from "@nestjs/common"

import {InjectRepository} from '@nestjs/typeorm';
import {Repository} from 'typeorm';

import {Constantes} from '../../../../base/util/constantes';
import {GeneralEntityLogic} from '../../../../base/application/logic/general_entity_logic';
import {Pagination} from '../../../../base/application/logic/pagination';
import {Connexion} from '../../../../base/util/connexion_knex';
import {TipoAccionEnum} from '../../../../base/util/tipo_accion_enum';

import {Materia} from '../../domain/model/materia';

import {MateriaData} from '../../infrastructure/data/materia.data';
import {MateriaDataI} from '../../infrastructure/data/materia.datai';

import {MateriaLogicI} from './materia.logici';

//import {MateriaReturnViewDto} from './dto/materia_return_view.dto';


@Injectable()
class MateriaLogic extends GeneralEntityLogic implements MateriaLogicI {
	
	result: any;
	total: any;
    materia1?:Materia = null;
    materias:Materia[] = [];			
	
	/*private materia_datai1: MateriaDataI;*/
	
	
	constructor(private materia_datai1: MateriaData) {
		super();
		this.materia_datai1 = materia_datai1;
        
		this.materia1 = null;
    	this.materias = new Array<Materia>();
		
	}
	
	async getTodos(pagination1:Pagination,relations1:any): Promise<Materia[]> {
        try	{			           			
			this.materias = await this.materia_datai1.getTodos(pagination1,relations1);			
			return this.materias;
			
		} catch(ex:any) {
            throw ex;
        }
    }
	
	async getBuscar(builder_object_materia1:any,pagination1:Pagination,relations1:any): Promise<Materia[]> {
        try	{									
            this.materias = await this.materia_datai1.getBuscar(builder_object_materia1,pagination1,relations1);			
			return this.materias;	
			
		} catch(ex:any) {
            throw ex;
        }
    }
	
	async getBuscarGeneral(builder_object_materia1:any,pagination1:Pagination,relations1:any): Promise<Materia[]> {
        try	{						
			
            this.materias = await this.materia_datai1.getBuscarGeneral(builder_object_materia1,pagination1,relations1);			
			return this.materias;	
			
		} catch(ex:any) {
            throw ex;
        }
    }
	
	async getBuscarUno(builder_object_materia1:any,relations1:any): Promise<Materia> {
        try	{			
            this.materia1 = await this.materia_datai1.getBuscarUno(builder_object_materia1,relations1);			
			return this.materia1;
			
		} catch(ex:any) {
            throw ex;
        }
    }
	
    async nuevo(materia1:Materia): Promise<any> {
        try	{			           
			this.result = await this.materia_datai1.nuevo(materia1);
			return this.result;
			
		} catch(ex:any) {
            throw ex;
        }
    }
	
	async actualizar(materia1:Materia): Promise<any> {
        try	{			           
			this.result = await this.materia_datai1.actualizar(materia1);
			return this.result;
			
		} catch(ex:any) {
            throw ex;
        }
    }
	
	async eliminar(id:number): Promise<any> {  
        try	{			          
			this.result = await this.materia_datai1.eliminar(id);
			return this.result;
			
		} catch(ex:any) {
            throw ex;
        }
    }	
	
	async nuevos(materias:Array<Materia>) {
        try	{			           
			this.result = await this.materia_datai1.nuevos(materias);
		
		} catch(ex:any) {
            throw ex;
        }
    }
	
	async eliminars(ids:Array<number>) {  
        try	{			          
			
			if(ids.length > 0) {
				this.result = await this.materia_datai1.eliminars(ids);
			}
			
		} catch(ex:any) {
            throw ex;
        }
    }
	
	async actualizars(updates_materias:Array<Materia>,updates_columnas:Array<string>) {  
        try	{			           						
			this.result = await this.materia_datai1.actualizars(updates_materias,updates_columnas);			
			
		} catch(ex:any) {
            throw ex;
        }
    }	
	
	getBuilderFunctionObjectParametroSeleccionar(id:number):any {				
		let jmateria1:any = this.materia_datai1.getBuilderFunctionObjectParametroSeleccionar(id);
		return jmateria1;		
	}
	
	getBuilderFunctionObjectParametroBuscar(req:any):any {				
		let jmateria1:any = this.materia_datai1.getBuilderFunctionObjectParametroBuscar(req);
		return jmateria1;
	}
	
}

export {MateriaLogic};
