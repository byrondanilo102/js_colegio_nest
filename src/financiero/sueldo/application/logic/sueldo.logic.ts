import {Injectable,Inject} from "@nestjs/common"

import {InjectRepository} from '@nestjs/typeorm';
import {Repository} from 'typeorm';

import {Constantes} from '../../../../base/util/constantes';
import {GeneralEntityLogic} from '../../../../base/application/logic/general_entity_logic';
import {Pagination} from '../../../../base/application/logic/pagination';
import {Connexion} from '../../../../base/util/connexion_knex';
import {TipoAccionEnum} from '../../../../base/util/tipo_accion_enum';

import {Sueldo} from '../../domain/model/sueldo';

import {SueldoData} from '../../infrastructure/data/sueldo.data';
import {SueldoDataI} from '../../infrastructure/data/sueldo.datai';

import {SueldoLogicI} from './sueldo.logici';

//import {SueldoReturnViewDto} from './dto/sueldo_return_view.dto';

/*FKs*/
//import {SueldoFKReturnViewDto} from './dto/sueldo_fk_return_view.dto';

import {Docente} from '../../../../estructura/docente/domain/model/docente';
import {DocenteLogic} from '../../../../estructura/docente/application/logic/docente.logic';

	

@Injectable()
class SueldoLogic extends GeneralEntityLogic implements SueldoLogicI {
	
	result: any;
	total: any;
    sueldo1?:Sueldo = null;
    sueldos:Sueldo[] = [];			
	
	/*private sueldo_datai1: SueldoDataI;*/
	
	
	
	docentesFK:Docente[] = [];
	
	@Inject(DocenteLogic)
	private readonly docenteLogic:DocenteLogic;	
	
	
	constructor(private sueldo_datai1: SueldoData) {
		super();
		this.sueldo_datai1 = sueldo_datai1;
        
		this.sueldo1 = null;
    	this.sueldos = new Array<Sueldo>();
		
		/*FKs*/
		
		this.docentesFK = new Array<Docente>();
		
	}
	
	async getTodos(pagination1:Pagination,relations1:any): Promise<Sueldo[]> {
        try	{			           			
			this.sueldos = await this.sueldo_datai1.getTodos(pagination1,relations1);			
			return this.sueldos;
			
		} catch(ex:any) {
            throw ex;
        }
    }
	
	async getBuscar(builder_object_sueldo1:any,pagination1:Pagination,relations1:any): Promise<Sueldo[]> {
        try	{									
            this.sueldos = await this.sueldo_datai1.getBuscar(builder_object_sueldo1,pagination1,relations1);			
			return this.sueldos;	
			
		} catch(ex:any) {
            throw ex;
        }
    }
	
	async getBuscarGeneral(builder_object_sueldo1:any,pagination1:Pagination,relations1:any): Promise<Sueldo[]> {
        try	{						
			
            this.sueldos = await this.sueldo_datai1.getBuscarGeneral(builder_object_sueldo1,pagination1,relations1);			
			return this.sueldos;	
			
		} catch(ex:any) {
            throw ex;
        }
    }
	
	async getBuscarUno(builder_object_sueldo1:any,relations1:any): Promise<Sueldo> {
        try	{			
            this.sueldo1 = await this.sueldo_datai1.getBuscarUno(builder_object_sueldo1,relations1);			
			return this.sueldo1;
			
		} catch(ex:any) {
            throw ex;
        }
    }
	
    async nuevo(sueldo1:Sueldo): Promise<any> {
        try	{			           
			this.result = await this.sueldo_datai1.nuevo(sueldo1);
			return this.result;
			
		} catch(ex:any) {
            throw ex;
        }
    }
	
	async actualizar(sueldo1:Sueldo): Promise<any> {
        try	{			           
			this.result = await this.sueldo_datai1.actualizar(sueldo1);
			return this.result;
			
		} catch(ex:any) {
            throw ex;
        }
    }
	
	async eliminar(id:number): Promise<any> {  
        try	{			          
			this.result = await this.sueldo_datai1.eliminar(id);
			return this.result;
			
		} catch(ex:any) {
            throw ex;
        }
    }	
	
	async nuevos(sueldos:Array<Sueldo>) {
        try	{			           
			this.result = await this.sueldo_datai1.nuevos(sueldos);
		
		} catch(ex:any) {
            throw ex;
        }
    }
	
	async eliminars(ids:Array<number>) {  
        try	{			          
			
			if(ids.length > 0) {
				this.result = await this.sueldo_datai1.eliminars(ids);
			}
			
		} catch(ex:any) {
            throw ex;
        }
    }
	
	async actualizars(updates_sueldos:Array<Sueldo>,updates_columnas:Array<string>) {  
        try	{			           						
			this.result = await this.sueldo_datai1.actualizars(updates_sueldos,updates_columnas);			
			
		} catch(ex:any) {
            throw ex;
        }
    }	
	
	getBuilderFunctionObjectParametroSeleccionar(id:number):any {				
		let jsueldo1:any = this.sueldo_datai1.getBuilderFunctionObjectParametroSeleccionar(id);
		return jsueldo1;		
	}
	
	getBuilderFunctionObjectParametroBuscar(req:any):any {				
		let jsueldo1:any = this.sueldo_datai1.getBuilderFunctionObjectParametroBuscar(req);
		return jsueldo1;
	}
	
	/*FKs*/
	async getFks() {
		try {
			await this.sueldo_datai1.getFks();
			
			this.docentesFK = this.sueldo_datai1.docentesFK;				
			
		} catch(e:any) {
			throw e;
		}
	}
}

export {SueldoLogic};
