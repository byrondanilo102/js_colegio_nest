import {Injectable,Inject} from "@nestjs/common"

import {InjectRepository} from '@nestjs/typeorm';
import {Repository} from 'typeorm';

import {Constantes} from '../../../../base/util/constantes';
import {GeneralEntityLogic} from '../../../../base/application/logic/general_entity_logic';
import {Pagination} from '../../../../base/application/logic/pagination';
import {Connexion} from '../../../../base/util/connexion_knex';
import {TipoAccionEnum} from '../../../../base/util/tipo_accion_enum';

import {AlumnoMateria} from '../../domain/model/alumno_materia';

import {AlumnoMateriaData} from '../../infrastructure/data/alumno_materia.data';
import {AlumnoMateriaDataI} from '../../infrastructure/data/alumno_materia.datai';

import {AlumnoMateriaLogicI} from './alumno_materia.logici';

//import {AlumnoMateriaReturnViewDto} from './dto/alumno_materia_return_view.dto';

/*FKs*/
//import {AlumnoMateriaFKReturnViewDto} from './dto/alumno_materia_fk_return_view.dto';

import {Alumno} from '../../../../estructura/alumno/domain/model/alumno';
import {AlumnoLogic} from '../../../../estructura/alumno/application/logic/alumno.logic';

import {Materia} from '../../../../estructura/materia/domain/model/materia';
import {MateriaLogic} from '../../../../estructura/materia/application/logic/materia.logic';

	

@Injectable()
class AlumnoMateriaLogic extends GeneralEntityLogic implements AlumnoMateriaLogicI {
	
	result: any;
	total: any;
    alumno_materia1?:AlumnoMateria = null;
    alumno_materias:AlumnoMateria[] = [];			
	
	/*private alumno_materia_datai1: AlumnoMateriaDataI;*/
	
	
	
	alumnosFK:Alumno[] = [];
	materiasFK:Materia[] = [];
	
	@Inject(AlumnoLogic)
	private readonly alumnoLogic:AlumnoLogic;	
	
	@Inject(MateriaLogic)
	private readonly materiaLogic:MateriaLogic;	
	
	
	constructor(private alumno_materia_datai1: AlumnoMateriaData) {
		super();
		this.alumno_materia_datai1 = alumno_materia_datai1;
        
		this.alumno_materia1 = null;
    	this.alumno_materias = new Array<AlumnoMateria>();
		
		/*FKs*/
		
		this.alumnosFK = new Array<Alumno>();
		this.materiasFK = new Array<Materia>();
		
	}
	
	async getTodos(pagination1:Pagination,relations1:any): Promise<AlumnoMateria[]> {
        try	{			           			
			this.alumno_materias = await this.alumno_materia_datai1.getTodos(pagination1,relations1);			
			return this.alumno_materias;
			
		} catch(ex:any) {
            throw ex;
        }
    }
	
	async getBuscar(builder_object_alumno_materia1:any,pagination1:Pagination,relations1:any): Promise<AlumnoMateria[]> {
        try	{									
            this.alumno_materias = await this.alumno_materia_datai1.getBuscar(builder_object_alumno_materia1,pagination1,relations1);			
			return this.alumno_materias;	
			
		} catch(ex:any) {
            throw ex;
        }
    }
	
	async getBuscarGeneral(builder_object_alumno_materia1:any,pagination1:Pagination,relations1:any): Promise<AlumnoMateria[]> {
        try	{						
			
            this.alumno_materias = await this.alumno_materia_datai1.getBuscarGeneral(builder_object_alumno_materia1,pagination1,relations1);			
			return this.alumno_materias;	
			
		} catch(ex:any) {
            throw ex;
        }
    }
	
	async getBuscarUno(builder_object_alumno_materia1:any,relations1:any): Promise<AlumnoMateria> {
        try	{			
            this.alumno_materia1 = await this.alumno_materia_datai1.getBuscarUno(builder_object_alumno_materia1,relations1);			
			return this.alumno_materia1;
			
		} catch(ex:any) {
            throw ex;
        }
    }
	
    async nuevo(alumno_materia1:AlumnoMateria): Promise<any> {
        try	{			           
			this.result = await this.alumno_materia_datai1.nuevo(alumno_materia1);
			return this.result;
			
		} catch(ex:any) {
            throw ex;
        }
    }
	
	async actualizar(alumno_materia1:AlumnoMateria): Promise<any> {
        try	{			           
			this.result = await this.alumno_materia_datai1.actualizar(alumno_materia1);
			return this.result;
			
		} catch(ex:any) {
            throw ex;
        }
    }
	
	async eliminar(id:number): Promise<any> {  
        try	{			          
			this.result = await this.alumno_materia_datai1.eliminar(id);
			return this.result;
			
		} catch(ex:any) {
            throw ex;
        }
    }	
	
	async nuevos(alumno_materias:Array<AlumnoMateria>) {
        try	{			           
			this.result = await this.alumno_materia_datai1.nuevos(alumno_materias);
		
		} catch(ex:any) {
            throw ex;
        }
    }
	
	async eliminars(ids:Array<number>) {  
        try	{			          
			
			if(ids.length > 0) {
				this.result = await this.alumno_materia_datai1.eliminars(ids);
			}
			
		} catch(ex:any) {
            throw ex;
        }
    }
	
	async actualizars(updates_alumno_materias:Array<AlumnoMateria>,updates_columnas:Array<string>) {  
        try	{			           						
			this.result = await this.alumno_materia_datai1.actualizars(updates_alumno_materias,updates_columnas);			
			
		} catch(ex:any) {
            throw ex;
        }
    }	
	
	getBuilderFunctionObjectParametroSeleccionar(id:number):any {				
		let jalumno_materia1:any = this.alumno_materia_datai1.getBuilderFunctionObjectParametroSeleccionar(id);
		return jalumno_materia1;		
	}
	
	getBuilderFunctionObjectParametroBuscar(req:any):any {				
		let jalumno_materia1:any = this.alumno_materia_datai1.getBuilderFunctionObjectParametroBuscar(req);
		return jalumno_materia1;
	}
	
	/*FKs*/
	async getFks() {
		try {
			await this.alumno_materia_datai1.getFks();
			
			this.alumnosFK = this.alumno_materia_datai1.alumnosFK;				
			this.materiasFK = this.alumno_materia_datai1.materiasFK;				
			
		} catch(e:any) {
			throw e;
		}
	}
}

export {AlumnoMateriaLogic};
