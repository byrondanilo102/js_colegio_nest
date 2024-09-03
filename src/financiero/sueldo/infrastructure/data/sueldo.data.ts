import {Injectable,Inject} from "@nestjs/common"

import {InjectRepository} from '@nestjs/typeorm';
import {Repository} from 'typeorm';

import {Constantes} from '../../../../base/util/constantes';
import {Pagination} from '../../../../base/application/logic/pagination';
import {Connexion} from '../../../../base/util/connexion_knex';
import {TipoAccionEnum} from '../../../../base/util/tipo_accion_enum';

import {Sueldo} from '../../domain/model/sueldo';

import {SueldoDataI} from './sueldo.datai';

/*import {SueldoReturnViewDto} from './dto/sueldo_return_view.dto';*/

/*FKs*/
/*import {SueldoFKReturnViewDto} from './dto/sueldo_fk_return_view.dto';*/

import {Docente} from '../../../../estructura/docente/domain/model/docente';
import {DocenteLogic} from '../../../../estructura/docente/application/logic/docente.logic';

	

@Injectable()
class SueldoData implements SueldoDataI {				
	
	static TITULO:string = "Sueldo";    
	static MODULO:string = "financiero";
	static TABLA:string = "sueldo";
	static PATH_PAGINA:string = "financiero/sueldo_view";
	static PATH_PAGINA_FORM:string = "financiero/sueldo_form_view";
	
	result: any;
    sueldo1?:Sueldo = null;
    sueldos:Sueldo[] = [];			
	
	private sueldo_data1: Repository<Sueldo>;
	
	//sueldo_return_view_dto:SueldoReturnViewDto;
	
	/*FKs*/
	//sueldo_fk_return_view_dto:SueldoFKReturnViewDto;
	
	
	docentesFK:Docente[] = [];
	
	@Inject(DocenteLogic)
	private readonly docenteLogic:DocenteLogic;	
	
	
	constructor(@InjectRepository(Sueldo) sueldo_data1: Repository<Sueldo>) {
		
		this.sueldo_data1 = sueldo_data1;
        //this.connexion1=new Connexion(); 		
		this.sueldo1 = null;
    	this.sueldos = new Array<Sueldo>();
		
		//this.sueldo_return_view_dto = new SueldoReturnViewDto();
		
		/*FKs*/
		//this.sueldo_fk_return_view_dto = new SueldoFKReturnViewDto();
		
		
		this.docentesFK = new Array<Docente>();
		
	}
	
	async getTodos(pagination1:Pagination,relations1:any): Promise<Sueldo[]> {  
        try	{			
            const params = {
				take: pagination1.limit,
				skip: pagination1.skip,
				relations: relations1
			};
			
			const [result,total] = await this.sueldo_data1.findAndCount(params);				
			
			this.sueldos = this.getEntitiesFromModels(result);
			
			return this.sueldos;
			
		} catch(ex:any) {
            throw ex;
        }
    }
	
	async getBuscar(builder_object_sueldo1:any,pagination1:Pagination,relations1:any): Promise<Sueldo[]> {  
        try	{			
			const params = {
				take: pagination1.limit,
				skip: pagination1.skip,
				relations: relations1
			};
			
            this.result = await this.sueldo_data1.find(params);
			
			this.sueldos = this.getEntitiesFromModels(this.result);
			
			return this.sueldos;
			
		} catch(ex:any) {
            throw ex;
        }
    }
	
	async getBuscarGeneral(builder_object_sueldo1:any,pagination1:Pagination,relations1:any): Promise<Sueldo[]> {  
        try	{			
			const params = {
				take: pagination1.limit,
				skip: pagination1.skip,
				relations: relations1
			};
			
            this.result = await this.sueldo_data1.find(params);
			
			this.sueldos = this.getEntitiesFromModels(this.result);	
			
			return this.sueldos;
			
		} catch(ex:any) {
            throw ex;
        }
    }
	
	async getBuscarUno(builder_object_sueldo1:any,relations1:any): Promise<Sueldo> {  
        try	{
			const params = {
				where: builder_object_sueldo1,
				
				relations: relations1
			};
			
            this.result = await this.sueldo_data1.find(params);
			
			this.sueldo1 = this.getEntityFromModel(this.result);
			
			return this.sueldo1;
			
		} catch(ex:any) {
            throw ex;
        }
    }
	
