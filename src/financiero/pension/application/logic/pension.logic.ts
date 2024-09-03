import {Injectable,Inject} from "@nestjs/common"

import {InjectRepository} from '@nestjs/typeorm';
import {Repository} from 'typeorm';

import {Constantes} from '../../../../base/util/constantes';
import {GeneralEntityLogic} from '../../../../base/application/logic/general_entity_logic';
import {Pagination} from '../../../../base/application/logic/pagination';
import {Connexion} from '../../../../base/util/connexion_knex';
import {TipoAccionEnum} from '../../../../base/util/tipo_accion_enum';

import {Pension} from '../../domain/model/pension';

import {PensionData} from '../../infrastructure/data/pension.data';
import {PensionDataI} from '../../infrastructure/data/pension.datai';

import {PensionLogicI} from './pension.logici';

//import {PensionReturnViewDto} from './dto/pension_return_view.dto';

/*FKs*/
//import {PensionFKReturnViewDto} from './dto/pension_fk_return_view.dto';

import {Alumno} from '../../../../estructura/alumno/domain/model/alumno';
import {AlumnoLogic} from '../../../../estructura/alumno/application/logic/alumno.logic';

	

@Injectable()
class PensionLogic extends GeneralEntityLogic implements PensionLogicI {
	
	result: any;
	total: any;
    pension1?:Pension = null;
    pensions:Pension[] = [];			
	
	/*private pension_datai1: PensionDataI;*/
	
	
	
	alumnosFK:Alumno[] = [];
	
	@Inject(AlumnoLogic)
	private readonly alumnoLogic:AlumnoLogic;	
	
	
	constructor(private pension_datai1: PensionData) {
		super();
		this.pension_datai1 = pension_datai1;
        
		this.pension1 = null;
    	this.pensions = new Array<Pension>();
		
		/*FKs*/
		
		this.alumnosFK = new Array<Alumno>();
		
	}
	
	async getTodos(pagination1:Pagination,relations1:any): Promise<Pension[]> {
        try	{			           			
			this.pensions = await this.pension_datai1.getTodos(pagination1,relations1);			
			return this.pensions;
			
		} catch(ex:any) {
            throw ex;
        }
    }
	
	async getBuscar(builder_object_pension1:any,pagination1:Pagination,relations1:any): Promise<Pension[]> {
        try	{									
            this.pensions = await this.pension_datai1.getBuscar(builder_object_pension1,pagination1,relations1);			
			return this.pensions;	
			
		} catch(ex:any) {
            throw ex;
        }
    }
	
	async getBuscarGeneral(builder_object_pension1:any,pagination1:Pagination,relations1:any): Promise<Pension[]> {
        try	{						
			
            this.pensions = await this.pension_datai1.getBuscarGeneral(builder_object_pension1,pagination1,relations1);			
			return this.pensions;	
			
		} catch(ex:any) {
            throw ex;
        }
    }
	
	async getBuscarUno(builder_object_pension1:any,relations1:any): Promise<Pension> {
        try	{			
            this.pension1 = await this.pension_datai1.getBuscarUno(builder_object_pension1,relations1);			
			return this.pension1;
			
		} catch(ex:any) {
            throw ex;
        }
    }
	
    async nuevo(pension1:Pension): Promise<any> {
        try	{			           
			this.result = await this.pension_datai1.nuevo(pension1);
			return this.result;
			
		} catch(ex:any) {
            throw ex;
        }
    }
	
	async actualizar(pension1:Pension): Promise<any> {
        try	{			           
			this.result = await this.pension_datai1.actualizar(pension1);
			return this.result;
			
		} catch(ex:any) {
            throw ex;
        }
    }
	
	async eliminar(id:number): Promise<any> {  
        try	{			          
			this.result = await this.pension_datai1.eliminar(id);
			return this.result;
			
		} catch(ex:any) {
            throw ex;
        }
    }	
	
	async nuevos(pensions:Array<Pension>) {
        try	{			           
			this.result = await this.pension_datai1.nuevos(pensions);
		
		} catch(ex:any) {
            throw ex;
        }
    }
	
	async eliminars(ids:Array<number>) {  
        try	{			          
			
			if(ids.length > 0) {
				this.result = await this.pension_datai1.eliminars(ids);
			}
			
		} catch(ex:any) {
            throw ex;
        }
    }
	
	async actualizars(updates_pensions:Array<Pension>,updates_columnas:Array<string>) {  
        try	{			           						
			this.result = await this.pension_datai1.actualizars(updates_pensions,updates_columnas);			
			
		} catch(ex:any) {
            throw ex;
        }
    }	
	
	getBuilderFunctionObjectParametroSeleccionar(id:number):any {				
		let jpension1:any = this.pension_datai1.getBuilderFunctionObjectParametroSeleccionar(id);
		return jpension1;		
	}
	
	getBuilderFunctionObjectParametroBuscar(req:any):any {				
		let jpension1:any = this.pension_datai1.getBuilderFunctionObjectParametroBuscar(req);
		return jpension1;
	}
	
	/*FKs*/
	async getFks() {
		try {
			await this.pension_datai1.getFks();
			
			this.alumnosFK = this.pension_datai1.alumnosFK;				
			
		} catch(e:any) {
			throw e;
		}
	}
}

export {PensionLogic};
