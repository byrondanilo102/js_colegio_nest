import {Injectable,Inject} from "@nestjs/common"

import {InjectRepository} from '@nestjs/typeorm';
import {Repository} from 'typeorm';

import {Constantes} from '../../../../base/util/constantes';
import {GeneralEntityLogic} from '../../../../base/application/logic/general_entity_logic';
import {Pagination} from '../../../../base/application/logic/pagination';
import {Connexion} from '../../../../base/util/connexion_knex';
import {TipoAccionEnum} from '../../../../base/util/tipo_accion_enum';

import {Matricula} from '../../domain/model/matricula';

import {MatriculaData} from '../../infrastructure/data/matricula.data';
import {MatriculaDataI} from '../../infrastructure/data/matricula.datai';

import {MatriculaLogicI} from './matricula.logici';

//import {MatriculaReturnViewDto} from './dto/matricula_return_view.dto';

/*FKs*/
//import {MatriculaFKReturnViewDto} from './dto/matricula_fk_return_view.dto';

import {Alumno} from '../../../../estructura/alumno/domain/model/alumno';
import {AlumnoLogic} from '../../../../estructura/alumno/application/logic/alumno.logic';

	

@Injectable()
class MatriculaLogic extends GeneralEntityLogic implements MatriculaLogicI {
	
	result: any;
	total: any;
    matricula1?:Matricula = null;
    matriculas:Matricula[] = [];			
	
	/*private matricula_datai1: MatriculaDataI;*/
	
	
	
	alumnosFK:Alumno[] = [];
	
	@Inject(AlumnoLogic)
	private readonly alumnoLogic:AlumnoLogic;	
	
	
	constructor(private matricula_datai1: MatriculaData) {
		super();
		this.matricula_datai1 = matricula_datai1;
        
		this.matricula1 = null;
    	this.matriculas = new Array<Matricula>();
		
		/*FKs*/
		
		this.alumnosFK = new Array<Alumno>();
		
	}
	
	async getTodos(pagination1:Pagination,relations1:any): Promise<Matricula[]> {
        try	{			           			
			this.matriculas = await this.matricula_datai1.getTodos(pagination1,relations1);			
			return this.matriculas;
			
		} catch(ex:any) {
            throw ex;
        }
    }
	
	async getBuscar(builder_object_matricula1:any,pagination1:Pagination,relations1:any): Promise<Matricula[]> {
        try	{									
            this.matriculas = await this.matricula_datai1.getBuscar(builder_object_matricula1,pagination1,relations1);			
			return this.matriculas;	
			
		} catch(ex:any) {
            throw ex;
        }
    }
	
	async getBuscarGeneral(builder_object_matricula1:any,pagination1:Pagination,relations1:any): Promise<Matricula[]> {
        try	{						
			
            this.matriculas = await this.matricula_datai1.getBuscarGeneral(builder_object_matricula1,pagination1,relations1);			
			return this.matriculas;	
			
		} catch(ex:any) {
            throw ex;
        }
    }
	
	async getBuscarUno(builder_object_matricula1:any,relations1:any): Promise<Matricula> {
        try	{			
            this.matricula1 = await this.matricula_datai1.getBuscarUno(builder_object_matricula1,relations1);			
			return this.matricula1;
			
		} catch(ex:any) {
            throw ex;
        }
    }
	
    async nuevo(matricula1:Matricula): Promise<any> {
        try	{			           
			this.result = await this.matricula_datai1.nuevo(matricula1);
			return this.result;
			
		} catch(ex:any) {
            throw ex;
        }
    }
	
	async actualizar(matricula1:Matricula): Promise<any> {
        try	{			           
			this.result = await this.matricula_datai1.actualizar(matricula1);
			return this.result;
			
		} catch(ex:any) {
            throw ex;
        }
    }
	
	async eliminar(id:number): Promise<any> {  
        try	{			          
			this.result = await this.matricula_datai1.eliminar(id);
			return this.result;
			
		} catch(ex:any) {
            throw ex;
        }
    }	
	
	async nuevos(matriculas:Array<Matricula>) {
        try	{			           
			this.result = await this.matricula_datai1.nuevos(matriculas);
		
		} catch(ex:any) {
            throw ex;
        }
    }
	
	async eliminars(ids:Array<number>) {  
        try	{			          
			
			if(ids.length > 0) {
				this.result = await this.matricula_datai1.eliminars(ids);
			}
			
		} catch(ex:any) {
            throw ex;
        }
    }
	
	async actualizars(updates_matriculas:Array<Matricula>,updates_columnas:Array<string>) {  
        try	{			           						
			this.result = await this.matricula_datai1.actualizars(updates_matriculas,updates_columnas);			
			
		} catch(ex:any) {
            throw ex;
        }
    }	
	
	getBuilderFunctionObjectParametroSeleccionar(id:number):any {				
		let jmatricula1:any = this.matricula_datai1.getBuilderFunctionObjectParametroSeleccionar(id);
		return jmatricula1;		
	}
	
	getBuilderFunctionObjectParametroBuscar(req:any):any {				
		let jmatricula1:any = this.matricula_datai1.getBuilderFunctionObjectParametroBuscar(req);
		return jmatricula1;
	}
	
	/*FKs*/
	async getFks() {
		try {
			await this.matricula_datai1.getFks();
			
			this.alumnosFK = this.matricula_datai1.alumnosFK;				
			
		} catch(e:any) {
			throw e;
		}
	}
}

export {MatriculaLogic};
