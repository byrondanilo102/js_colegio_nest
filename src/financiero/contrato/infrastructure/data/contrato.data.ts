import {Injectable,Inject} from "@nestjs/common"

import {InjectRepository} from '@nestjs/typeorm';
import {Repository} from 'typeorm';

import {Constantes} from '../../../../base/util/constantes';
import {Pagination} from '../../../../base/application/logic/pagination';
import {Connexion} from '../../../../base/util/connexion_knex';
import {TipoAccionEnum} from '../../../../base/util/tipo_accion_enum';

import {Contrato} from '../../domain/model/contrato';

import {ContratoDataI} from './contrato.datai';

/*import {ContratoReturnViewDto} from './dto/contrato_return_view.dto';*/

/*FKs*/
/*import {ContratoFKReturnViewDto} from './dto/contrato_fk_return_view.dto';*/

import {Docente} from '../../../../estructura/docente/domain/model/docente';
import {DocenteLogic} from '../../../../estructura/docente/application/logic/docente.logic';

	

@Injectable()
class ContratoData implements ContratoDataI {				
	
	static TITULO:string = "Contrato";    
	static MODULO:string = "financiero";
	static TABLA:string = "contrato";
	static PATH_PAGINA:string = "financiero/contrato_view";
	static PATH_PAGINA_FORM:string = "financiero/contrato_form_view";
	
	result: any;
    contrato1?:Contrato = null;
    contratos:Contrato[] = [];			
	
	private contrato_data1: Repository<Contrato>;
	
	//contrato_return_view_dto:ContratoReturnViewDto;
	
	/*FKs*/
	//contrato_fk_return_view_dto:ContratoFKReturnViewDto;
	
	
	docentesFK:Docente[] = [];
	
	@Inject(DocenteLogic)
	private readonly docenteLogic:DocenteLogic;	
	
	
	constructor(@InjectRepository(Contrato) contrato_data1: Repository<Contrato>) {
		
		this.contrato_data1 = contrato_data1;
        //this.connexion1=new Connexion(); 		
		this.contrato1 = null;
    	this.contratos = new Array<Contrato>();
		
		//this.contrato_return_view_dto = new ContratoReturnViewDto();
		
		/*FKs*/
		//this.contrato_fk_return_view_dto = new ContratoFKReturnViewDto();
		
		
		this.docentesFK = new Array<Docente>();
		
	}
	
	async getTodos(pagination1:Pagination,relations1:any): Promise<Contrato[]> {  
        try	{			
            const params = {
				take: pagination1.limit,
				skip: pagination1.skip,
				relations: relations1
			};
			
			const [result,total] = await this.contrato_data1.findAndCount(params);				
			
			this.contratos = this.getEntitiesFromModels(result);
			
			return this.contratos;
			
		} catch(ex:any) {
            throw ex;
        }
    }
	
	async getBuscar(builder_object_contrato1:any,pagination1:Pagination,relations1:any): Promise<Contrato[]> {  
        try	{			
			const params = {
				take: pagination1.limit,
				skip: pagination1.skip,
				relations: relations1
			};
			
            this.result = await this.contrato_data1.find(params);
			
			this.contratos = this.getEntitiesFromModels(this.result);
			
			return this.contratos;
			
		} catch(ex:any) {
            throw ex;
        }
    }
	
	async getBuscarGeneral(builder_object_contrato1:any,pagination1:Pagination,relations1:any): Promise<Contrato[]> {  
        try	{			
			const params = {
				take: pagination1.limit,
				skip: pagination1.skip,
				relations: relations1
			};
			
            this.result = await this.contrato_data1.find(params);
			
			this.contratos = this.getEntitiesFromModels(this.result);	
			
			return this.contratos;
			
		} catch(ex:any) {
            throw ex;
        }
    }
	
	async getBuscarUno(builder_object_contrato1:any,relations1:any): Promise<Contrato> {  
        try	{
			const params = {
				where: builder_object_contrato1,
				
				relations: relations1
			};
			
            this.result = await this.contrato_data1.find(params);
			
			this.contrato1 = this.getEntityFromModel(this.result);
			
			return this.contrato1;
			
		} catch(ex:any) {
            throw ex;
        }
    }
	
