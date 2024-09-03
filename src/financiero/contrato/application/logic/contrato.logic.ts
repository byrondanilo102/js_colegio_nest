import {Injectable,Inject} from "@nestjs/common"

import {InjectRepository} from '@nestjs/typeorm';
import {Repository} from 'typeorm';

import {Constantes} from '../../../../base/util/constantes';
import {GeneralEntityLogic} from '../../../../base/application/logic/general_entity_logic';
import {Pagination} from '../../../../base/application/logic/pagination';
import {Connexion} from '../../../../base/util/connexion_knex';
import {TipoAccionEnum} from '../../../../base/util/tipo_accion_enum';

import {Contrato} from '../../domain/model/contrato';

import {ContratoData} from '../../infrastructure/data/contrato.data';
import {ContratoDataI} from '../../infrastructure/data/contrato.datai';

import {ContratoLogicI} from './contrato.logici';

//import {ContratoReturnViewDto} from './dto/contrato_return_view.dto';

/*FKs*/
//import {ContratoFKReturnViewDto} from './dto/contrato_fk_return_view.dto';

import {Docente} from '../../../../estructura/docente/domain/model/docente';
import {DocenteLogic} from '../../../../estructura/docente/application/logic/docente.logic';

	

@Injectable()
class ContratoLogic extends GeneralEntityLogic implements ContratoLogicI {
	
	result: any;
	total: any;
    contrato1?:Contrato = null;
    contratos:Contrato[] = [];			
	
	/*private contrato_datai1: ContratoDataI;*/
	
	
	
	docentesFK:Docente[] = [];
	
	@Inject(DocenteLogic)
	private readonly docenteLogic:DocenteLogic;	
	
	
	constructor(private contrato_datai1: ContratoData) {
		super();
		this.contrato_datai1 = contrato_datai1;
        
		this.contrato1 = null;
    	this.contratos = new Array<Contrato>();
		
		/*FKs*/
		
		this.docentesFK = new Array<Docente>();
		
	}
	
	async getTodos(pagination1:Pagination,relations1:any): Promise<Contrato[]> {
        try	{			           			
			this.contratos = await this.contrato_datai1.getTodos(pagination1,relations1);			
			return this.contratos;
			
		} catch(ex:any) {
            throw ex;
        }
    }
	
	async getBuscar(builder_object_contrato1:any,pagination1:Pagination,relations1:any): Promise<Contrato[]> {
        try	{									
            this.contratos = await this.contrato_datai1.getBuscar(builder_object_contrato1,pagination1,relations1);			
			return this.contratos;	
			
		} catch(ex:any) {
            throw ex;
        }
    }
	
	async getBuscarGeneral(builder_object_contrato1:any,pagination1:Pagination,relations1:any): Promise<Contrato[]> {
        try	{						
			
            this.contratos = await this.contrato_datai1.getBuscarGeneral(builder_object_contrato1,pagination1,relations1);			
			return this.contratos;	
			
		} catch(ex:any) {
            throw ex;
        }
    }
	
	async getBuscarUno(builder_object_contrato1:any,relations1:any): Promise<Contrato> {
        try	{			
            this.contrato1 = await this.contrato_datai1.getBuscarUno(builder_object_contrato1,relations1);			
			return this.contrato1;
			
		} catch(ex:any) {
            throw ex;
        }
    }
	
    async nuevo(contrato1:Contrato): Promise<any> {
        try	{			           
			this.result = await this.contrato_datai1.nuevo(contrato1);
			return this.result;
			
		} catch(ex:any) {
            throw ex;
        }
    }
	
	async actualizar(contrato1:Contrato): Promise<any> {
        try	{			           
			this.result = await this.contrato_datai1.actualizar(contrato1);
			return this.result;
			
		} catch(ex:any) {
            throw ex;
        }
    }
	
	async eliminar(id:number): Promise<any> {  
        try	{			          
			this.result = await this.contrato_datai1.eliminar(id);
			return this.result;
			
		} catch(ex:any) {
            throw ex;
        }
    }	
	
	async nuevos(contratos:Array<Contrato>) {
        try	{			           
			this.result = await this.contrato_datai1.nuevos(contratos);
		
		} catch(ex:any) {
            throw ex;
        }
    }
	
	async eliminars(ids:Array<number>) {  
        try	{			          
			
			if(ids.length > 0) {
				this.result = await this.contrato_datai1.eliminars(ids);
			}
			
		} catch(ex:any) {
            throw ex;
        }
    }
	
	async actualizars(updates_contratos:Array<Contrato>,updates_columnas:Array<string>) {  
        try	{			           						
			this.result = await this.contrato_datai1.actualizars(updates_contratos,updates_columnas);			
			
		} catch(ex:any) {
            throw ex;
        }
    }	
	
	getBuilderFunctionObjectParametroSeleccionar(id:number):any {				
		let jcontrato1:any = this.contrato_datai1.getBuilderFunctionObjectParametroSeleccionar(id);
		return jcontrato1;		
	}
	
	getBuilderFunctionObjectParametroBuscar(req:any):any {				
		let jcontrato1:any = this.contrato_datai1.getBuilderFunctionObjectParametroBuscar(req);
		return jcontrato1;
	}
	
	/*FKs*/
	async getFks() {
		try {
			await this.contrato_datai1.getFks();
			
			this.docentesFK = this.contrato_datai1.docentesFK;				
			
		} catch(e:any) {
			throw e;
		}
	}
}

export {ContratoLogic};
