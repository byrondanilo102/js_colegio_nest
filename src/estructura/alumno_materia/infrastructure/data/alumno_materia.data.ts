import {Injectable,Inject} from "@nestjs/common"

import {InjectRepository} from '@nestjs/typeorm';
import {Repository} from 'typeorm';

import {Constantes} from '../../../../base/util/constantes';
import {Pagination} from '../../../../base/application/logic/pagination';
import {Connexion} from '../../../../base/util/connexion_knex';
import {TipoAccionEnum} from '../../../../base/util/tipo_accion_enum';

import {AlumnoMateria} from '../../domain/model/alumno_materia';

import {AlumnoMateriaDataI} from './alumno_materia.datai';

/*import {AlumnoMateriaReturnViewDto} from './dto/alumno_materia_return_view.dto';*/

/*FKs*/
/*import {AlumnoMateriaFKReturnViewDto} from './dto/alumno_materia_fk_return_view.dto';*/

import {Alumno} from '../../../../estructura/alumno/domain/model/alumno';
import {AlumnoLogic} from '../../../../estructura/alumno/application/logic/alumno.logic';

import {Materia} from '../../../../estructura/materia/domain/model/materia';
import {MateriaLogic} from '../../../../estructura/materia/application/logic/materia.logic';

	

@Injectable()
class AlumnoMateriaData implements AlumnoMateriaDataI {				
	
	static TITULO:string = "Alumno Materia";    
	static MODULO:string = "estructura";
	static TABLA:string = "alumno_materia";
	static PATH_PAGINA:string = "estructura/alumno_materia_view";
	static PATH_PAGINA_FORM:string = "estructura/alumno_materia_form_view";
	
	result: any;
    alumno_materia1?:AlumnoMateria = null;
    alumno_materias:AlumnoMateria[] = [];			
	
	private alumno_materia_data1: Repository<AlumnoMateria>;
	
	//alumno_materia_return_view_dto:AlumnoMateriaReturnViewDto;
	
	/*FKs*/
	//alumno_materia_fk_return_view_dto:AlumnoMateriaFKReturnViewDto;
	
	
	alumnosFK:Alumno[] = [];
	materiasFK:Materia[] = [];
	
	@Inject(AlumnoLogic)
	private readonly alumnoLogic:AlumnoLogic;	
	
	@Inject(MateriaLogic)
	private readonly materiaLogic:MateriaLogic;	
	
	
	constructor(@InjectRepository(AlumnoMateria) alumno_materia_data1: Repository<AlumnoMateria>) {
		
		this.alumno_materia_data1 = alumno_materia_data1;
        //this.connexion1=new Connexion(); 		
		this.alumno_materia1 = null;
    	this.alumno_materias = new Array<AlumnoMateria>();
		
		//this.alumno_materia_return_view_dto = new AlumnoMateriaReturnViewDto();
		
		/*FKs*/
		//this.alumno_materia_fk_return_view_dto = new AlumnoMateriaFKReturnViewDto();
		
		
		this.alumnosFK = new Array<Alumno>();
		this.materiasFK = new Array<Materia>();
		
	}
	
	async getTodos(pagination1:Pagination,relations1:any): Promise<AlumnoMateria[]> {  
        try	{			
            const params = {
				take: pagination1.limit,
				skip: pagination1.skip,
				relations: relations1
			};
			
			const [result,total] = await this.alumno_materia_data1.findAndCount(params);				
			
			this.alumno_materias = this.getEntitiesFromModels(result);
			
			return this.alumno_materias;
			
		} catch(ex:any) {
            throw ex;
        }
    }
	
	async getBuscar(builder_object_alumno_materia1:any,pagination1:Pagination,relations1:any): Promise<AlumnoMateria[]> {  
        try	{			
			const params = {
				take: pagination1.limit,
				skip: pagination1.skip,
				relations: relations1
			};
			
            this.result = await this.alumno_materia_data1.find(params);
			
			this.alumno_materias = this.getEntitiesFromModels(this.result);
			
			return this.alumno_materias;
			
		} catch(ex:any) {
            throw ex;
        }
    }
	
	async getBuscarGeneral(builder_object_alumno_materia1:any,pagination1:Pagination,relations1:any): Promise<AlumnoMateria[]> {  
        try	{			
			const params = {
				take: pagination1.limit,
				skip: pagination1.skip,
				relations: relations1
			};
			
            this.result = await this.alumno_materia_data1.find(params);
			
			this.alumno_materias = this.getEntitiesFromModels(this.result);	
			
			return this.alumno_materias;
			
		} catch(ex:any) {
            throw ex;
        }
    }
	
	async getBuscarUno(builder_object_alumno_materia1:any,relations1:any): Promise<AlumnoMateria> {  
        try	{
			const params = {
				where: builder_object_alumno_materia1,
				
				relations: relations1
			};
			
            this.result = await this.alumno_materia_data1.find(params);
			
			this.alumno_materia1 = this.getEntityFromModel(this.result);
			
			return this.alumno_materia1;
			
		} catch(ex:any) {
            throw ex;
        }
    }
	
