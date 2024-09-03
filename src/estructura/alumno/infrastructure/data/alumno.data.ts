import {Injectable} from "@nestjs/common"

import {InjectRepository} from '@nestjs/typeorm';
import {Repository} from 'typeorm';

import {Constantes} from '../../../../base/util/constantes';
import {Pagination} from '../../../../base/application/logic/pagination';
import {Connexion} from '../../../../base/util/connexion_knex';
import {TipoAccionEnum} from '../../../../base/util/tipo_accion_enum';

import {Alumno} from '../../domain/model/alumno';

import {AlumnoDataI} from './alumno.datai';

/*import {AlumnoReturnViewDto} from './dto/alumno_return_view.dto';*/


@Injectable()
class AlumnoData implements AlumnoDataI {				
	
	static TITULO:string = "Alumno";    
	static MODULO:string = "estructura";
	static TABLA:string = "alumno";
	static PATH_PAGINA:string = "estructura/alumno_view";
	static PATH_PAGINA_FORM:string = "estructura/alumno_form_view";
	
	result: any;
    alumno1?:Alumno = null;
    alumnos:Alumno[] = [];			
	
	private alumno_data1: Repository<Alumno>;
	
	//alumno_return_view_dto:AlumnoReturnViewDto;
	
	
	constructor(@InjectRepository(Alumno) alumno_data1: Repository<Alumno>) {
		
		this.alumno_data1 = alumno_data1;
        //this.connexion1=new Connexion(); 		
		this.alumno1 = null;
    	this.alumnos = new Array<Alumno>();
		
		//this.alumno_return_view_dto = new AlumnoReturnViewDto();
		
	}
	
	async getTodos(pagination1:Pagination,relations1:any): Promise<Alumno[]> {  
        try	{			
            const params = {
				take: pagination1.limit,
				skip: pagination1.skip,
				relations: relations1
			};
			
			const [result,total] = await this.alumno_data1.findAndCount(params);				
			
			this.alumnos = this.getEntitiesFromModels(result);
			
			return this.alumnos;
			
		} catch(ex:any) {
            throw ex;
        }
    }
	
	async getBuscar(builder_object_alumno1:any,pagination1:Pagination,relations1:any): Promise<Alumno[]> {  
        try	{			
			const params = {
				take: pagination1.limit,
				skip: pagination1.skip,
				relations: relations1
			};
			
            this.result = await this.alumno_data1.find(params);
			
			this.alumnos = this.getEntitiesFromModels(this.result);
			
			return this.alumnos;
			
		} catch(ex:any) {
            throw ex;
        }
    }
	
	async getBuscarGeneral(builder_object_alumno1:any,pagination1:Pagination,relations1:any): Promise<Alumno[]> {  
        try	{			
			const params = {
				take: pagination1.limit,
				skip: pagination1.skip,
				relations: relations1
			};
			
            this.result = await this.alumno_data1.find(params);
			
			this.alumnos = this.getEntitiesFromModels(this.result);	
			
			return this.alumnos;
			
		} catch(ex:any) {
            throw ex;
        }
    }
	
	async getBuscarUno(builder_object_alumno1:any,relations1:any): Promise<Alumno> {  
        try	{
			const params = {
				where: builder_object_alumno1,
				
				relations: relations1
			};
			
            this.result = await this.alumno_data1.find(params);
			
			this.alumno1 = this.getEntityFromModel(this.result);
			
			return this.alumno1;
			
		} catch(ex:any) {
            throw ex;
        }
    }
	
    async nuevo(alumno1:Alumno): Promise<any> {
        try	{			   
			
			let alumnoModel2 = this.getModelFromEntity(alumno1);
			
			this.result = await this.alumno_data1.save(alumnoModel2);
			
			return this.result;
			
		} catch(ex:any) {
            throw ex;
        }
    }
	
	async actualizar(alumno1:Alumno): Promise<any> {  
        try	{			     
			let alumnoModel2 = this.getModelFromEntity(alumno1);
			
			this.result = await this.alumno_data1.update(alumno1.id,alumnoModel2);
			
			return this.result;
			
		} catch(ex:any) {
            throw ex;
        }
    }
	
	async eliminar(id:number): Promise<any> {  
        try	{			          
			this.result = await this.alumno_data1.delete(id);
			
			return this.result;
			
		} catch(ex:any) {
            throw ex;
        }
    }	
	
	async nuevos(alumnos:Array<Alumno>) {
        try	{		
			let alumnoModels2 = this.getModelsFromEntities(alumnos);
			
			this.result = await this.alumno_data1.save(alumnoModels2);
		
		} catch(ex:any) {
            throw ex;
        }
    }
	
	async eliminars(ids:Array<number>) {  
        try	{			          
			
			if(ids.length > 0) {
				this.result = await this.alumno_data1.delete(ids);
			}
			
		} catch(ex:any) {
            throw ex;
        }
    }
	
	async actualizars(updates_alumnos:Array<Alumno>,updates_columnas:Array<string>) {  
        try	{			           
			
			let updates_alumnoModels2 = this.getModelsFromEntities(updates_alumnos);
			
			for(let alumnoModel2 of updates_alumnoModels2) {
				this.result = await this.alumno_data1.update(alumnoModel2.id,alumnoModel2);
			}
			
		} catch(ex:any) {
            throw ex;
        }
    }
	
	getEntitiesFromModels(result:any): Alumno[] {		
		let alumnos = new Array<Alumno>();
		let alumno1 = new Alumno();
		
		for(let row of result) {
			alumno1 = new Alumno();
			alumno1 = {...row};			
			alumnos.push(alumno1);
		}
		
		return alumnos;
	}
	
	getEntityFromModel(result:any): Alumno {		
		let alumno1 = new Alumno();
		
		for(let row of result) {
			alumno1 = {...row};				
			break;
		}
		
		return alumno1;
	}
	
	getModelsFromEntities(alumnos: Alumno[]): Alumno[] {
		let alumnoModels = new Array<Alumno>();
		let alumnoModel2 = new Alumno();
		
		for(let alumno2 of alumnos) {
			alumnoModel2 = this.getModelFromEntity(alumno2);
			
			alumnoModels.push(alumnoModel2);
		}
		
		return alumnoModels;
	}
	
	getModelFromEntity(alumno1: Alumno) : Alumno {
		
		let alumnoModel2 = new Alumno();
		
		alumnoModel2.id = alumno1.id;
		alumnoModel2.created_at = alumno1.created_at;
		alumnoModel2.updated_at = alumno1.updated_at;
		
		alumnoModel2.nombre= alumno1.nombre;
		alumnoModel2.apellido= alumno1.apellido;
		alumnoModel2.fecha_nacimiento= alumno1.fecha_nacimiento;
		
		return alumnoModel2;
	}
	
	getBuilderFunctionObjectParametroSeleccionar(id:number):any {				
		let jalumno1:any = {};
							
		jalumno1 = {
			id : id
		};									
				
		return jalumno1;
	}
	
	getBuilderFunctionObjectParametroBuscar(req:any):any {				
		let jalumno1:any = {};
		
		jalumno1 = {
			created_at : req.body.created_at, 
			updated_at : req.body.updated_at, 
			nombre : req.body.nombre, 
			apellido : req.body.apellido, 
			fecha_nacimiento : req.body.fecha_nacimiento, 
		};								
				
		return jalumno1;
	}
	
}

export {AlumnoData};
