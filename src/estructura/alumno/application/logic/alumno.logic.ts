import {Injectable} from "@nestjs/common"

import {InjectRepository} from '@nestjs/typeorm';
import {Repository} from 'typeorm';

import {Constantes} from '../../../../base/util/constantes';
import {GeneralEntityLogic} from '../../../../base/application/logic/general_entity_logic';
import {Pagination} from '../../../../base/application/logic/pagination';
import {Connexion} from '../../../../base/util/connexion_knex';
import {TipoAccionEnum} from '../../../../base/util/tipo_accion_enum';

import {Alumno} from '../../domain/model/alumno';

import {AlumnoData} from '../../infrastructure/data/alumno.data';
import {AlumnoDataI} from '../../infrastructure/data/alumno.datai';

import {AlumnoLogicI} from './alumno.logici';

//import {AlumnoReturnViewDto} from './dto/alumno_return_view.dto';


@Injectable()
class AlumnoLogic extends GeneralEntityLogic implements AlumnoLogicI {
	
	result: any;
	total: any;
    alumno1?:Alumno = null;
    alumnos:Alumno[] = [];			
	
	/*private alumno_datai1: AlumnoDataI;*/
	
	
	constructor(private alumno_datai1: AlumnoData) {
		super();
		this.alumno_datai1 = alumno_datai1;
        
		this.alumno1 = null;
    	this.alumnos = new Array<Alumno>();
		
	}
	
	async getTodos(pagination1:Pagination,relations1:any): Promise<Alumno[]> {
        try	{			           			
			this.alumnos = await this.alumno_datai1.getTodos(pagination1,relations1);			
			return this.alumnos;
			
		} catch(ex:any) {
            throw ex;
        }
    }
	
	async getBuscar(builder_object_alumno1:any,pagination1:Pagination,relations1:any): Promise<Alumno[]> {
        try	{									
            this.alumnos = await this.alumno_datai1.getBuscar(builder_object_alumno1,pagination1,relations1);			
			return this.alumnos;	
			
		} catch(ex:any) {
            throw ex;
        }
    }
	
	async getBuscarGeneral(builder_object_alumno1:any,pagination1:Pagination,relations1:any): Promise<Alumno[]> {
        try	{						
			
            this.alumnos = await this.alumno_datai1.getBuscarGeneral(builder_object_alumno1,pagination1,relations1);			
			return this.alumnos;	
			
		} catch(ex:any) {
            throw ex;
        }
    }
	
	async getBuscarUno(builder_object_alumno1:any,relations1:any): Promise<Alumno> {
        try	{			
            this.alumno1 = await this.alumno_datai1.getBuscarUno(builder_object_alumno1,relations1);			
			return this.alumno1;
			
		} catch(ex:any) {
            throw ex;
        }
    }
	
    async nuevo(alumno1:Alumno): Promise<any> {
        try	{			           
			this.result = await this.alumno_datai1.nuevo(alumno1);
			return this.result;
			
		} catch(ex:any) {
            throw ex;
        }
    }
	
	async actualizar(alumno1:Alumno): Promise<any> {
        try	{			           
			this.result = await this.alumno_datai1.actualizar(alumno1);
			return this.result;
			
		} catch(ex:any) {
            throw ex;
        }
    }
	
	async eliminar(id:number): Promise<any> {  
        try	{			          
			this.result = await this.alumno_datai1.eliminar(id);
			return this.result;
			
		} catch(ex:any) {
            throw ex;
        }
    }	
	
	async nuevos(alumnos:Array<Alumno>) {
        try	{			           
			this.result = await this.alumno_datai1.nuevos(alumnos);
		
		} catch(ex:any) {
            throw ex;
        }
    }
	
	async eliminars(ids:Array<number>) {  
        try	{			          
			
			if(ids.length > 0) {
				this.result = await this.alumno_datai1.eliminars(ids);
			}
			
		} catch(ex:any) {
            throw ex;
        }
    }
	
	async actualizars(updates_alumnos:Array<Alumno>,updates_columnas:Array<string>) {  
        try	{			           						
			this.result = await this.alumno_datai1.actualizars(updates_alumnos,updates_columnas);			
			
		} catch(ex:any) {
            throw ex;
        }
    }	
	
	getBuilderFunctionObjectParametroSeleccionar(id:number):any {				
		let jalumno1:any = this.alumno_datai1.getBuilderFunctionObjectParametroSeleccionar(id);
		return jalumno1;		
	}
	
	getBuilderFunctionObjectParametroBuscar(req:any):any {				
		let jalumno1:any = this.alumno_datai1.getBuilderFunctionObjectParametroBuscar(req);
		return jalumno1;
	}
	
}

export {AlumnoLogic};
