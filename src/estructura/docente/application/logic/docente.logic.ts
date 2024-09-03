import {Injectable} from "@nestjs/common"

import {InjectRepository} from '@nestjs/typeorm';
import {Repository} from 'typeorm';

import {Constantes} from '../../../../base/util/constantes';
import {GeneralEntityLogic} from '../../../../base/application/logic/general_entity_logic';
import {Pagination} from '../../../../base/application/logic/pagination';
import {Connexion} from '../../../../base/util/connexion_knex';
import {TipoAccionEnum} from '../../../../base/util/tipo_accion_enum';

import {Docente} from '../../domain/model/docente';

import {DocenteData} from '../../infrastructure/data/docente.data';
import {DocenteDataI} from '../../infrastructure/data/docente.datai';

import {DocenteLogicI} from './docente.logici';

//import {DocenteReturnViewDto} from './dto/docente_return_view.dto';


@Injectable()
class DocenteLogic extends GeneralEntityLogic implements DocenteLogicI {
	
	result: any;
	total: any;
    docente1?:Docente = null;
    docentes:Docente[] = [];			
	
	/*private docente_datai1: DocenteDataI;*/
	
	
	constructor(private docente_datai1: DocenteData) {
		super();
		this.docente_datai1 = docente_datai1;
        
		this.docente1 = null;
    	this.docentes = new Array<Docente>();
		
	}
	
	async getTodos(pagination1:Pagination,relations1:any): Promise<Docente[]> {
        try	{			           			
			this.docentes = await this.docente_datai1.getTodos(pagination1,relations1);			
			return this.docentes;
			
		} catch(ex:any) {
            throw ex;
        }
    }
	
	async getBuscar(builder_object_docente1:any,pagination1:Pagination,relations1:any): Promise<Docente[]> {
        try	{									
            this.docentes = await this.docente_datai1.getBuscar(builder_object_docente1,pagination1,relations1);			
			return this.docentes;	
			
		} catch(ex:any) {
            throw ex;
        }
    }
	
	async getBuscarGeneral(builder_object_docente1:any,pagination1:Pagination,relations1:any): Promise<Docente[]> {
        try	{						
			
            this.docentes = await this.docente_datai1.getBuscarGeneral(builder_object_docente1,pagination1,relations1);			
			return this.docentes;	
			
		} catch(ex:any) {
            throw ex;
        }
    }
	
	async getBuscarUno(builder_object_docente1:any,relations1:any): Promise<Docente> {
        try	{			
            this.docente1 = await this.docente_datai1.getBuscarUno(builder_object_docente1,relations1);			
			return this.docente1;
			
		} catch(ex:any) {
            throw ex;
        }
    }
	
    async nuevo(docente1:Docente): Promise<any> {
        try	{			           
			this.result = await this.docente_datai1.nuevo(docente1);
			return this.result;
			
		} catch(ex:any) {
            throw ex;
        }
    }
	
	async actualizar(docente1:Docente): Promise<any> {
        try	{			           
			this.result = await this.docente_datai1.actualizar(docente1);
			return this.result;
			
		} catch(ex:any) {
            throw ex;
        }
    }
	
	async eliminar(id:number): Promise<any> {  
        try	{			          
			this.result = await this.docente_datai1.eliminar(id);
			return this.result;
			
		} catch(ex:any) {
            throw ex;
        }
    }	
	
	async nuevos(docentes:Array<Docente>) {
        try	{			           
			this.result = await this.docente_datai1.nuevos(docentes);
		
		} catch(ex:any) {
            throw ex;
        }
    }
	
	async eliminars(ids:Array<number>) {  
        try	{			          
			
			if(ids.length > 0) {
				this.result = await this.docente_datai1.eliminars(ids);
			}
			
		} catch(ex:any) {
            throw ex;
        }
    }
	
	async actualizars(updates_docentes:Array<Docente>,updates_columnas:Array<string>) {  
        try	{			           						
			this.result = await this.docente_datai1.actualizars(updates_docentes,updates_columnas);			
			
		} catch(ex:any) {
            throw ex;
        }
    }	
	
	getBuilderFunctionObjectParametroSeleccionar(id:number):any {				
		let jdocente1:any = this.docente_datai1.getBuilderFunctionObjectParametroSeleccionar(id);
		return jdocente1;		
	}
	
	getBuilderFunctionObjectParametroBuscar(req:any):any {				
		let jdocente1:any = this.docente_datai1.getBuilderFunctionObjectParametroBuscar(req);
		return jdocente1;
	}
	
}

export {DocenteLogic};
