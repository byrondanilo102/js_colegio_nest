import {Injectable,Inject} from "@nestjs/common"

import {InjectRepository} from '@nestjs/typeorm';
import {Repository} from 'typeorm';

import {Constantes} from '../../../../base/util/constantes';
import {Pagination} from '../../../../base/application/logic/pagination';
import {Connexion} from '../../../../base/util/connexion_knex';
import {TipoAccionEnum} from '../../../../base/util/tipo_accion_enum';

import {Pension} from '../../domain/model/pension';

import {PensionDataI} from './pension.datai';

/*import {PensionReturnViewDto} from './dto/pension_return_view.dto';*/

/*FKs*/
/*import {PensionFKReturnViewDto} from './dto/pension_fk_return_view.dto';*/

import {Alumno} from '../../../../estructura/alumno/domain/model/alumno';
import {AlumnoLogic} from '../../../../estructura/alumno/application/logic/alumno.logic';

	

@Injectable()
class PensionData implements PensionDataI {				
	
	static TITULO:string = "Pension";    
	static MODULO:string = "financiero";
	static TABLA:string = "pension";
	static PATH_PAGINA:string = "financiero/pension_view";
	static PATH_PAGINA_FORM:string = "financiero/pension_form_view";
	
	result: any;
    pension1?:Pension = null;
    pensions:Pension[] = [];			
	
	private pension_data1: Repository<Pension>;
	
	//pension_return_view_dto:PensionReturnViewDto;
	
	/*FKs*/
	//pension_fk_return_view_dto:PensionFKReturnViewDto;
	
	
	alumnosFK:Alumno[] = [];
	
	@Inject(AlumnoLogic)
	private readonly alumnoLogic:AlumnoLogic;	
	
	
	constructor(@InjectRepository(Pension) pension_data1: Repository<Pension>) {
		
		this.pension_data1 = pension_data1;
        //this.connexion1=new Connexion(); 		
		this.pension1 = null;
    	this.pensions = new Array<Pension>();
		
		//this.pension_return_view_dto = new PensionReturnViewDto();
		
		/*FKs*/
		//this.pension_fk_return_view_dto = new PensionFKReturnViewDto();
		
		
		this.alumnosFK = new Array<Alumno>();
		
	}
	
	async getTodos(pagination1:Pagination,relations1:any): Promise<Pension[]> {  
        try	{			
            const params = {
				take: pagination1.limit,
				skip: pagination1.skip,
				relations: relations1
			};
			
			const [result,total] = await this.pension_data1.findAndCount(params);				
			
			this.pensions = this.getEntitiesFromModels(result);
			
			return this.pensions;
			
		} catch(ex:any) {
            throw ex;
        }
    }
	
	async getBuscar(builder_object_pension1:any,pagination1:Pagination,relations1:any): Promise<Pension[]> {  
        try	{			
			const params = {
				take: pagination1.limit,
				skip: pagination1.skip,
				relations: relations1
			};
			
            this.result = await this.pension_data1.find(params);
			
			this.pensions = this.getEntitiesFromModels(this.result);
			
			return this.pensions;
			
		} catch(ex:any) {
            throw ex;
        }
    }
	
	async getBuscarGeneral(builder_object_pension1:any,pagination1:Pagination,relations1:any): Promise<Pension[]> {  
        try	{			
			const params = {
				take: pagination1.limit,
				skip: pagination1.skip,
				relations: relations1
			};
			
            this.result = await this.pension_data1.find(params);
			
			this.pensions = this.getEntitiesFromModels(this.result);	
			
			return this.pensions;
			
		} catch(ex:any) {
            throw ex;
        }
    }
	
	async getBuscarUno(builder_object_pension1:any,relations1:any): Promise<Pension> {  
        try	{
			const params = {
				where: builder_object_pension1,
				
				relations: relations1
			};
			
            this.result = await this.pension_data1.find(params);
			
			this.pension1 = this.getEntityFromModel(this.result);
			
			return this.pension1;
			
		} catch(ex:any) {
            throw ex;
        }
    }
	