    async nuevo(contrato1:Contrato): Promise<any> {
        try	{			   
			
			let contratoModel2 = this.getModelFromEntity(contrato1);
			
			this.result = await this.contrato_data1.save(contratoModel2);
			
			return this.result;
			
		} catch(ex:any) {
            throw ex;
        }
    }
	
	async actualizar(contrato1:Contrato): Promise<any> {  
        try	{			     
			let contratoModel2 = this.getModelFromEntity(contrato1);
			
			this.result = await this.contrato_data1.update(contrato1.id,contratoModel2);
			
			return this.result;
			
		} catch(ex:any) {
            throw ex;
        }
    }
	
	async eliminar(id:number): Promise<any> {  
        try	{			          
			this.result = await this.contrato_data1.delete(id);
			
			return this.result;
			
		} catch(ex:any) {
            throw ex;
        }
    }	
	
	async nuevos(contratos:Array<Contrato>) {
        try	{		
			let contratoModels2 = this.getModelsFromEntities(contratos);
			
			this.result = await this.contrato_data1.save(contratoModels2);
		
		} catch(ex:any) {
            throw ex;
        }
    }
	
	async eliminars(ids:Array<number>) {  
        try	{			          
			
			if(ids.length > 0) {
				this.result = await this.contrato_data1.delete(ids);
			}
			
		} catch(ex:any) {
            throw ex;
        }
    }
	
	async actualizars(updates_contratos:Array<Contrato>,updates_columnas:Array<string>) {  
        try	{			           
			
			let updates_contratoModels2 = this.getModelsFromEntities(updates_contratos);
			
			for(let contratoModel2 of updates_contratoModels2) {
				this.result = await this.contrato_data1.update(contratoModel2.id,contratoModel2);
			}
			
		} catch(ex:any) {
            throw ex;
        }
    }
	
	getEntitiesFromModels(result:any): Contrato[] {		
		let contratos = new Array<Contrato>();
		let contrato1 = new Contrato();
		
		for(let row of result) {
			contrato1 = new Contrato();
			contrato1 = {...row};			
			contratos.push(contrato1);
		}
		
		return contratos;
	}
	
	getEntityFromModel(result:any): Contrato {		
		let contrato1 = new Contrato();
		
		for(let row of result) {
			contrato1 = {...row};				
			break;
		}
		
		return contrato1;
	}
	
	getModelsFromEntities(contratos: Contrato[]): Contrato[] {
		let contratoModels = new Array<Contrato>();
		let contratoModel2 = new Contrato();
		
		for(let contrato2 of contratos) {
			contratoModel2 = this.getModelFromEntity(contrato2);
			
			contratoModels.push(contratoModel2);
		}
		
		return contratoModels;
	}
	
	getModelFromEntity(contrato1: Contrato) : Contrato {
		
		let contratoModel2 = new Contrato();
		
		contratoModel2.id = contrato1.id;
		contratoModel2.created_at = contrato1.created_at;
		contratoModel2.updated_at = contrato1.updated_at;
		
		contratoModel2.anio= contrato1.anio;
		contratoModel2.valor= contrato1.valor;
		contratoModel2.fecha= contrato1.fecha;
		contratoModel2.firmado= contrato1.firmado;
		
		return contratoModel2;
	}
	
	getBuilderFunctionObjectParametroSeleccionar(id:number):any {				
		let jcontrato1:any = {};
							
		jcontrato1 = {
			id : id
		};									
				
		return jcontrato1;
	}
	
	getBuilderFunctionObjectParametroBuscar(req:any):any {				
		let jcontrato1:any = {};
		
		jcontrato1 = {
			created_at : req.body.created_at, 
			updated_at : req.body.updated_at, 
			anio : req.body.anio, 
			valor : req.body.valor, 
			fecha : req.body.fecha, 
			firmado : req.body.firmado, 
		};								
				
		return jcontrato1;
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

export {ContratoData};