    async nuevo(sueldo1:Sueldo): Promise<any> {
        try	{			   
			
			let sueldoModel2 = this.getModelFromEntity(sueldo1);
			
			this.result = await this.sueldo_data1.save(sueldoModel2);
			
			return this.result;
			
		} catch(ex:any) {
            throw ex;
        }
    }
	
	async actualizar(sueldo1:Sueldo): Promise<any> {  
        try	{			     
			let sueldoModel2 = this.getModelFromEntity(sueldo1);
			
			this.result = await this.sueldo_data1.update(sueldo1.id,sueldoModel2);
			
			return this.result;
			
		} catch(ex:any) {
            throw ex;
        }
    }
	
	async eliminar(id:number): Promise<any> {  
        try	{			          
			this.result = await this.sueldo_data1.delete(id);
			
			return this.result;
			
		} catch(ex:any) {
            throw ex;
        }
    }	
	
	async nuevos(sueldos:Array<Sueldo>) {
        try	{		
			let sueldoModels2 = this.getModelsFromEntities(sueldos);
			
			this.result = await this.sueldo_data1.save(sueldoModels2);
		
		} catch(ex:any) {
            throw ex;
        }
    }
	
	async eliminars(ids:Array<number>) {  
        try	{			          
			
			if(ids.length > 0) {
				this.result = await this.sueldo_data1.delete(ids);
			}
			
		} catch(ex:any) {
            throw ex;
        }
    }
	
	async actualizars(updates_sueldos:Array<Sueldo>,updates_columnas:Array<string>) {  
        try	{			           
			
			let updates_sueldoModels2 = this.getModelsFromEntities(updates_sueldos);
			
			for(let sueldoModel2 of updates_sueldoModels2) {
				this.result = await this.sueldo_data1.update(sueldoModel2.id,sueldoModel2);
			}
			
		} catch(ex:any) {
            throw ex;
        }
    }
	
	getEntitiesFromModels(result:any): Sueldo[] {		
		let sueldos = new Array<Sueldo>();
		let sueldo1 = new Sueldo();
		
		for(let row of result) {
			sueldo1 = new Sueldo();
			sueldo1 = {...row};			
			sueldos.push(sueldo1);
		}
		
		return sueldos;
	}
	
	getEntityFromModel(result:any): Sueldo {		
		let sueldo1 = new Sueldo();
		
		for(let row of result) {
			sueldo1 = {...row};				
			break;
		}
		
		return sueldo1;
	}
	
	getModelsFromEntities(sueldos: Sueldo[]): Sueldo[] {
		let sueldoModels = new Array<Sueldo>();
		let sueldoModel2 = new Sueldo();
		
		for(let sueldo2 of sueldos) {
			sueldoModel2 = this.getModelFromEntity(sueldo2);
			
			sueldoModels.push(sueldoModel2);
		}
		
		return sueldoModels;
	}
	
	getModelFromEntity(sueldo1: Sueldo) : Sueldo {
		
		let sueldoModel2 = new Sueldo();
		
		sueldoModel2.id = sueldo1.id;
		sueldoModel2.created_at = sueldo1.created_at;
		sueldoModel2.updated_at = sueldo1.updated_at;
		
		sueldoModel2.id_docente= sueldo1.id_docente;
		sueldoModel2.anio= sueldo1.anio;
		sueldoModel2.mes= sueldo1.mes;
		sueldoModel2.valor= sueldo1.valor;
		sueldoModel2.cobrado= sueldo1.cobrado;
		
		return sueldoModel2;
	}
	
	getBuilderFunctionObjectParametroSeleccionar(id:number):any {				
		let jsueldo1:any = {};
							
		jsueldo1 = {
			id : id
		};									
				
		return jsueldo1;
	}
	
	getBuilderFunctionObjectParametroBuscar(req:any):any {				
		let jsueldo1:any = {};
		
		jsueldo1 = {
			created_at : req.body.created_at, 
			updated_at : req.body.updated_at, 
			id_docente : req.body.id_docente, 
			anio : req.body.anio, 
			mes : req.body.mes, 
			valor : req.body.valor, 
			cobrado : req.body.cobrado, 
		};								
				
		return jsueldo1;
	}
	
	/*FKs*/
	async getFks() {
		try {
			let pagination1 = new Pagination();
			pagination1.limit = Constantes.LIMIT_FK_MAX;
			pagination1.skip = 0;
			
			await this.docenteLogic.getTodos(pagination1,{});			
			this.docentesFK = this.docenteLogic.docentes;
				
		} catch(e:any) {
			throw e;
		}
	}
}

export {SueldoData};
