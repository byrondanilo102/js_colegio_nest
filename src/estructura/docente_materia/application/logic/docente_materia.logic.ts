import {Injectable,Inject} from "@nestjs/common"

import {InjectRepository} from '@nestjs/typeorm';
import {Repository} from 'typeorm';

import {Constantes} from '../../../../base/util/constantes';
import {GeneralEntityLogic} from '../../../../base/application/logic/general_entity_logic';
import {Pagination} from '../../../../base/application/logic/pagination';
import {Connexion} from '../../../../base/util/connexion_knex';
import {TipoAccionEnum} from '../../../../base/util/tipo_accion_enum';

import {DocenteMateria} from '../../domain/model/docente_materia';

import {DocenteMateriaData} from '../../infrastructure/data/docente_materia.data';
import {DocenteMateriaDataI} from '../../infrastructure/data/docente_materia.datai';

import {DocenteMateriaLogicI} from './docente_materia.logici';

//import {DocenteMateriaReturnViewDto} from './dto/docente_materia_return_view.dto';

/*FKs*/
//import {DocenteMateriaFKReturnViewDto} from './dto/docente_materia_fk_return_view.dto';

import {Docente} from '../../../../estructura/docente/domain/model/docente';
import {DocenteLogic} from '../../../../estructura/docente/application/logic/docente.logic';

import {Materia} from '../../../../estructura/materia/domain/model/materia';
import {MateriaLogic} from '../../../../estructura/materia/application/logic/materia.logic';

	

@Injectable()
class DocenteMateriaLogic extends GeneralEntityLogic implements DocenteMateriaLogicI {
	
	result: any;
	total: any;
    docente_materia1?:DocenteMateria = null;
    docente_materias:DocenteMateria[] = [];			
	
	/*private docente_materia_datai1: DocenteMateriaDataI;*/
	
	
	
	docentesFK:Docente[] = [];
	materiasFK:Materia[] = [];
	
	@Inject(DocenteLogic)
	private readonly docenteLogic:DocenteLogic;	
	
	@Inject(MateriaLogic)
	private readonly materiaLogic:MateriaLogic;	
	
	
	constructor(private docente_materia_datai1: DocenteMateriaData) {
		super();
		this.docente_materia_datai1 = docente_materia_datai1;
        
		this.docente_materia1 = null;
    	this.docente_materias = new Array<DocenteMateria>();
		
		/*FKs*/
		
		this.docentesFK = new Array<Docente>();
		this.materiasFK = new Array<Materia>();
		
	}
	
	async getTodos(pagination1:Pagination,relations1:any): Promise<DocenteMateria[]> {
        try	{			           			
			this.docente_materias = await this.docente_materia_datai1.getTodos(pagination1,relations1);			
			return this.docente_materias;
			
		} catch(ex:any) {
            throw ex;
        }
    }
	
	async getBuscar(builder_object_docente_materia1:any,pagination1:Pagination,relations1:any): Promise<DocenteMateria[]> {
        try	{									
            this.docente_materias = await this.docente_materia_datai1.getBuscar(builder_object_docente_materia1,pagination1,relations1);			
			return this.docente_materias;	
			
		} catch(ex:any) {
            throw ex;
        }
    }
	
	async getBuscarGeneral(builder_object_docente_materia1:any,pagination1:Pagination,relations1:any): Promise<DocenteMateria[]> {
        try	{						
			
            this.docente_materias = await this.docente_materia_datai1.getBuscarGeneral(builder_object_docente_materia1,pagination1,relations1);			
			return this.docente_materias;	
			
		} catch(ex:any) {
            throw ex;
        }
    }
	
	async getBuscarUno(builder_object_docente_materia1:any,relations1:any): Promise<DocenteMateria> {
        try	{			
            this.docente_materia1 = await this.docente_materia_datai1.getBuscarUno(builder_object_docente_materia1,relations1);			
			return this.docente_materia1;
			
		} catch(ex:any) {
            throw ex;
        }
    }
	
    async nuevo(docente_materia1:DocenteMateria): Promise<any> {
        try	{			           
			this.result = await this.docente_materia_datai1.nuevo(docente_materia1);
			return this.result;
			
		} catch(ex:any) {
            throw ex;
        }
    }
	
	async actualizar(docente_materia1:DocenteMateria): Promise<any> {
        try	{			           
			this.result = await this.docente_materia_datai1.actualizar(docente_materia1);
			return this.result;
			
		} catch(ex:any) {
            throw ex;
        }
    }
	
	async eliminar(id:number): Promise<any> {  
        try	{			          
			this.result = await this.docente_materia_datai1.eliminar(id);
			return this.result;
			
		} catch(ex:any) {
            throw ex;
        }
    }	
	
	async nuevos(docente_materias:Array<DocenteMateria>) {
        try	{			           
			this.result = await this.docente_materia_datai1.nuevos(docente_materias);
		
		} catch(ex:any) {
            throw ex;
        }
    }
	
	async eliminars(ids:Array<number>) {  
        try	{			          
			
			if(ids.length > 0) {
				this.result = await this.docente_materia_datai1.eliminars(ids);
			}
			
		} catch(ex:any) {
            throw ex;
        }
    }
	
	async actualizars(updates_docente_materias:Array<DocenteMateria>,updates_columnas:Array<string>) {  
        try	{			           						
			this.result = await this.docente_materia_datai1.actualizars(updates_docente_materias,updates_columnas);			
			
		} catch(ex:any) {
            throw ex;
        }
    }	
	
	getBuilderFunctionObjectParametroSeleccionar(id:number):any {				
		let jdocente_materia1:any = this.docente_materia_datai1.getBuilderFunctionObjectParametroSeleccionar(id);
		return jdocente_materia1;		
	}
	
	getBuilderFunctionObjectParametroBuscar(req:any):any {				
		let jdocente_materia1:any = this.docente_materia_datai1.getBuilderFunctionObjectParametroBuscar(req);
		return jdocente_materia1;
	}
	
	/*FKs*/
	async getFks() {
		try {
			await this.docente_materia_datai1.getFks();
			
			this.docentesFK = this.docente_materia_datai1.docentesFK;				
			this.materiasFK = this.docente_materia_datai1.materiasFK;				
			
		} catch(e:any) {
			throw e;
		}
	}
}

export {DocenteMateriaLogic};