    async nuevo(alumno_materia1:AlumnoMateria): Promise<any> {
        try	{			   
			
			let alumno_materiaModel2 = this.getModelFromEntity(alumno_materia1);
			
			this.result = await this.alumno_materia_data1.save(alumno_materiaModel2);
			
			return this.result;
			
		} catch(ex:any) {
            throw ex;
        }
    }
	
	async actualizar(alumno_materia1:AlumnoMateria): Promise<any> {  
        try	{			     
			let alumno_materiaModel2 = this.getModelFromEntity(alumno_materia1);
			
			this.result = await this.alumno_materia_data1.update(alumno_materia1.id,alumno_materiaModel2);
			
			return this.result;
			
		} catch(ex:any) {
            throw ex;
        }
    }
	
	async eliminar(id:number): Promise<any> {  
        try	{			          
			this.result = await this.alumno_materia_data1.delete(id);
			
			return this.result;
			
		} catch(ex:any) {
            throw ex;
        }
    }	
	
	async nuevos(alumno_materias:Array<AlumnoMateria>) {
        try	{		
			let alumno_materiaModels2 = this.getModelsFromEntities(alumno_materias);
			
			this.result = await this.alumno_materia_data1.save(alumno_materiaModels2);
		
		} catch(ex:any) {
            throw ex;
        }
    }
	
	async eliminars(ids:Array<number>) {  
        try	{			          
			
			if(ids.length > 0) {
				this.result = await this.alumno_materia_data1.delete(ids);
			}
			
		} catch(ex:any) {
            throw ex;
        }
    }
	
	async actualizars(updates_alumno_materias:Array<AlumnoMateria>,updates_columnas:Array<string>) {  
        try	{			           
			
			let updates_alumno_materiaModels2 = this.getModelsFromEntities(updates_alumno_materias);
			
			for(let alumno_materiaModel2 of updates_alumno_materiaModels2) {
				this.result = await this.alumno_materia_data1.update(alumno_materiaModel2.id,alumno_materiaModel2);
			}
			
		} catch(ex:any) {
            throw ex;
        }
    }
	
	getEntitiesFromModels(result:any): AlumnoMateria[] {		
		let alumno_materias = new Array<AlumnoMateria>();
		let alumno_materia1 = new AlumnoMateria();
		
		for(let row of result) {
			alumno_materia1 = new AlumnoMateria();
			alumno_materia1 = {...row};			
			alumno_materias.push(alumno_materia1);
		}
		
		return alumno_materias;
	}
	
	getEntityFromModel(result:any): AlumnoMateria {		
		let alumno_materia1 = new AlumnoMateria();
		
		for(let row of result) {
			alumno_materia1 = {...row};				
			break;
		}
		
		return alumno_materia1;
	}
	
	getModelsFromEntities(alumno_materias: AlumnoMateria[]): AlumnoMateria[] {
		let alumno_materiaModels = new Array<AlumnoMateria>();
		let alumno_materiaModel2 = new AlumnoMateria();
		
		for(let alumno_materia2 of alumno_materias) {
			alumno_materiaModel2 = this.getModelFromEntity(alumno_materia2);
			
			alumno_materiaModels.push(alumno_materiaModel2);
		}
		
		return alumno_materiaModels;
	}
	
	getModelFromEntity(alumno_materia1: AlumnoMateria) : AlumnoMateria {
		
		let alumno_materiaModel2 = new AlumnoMateria();
		
		alumno_materiaModel2.id = alumno_materia1.id;
		alumno_materiaModel2.created_at = alumno_materia1.created_at;
		alumno_materiaModel2.updated_at = alumno_materia1.updated_at;
		
		alumno_materiaModel2.id_alumno= alumno_materia1.id_alumno;
		alumno_materiaModel2.id_materia= alumno_materia1.id_materia;
		
		return alumno_materiaModel2;
	}
	
	getBuilderFunctionObjectParametroSeleccionar(id:number):any {				
		let jalumno_materia1:any = {};
							
		jalumno_materia1 = {
			id : id
		};									
				
		return jalumno_materia1;
	}
	
	getBuilderFunctionObjectParametroBuscar(req:any):any {				
		let jalumno_materia1:any = {};
		
		jalumno_materia1 = {
			created_at : req.body.created_at, 
			updated_at : req.body.updated_at, 
			id_alumno : req.body.id_alumno, 
			id_materia : req.body.id_materia, 
		};								
				
		return jalumno_materia1;
	}
	
	/*FKs*/
	async getFks() {
		try {
			let pagination1 = new Pagination();
			pagination1.limit = Constantes.LIMIT_FK_MAX;
			pagination1.skip = 0;
			
			await this.alumnoLogic.getTodos(pagination1,{});			
			this.alumnosFK = this.alumnoLogic.alumnos;
				
			await this.materiaLogic.getTodos(pagination1,{});			
			this.materiasFK = this.materiaLogic.materias;
				
		} catch(e:any) {
			throw e;
		}
	}
}

export {AlumnoMateriaData};
