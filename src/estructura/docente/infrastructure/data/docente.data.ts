import {Injectable} from "@nestjs/common"

import {InjectRepository} from '@nestjs/typeorm';
import {Repository} from 'typeorm';

import {Constantes} from '../../../../base/util/constantes';
import {Pagination} from '../../../../base/application/logic/pagination';
import {Connexion} from '../../../../base/util/connexion_knex';
import {TipoAccionEnum} from '../../../../base/util/tipo_accion_enum';

import {Docente} from '../../domain/model/docente';

import {DocenteDataI} from './docente.datai';

/*import {DocenteReturnViewDto} from './dto/docente_return_view.dto';*/


@Injectable()
class DocenteData implements DocenteDataI {				
	
	static TITULO:string = "Docente";    
	static MODULO:string = "estructura";
	static TABLA:string = "docente";
	static PATH_PAGINA:string = "estructura/docente_view";
	static PATH_PAGINA_FORM:string = "estructura/docente_form_view";
	
	result: any;
    docente1?:Docente = null;
    docentes:Docente[] = [];			
	
	private docente_data1: Repository<Docente>;
	
	//docente_return_view_dto:DocenteReturnViewDto;
	
	
	constructor(@InjectRepository(Docente) docente_data1: Repository<Docente>) {
		
		this.docente_data1 = docente_data1;
        //this.connexion1=new Connexion(); 		
		this.docente1 = null;
    	this.docentes = new Array<Docente>();
		
		//this.docente_return_view_dto = new DocenteReturnViewDto();
		
	}
	
	async getTodos(pagination1:Pagination,relations1:any): Promise<Docente[]> {  
        try	{			
            const params = {
				take: pagination1.limit,
				skip: pagination1.skip,
				relations: relations1
			};
			
			const [result,total] = await this.docente_data1.findAndCount(params);				
			
			this.docentes = this.getEntitiesFromModels(result);
			
			return this.docentes;
			
		} catch(ex:any) {
            throw ex;
        }
    }
	
	async getBuscar(builder_object_docente1:any,pagination1:Pagination,relations1:any): Promise<Docente[]> {  
        try	{			
			const params = {
				take: pagination1.limit,
				skip: pagination1.skip,
				relations: relations1
			};
			
            this.result = await this.docente_data1.find(params);
			
			this.docentes = this.getEntitiesFromModels(this.result);
			
			return this.docentes;
			
		} catch(ex:any) {
            throw ex;
        }
    }
	
	async getBuscarGeneral(builder_object_docente1:any,pagination1:Pagination,relations1:any): Promise<Docente[]> {  
        try	{			
			const params = {
				take: pagination1.limit,
				skip: pagination1.skip,
				relations: relations1
			};
			
            this.result = await this.docente_data1.find(params);
			
			this.docentes = this.getEntitiesFromModels(this.result);	
			
			return this.docentes;
			
		} catch(ex:any) {
            throw ex;
        }
    }
	
	async getBuscarUno(builder_object_docente1:any,relations1:any): Promise<Docente> {  
        try	{
			const params = {
				where: builder_object_docente1,
				
				relations: relations1
			};
			
            this.result = await this.docente_data1.find(params);
			
			this.docente1 = this.getEntityFromModel(this.result);
			
			return this.docente1;
			
		} catch(ex:any) {
            throw ex;
        }
    }
	
    async nuevo(docente1:Docente): Promise<any> {
        try	{			   
			
			let docenteModel2 = this.getModelFromEntity(docente1);
			
			this.result = await this.docente_data1.save(docenteModel2);
			
			return this.result;
			
		} catch(ex:any) {
            throw ex;
        }
    }
	
	async actualizar(docente1:Docente): Promise<any> {  
        try	{			     
			let docenteModel2 = this.getModelFromEntity(docente1);
			
			this.result = await this.docente_data1.update(docente1.id,docenteModel2);
			
			return this.result;
			
		} catch(ex:any) {
            throw ex;
        }
    }
	
	async eliminar(id:number): Promise<any> {  
        try	{			          
			this.result = await this.docente_data1.delete(id);
			
			return this.result;
			
		} catch(ex:any) {
            throw ex;
        }
    }	
	
	async nuevos(docentes:Array<Docente>) {
        try	{		
			let docenteModels2 = this.getModelsFromEntities(docentes);
			
			this.result = await this.docente_data1.save(docenteModels2);
		
		} catch(ex:any) {
            throw ex;
        }
    }
	
	async eliminars(ids:Array<number>) {  
        try	{			          
			
			if(ids.length > 0) {
				this.result = await this.docente_data1.delete(ids);
			}
			
		} catch(ex:any) {
            throw ex;
        }
    }
	
	async actualizars(updates_docentes:Array<Docente>,updates_columnas:Array<string>) {  
        try	{			           
			
			let updates_docenteModels2 = this.getModelsFromEntities(updates_docentes);
			
			for(let docenteModel2 of updates_docenteModels2) {
				this.result = await this.docente_data1.update(docenteModel2.id,docenteModel2);
			}
			
		} catch(ex:any) {
            throw ex;
        }
    }
	
	getEntitiesFromModels(result:any): Docente[] {		
		let docentes = new Array<Docente>();
		let docente1 = new Docente();
		
		for(let row of result) {
			docente1 = new Docente();
			docente1 = {...row};			
			docentes.push(docente1);
		}
		
		return docentes;
	}
	
	getEntityFromModel(result:any): Docente {		
		let docente1 = new Docente();
		
		for(let row of result) {
			docente1 = {...row};				
			break;
		}
		
		return docente1;
	}
	
	getModelsFromEntities(docentes: Docente[]): Docente[] {
		let docenteModels = new Array<Docente>();
		let docenteModel2 = new Docente();
		
		for(let docente2 of docentes) {
			docenteModel2 = this.getModelFromEntity(docente2);
			
			docenteModels.push(docenteModel2);
		}
		
		return docenteModels;
	}
	
	getModelFromEntity(docente1: Docente) : Docente {
		
		let docenteModel2 = new Docente();
		
		docenteModel2.id = docente1.id;
		docenteModel2.created_at = docente1.created_at;
		docenteModel2.updated_at = docente1.updated_at;
		
		docenteModel2.nombre= docente1.nombre;
		docenteModel2.apellido= docente1.apellido;
		docenteModel2.fecha_nacimiento= docente1.fecha_nacimiento;
		docenteModel2.anios_experiencia= docente1.anios_experiencia;
		docenteModel2.nota_evaluacion= docente1.nota_evaluacion;
		
		return docenteModel2;
	}
	
	getBuilderFunctionObjectParametroSeleccionar(id:number):any {				
		let jdocente1:any = {};
							
		jdocente1 = {
			id : id
		};									
				
		return jdocente1;
	}
	
	getBuilderFunctionObjectParametroBuscar(req:any):any {				
		let jdocente1:any = {};
		
		jdocente1 = {
			created_at : req.body.created_at, 
			updated_at : req.body.updated_at, 
			nombre : req.body.nombre, 
			apellido : req.body.apellido, 
			fecha_nacimiento : req.body.fecha_nacimiento, 
			anios_experiencia : req.body.anios_experiencia, 
			nota_evaluacion : req.body.nota_evaluacion, 
		};								
				
		return jdocente1;
	}
	
}

export {DocenteData};
