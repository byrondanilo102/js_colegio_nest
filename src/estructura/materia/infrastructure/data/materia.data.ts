import {Injectable} from "@nestjs/common"

import {InjectRepository} from '@nestjs/typeorm';
import {Repository} from 'typeorm';

import {Constantes} from '../../../../base/util/constantes';
import {Pagination} from '../../../../base/application/logic/pagination';
import {Connexion} from '../../../../base/util/connexion_knex';
import {TipoAccionEnum} from '../../../../base/util/tipo_accion_enum';

import {Materia} from '../../domain/model/materia';

import {MateriaDataI} from './materia.datai';

/*import {MateriaReturnViewDto} from './dto/materia_return_view.dto';*/


@Injectable()
class MateriaData implements MateriaDataI {				
	
	static TITULO:string = "Materia";    
	static MODULO:string = "estructura";
	static TABLA:string = "materia";
	static PATH_PAGINA:string = "estructura/materia_view";
	static PATH_PAGINA_FORM:string = "estructura/materia_form_view";
	
	result: any;
    materia1?:Materia = null;
    materias:Materia[] = [];			
	
	private materia_data1: Repository<Materia>;
	
	//materia_return_view_dto:MateriaReturnViewDto;
	
	
	constructor(@InjectRepository(Materia) materia_data1: Repository<Materia>) {
		
		this.materia_data1 = materia_data1;
        //this.connexion1=new Connexion(); 		
		this.materia1 = null;
    	this.materias = new Array<Materia>();
		
		//this.materia_return_view_dto = new MateriaReturnViewDto();
		
	}
	
	async getTodos(pagination1:Pagination,relations1:any): Promise<Materia[]> {  
        try	{			
            const params = {
				take: pagination1.limit,
				skip: pagination1.skip,
				relations: relations1
			};
			
			const [result,total] = await this.materia_data1.findAndCount(params);				
			
			this.materias = this.getEntitiesFromModels(result);
			
			return this.materias;
			
		} catch(ex:any) {
            throw ex;
        }
    }
	
	async getBuscar(builder_object_materia1:any,pagination1:Pagination,relations1:any): Promise<Materia[]> {  
        try	{			
			const params = {
				take: pagination1.limit,
				skip: pagination1.skip,
				relations: relations1
			};
			
            this.result = await this.materia_data1.find(params);
			
			this.materias = this.getEntitiesFromModels(this.result);
			
			return this.materias;
			
		} catch(ex:any) {
            throw ex;
        }
    }
	
	async getBuscarGeneral(builder_object_materia1:any,pagination1:Pagination,relations1:any): Promise<Materia[]> {  
        try	{			
			const params = {
				take: pagination1.limit,
				skip: pagination1.skip,
				relations: relations1
			};
			
            this.result = await this.materia_data1.find(params);
			
			this.materias = this.getEntitiesFromModels(this.result);	
			
			return this.materias;
			
		} catch(ex:any) {
            throw ex;
        }
    }
	
	async getBuscarUno(builder_object_materia1:any,relations1:any): Promise<Materia> {  
        try	{
			const params = {
				where: builder_object_materia1,
				
				relations: relations1
			};
			
            this.result = await this.materia_data1.find(params);
			
			this.materia1 = this.getEntityFromModel(this.result);
			
			return this.materia1;
			
		} catch(ex:any) {
            throw ex;
        }
    }
	
    async nuevo(materia1:Materia): Promise<any> {
        try	{			   
			
			let materiaModel2 = this.getModelFromEntity(materia1);
			
			this.result = await this.materia_data1.save(materiaModel2);
			
			return this.result;
			
		} catch(ex:any) {
            throw ex;
        }
    }
	
	async actualizar(materia1:Materia): Promise<any> {  
        try	{			     
			let materiaModel2 = this.getModelFromEntity(materia1);
			
			this.result = await this.materia_data1.update(materia1.id,materiaModel2);
			
			return this.result;
			
		} catch(ex:any) {
            throw ex;
        }
    }
	
	async eliminar(id:number): Promise<any> {  
        try	{			          
			this.result = await this.materia_data1.delete(id);
			
			return this.result;
			
		} catch(ex:any) {
            throw ex;
        }
    }	
	
	async nuevos(materias:Array<Materia>) {
        try	{		
			let materiaModels2 = this.getModelsFromEntities(materias);
			
			this.result = await this.materia_data1.save(materiaModels2);
		
		} catch(ex:any) {
            throw ex;
        }
    }
	
	async eliminars(ids:Array<number>) {  
        try	{			          
			
			if(ids.length > 0) {
				this.result = await this.materia_data1.delete(ids);
			}
			
		} catch(ex:any) {
            throw ex;
        }
    }
	
	async actualizars(updates_materias:Array<Materia>,updates_columnas:Array<string>) {  
        try	{			           
			
			let updates_materiaModels2 = this.getModelsFromEntities(updates_materias);
			
			for(let materiaModel2 of updates_materiaModels2) {
				this.result = await this.materia_data1.update(materiaModel2.id,materiaModel2);
			}
			
		} catch(ex:any) {
            throw ex;
        }
    }
	
	getEntitiesFromModels(result:any): Materia[] {		
		let materias = new Array<Materia>();
		let materia1 = new Materia();
		
		for(let row of result) {
			materia1 = new Materia();
			materia1 = {...row};			
			materias.push(materia1);
		}
		
		return materias;
	}
	
	getEntityFromModel(result:any): Materia {		
		let materia1 = new Materia();
		
		for(let row of result) {
			materia1 = {...row};				
			break;
		}
		
		return materia1;
	}
	
	getModelsFromEntities(materias: Materia[]): Materia[] {
		let materiaModels = new Array<Materia>();
		let materiaModel2 = new Materia();
		
		for(let materia2 of materias) {
			materiaModel2 = this.getModelFromEntity(materia2);
			
			materiaModels.push(materiaModel2);
		}
		
		return materiaModels;
	}
	
	getModelFromEntity(materia1: Materia) : Materia {
		
		let materiaModel2 = new Materia();
		
		materiaModel2.id = materia1.id;
		materiaModel2.created_at = materia1.created_at;
		materiaModel2.updated_at = materia1.updated_at;
		
		materiaModel2.codigo= materia1.codigo;
		materiaModel2.nombre= materia1.nombre;
		materiaModel2.activo= materia1.activo;
		
		return materiaModel2;
	}
	
	getBuilderFunctionObjectParametroSeleccionar(id:number):any {				
		let jmateria1:any = {};
							
		jmateria1 = {
			id : id
		};									
				
		return jmateria1;
	}
	
	getBuilderFunctionObjectParametroBuscar(req:any):any {				
		let jmateria1:any = {};
		
		jmateria1 = {
			created_at : req.body.created_at, 
			updated_at : req.body.updated_at, 
			codigo : req.body.codigo, 
			nombre : req.body.nombre, 
			activo : req.body.activo, 
		};								
				
		return jmateria1;
	}
	
}

export {MateriaData};