    async nuevo(pension1:Pension): Promise<any> {
        try	{			   
			
			let pensionModel2 = this.getModelFromEntity(pension1);
			
			this.result = await this.pension_data1.save(pensionModel2);
			
			return this.result;
			
		} catch(ex:any) {
            throw ex;
        }
    }
	
	async actualizar(pension1:Pension): Promise<any> {  
        try	{			     
			let pensionModel2 = this.getModelFromEntity(pension1);
			
			this.result = await this.pension_data1.update(pension1.id,pensionModel2);
			
			return this.result;
			
		} catch(ex:any) {
            throw ex;
        }
    }
	
	async eliminar(id:number): Promise<any> {  
        try	{			          
			this.result = await this.pension_data1.delete(id);
			
			return this.result;
			
		} catch(ex:any) {
            throw ex;
        }
    }	
	
	async nuevos(pensions:Array<Pension>) {
        try	{		
			let pensionModels2 = this.getModelsFromEntities(pensions);
			
			this.result = await this.pension_data1.save(pensionModels2);
		
		} catch(ex:any) {
            throw ex;
        }
    }
	
	async eliminars(ids:Array<number>) {  
        try	{			          
			
			if(ids.length > 0) {
				this.result = await this.pension_data1.delete(ids);
			}
			
		} catch(ex:any) {
            throw ex;
        }
    }
	
	async actualizars(updates_pensions:Array<Pension>,updates_columnas:Array<string>) {  
        try	{			           
			
			let updates_pensionModels2 = this.getModelsFromEntities(updates_pensions);
			
			for(let pensionModel2 of updates_pensionModels2) {
				this.result = await this.pension_data1.update(pensionModel2.id,pensionModel2);
			}
			
		} catch(ex:any) {
            throw ex;
        }
    }
	
	getEntitiesFromModels(result:any): Pension[] {		
		let pensions = new Array<Pension>();
		let pension1 = new Pension();
		
		for(let row of result) {
			pension1 = new Pension();
			pension1 = {...row};			
			pensions.push(pension1);
		}
		
		return pensions;
	}
	
	getEntityFromModel(result:any): Pension {		
		let pension1 = new Pension();
		
		for(let row of result) {
			pension1 = {...row};				
			break;
		}
		
		return pension1;
	}
	
	getModelsFromEntities(pensions: Pension[]): Pension[] {
		let pensionModels = new Array<Pension>();
		let pensionModel2 = new Pension();
		
		for(let pension2 of pensions) {
			pensionModel2 = this.getModelFromEntity(pension2);
			
			pensionModels.push(pensionModel2);
		}
		
		return pensionModels;
	}
	
	getModelFromEntity(pension1: Pension) : Pension {
		
		let pensionModel2 = new Pension();
		
		pensionModel2.id = pension1.id;
		pensionModel2.created_at = pension1.created_at;
		pensionModel2.updated_at = pension1.updated_at;
		
		pensionModel2.id_alumno= pension1.id_alumno;
		pensionModel2.anio= pension1.anio;
		pensionModel2.mes= pension1.mes;
		pensionModel2.valor= pension1.valor;
		pensionModel2.cobrado= pension1.cobrado;
		
		return pensionModel2;
	}
	
	getBuilderFunctionObjectParametroSeleccionar(id:number):any {				
		let jpension1:any = {};
							
		jpension1 = {
			id : id
		};									
				
		return jpension1;
	}
	
	getBuilderFunctionObjectParametroBuscar(req:any):any {				
		let jpension1:any = {};
		
		jpension1 = {
			created_at : req.body.created_at, 
			updated_at : req.body.updated_at, 
			id_alumno : req.body.id_alumno, 
			anio : req.body.anio, 
			mes : req.body.mes, 
			valor : req.body.valor, 
			cobrado : req.body.cobrado, 
		};								
				
		return jpension1;
	}
	
	/*FKs*/
	async getFks() {
		try {
			let pagination1 = new Pagination();
			pagination1.limit = Constantes.LIMIT_FK_MAX;
			pagination1.skip = 0;
			
			await this.alumnoLogic.getTodos(pagination1,{});			
			this.alumnosFK = this.alumnoLogic.alumnos;
				
		} catch(e:any) {
			throw e;
		}
	}
}

export {PensionData};
