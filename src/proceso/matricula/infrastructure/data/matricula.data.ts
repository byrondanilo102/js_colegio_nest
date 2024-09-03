import {Injectable,Inject} from "@nestjs/common"

import {InjectRepository} from '@nestjs/typeorm';
import {Repository} from 'typeorm';

import {Constantes} from '../../../../base/util/constantes';
import {Pagination} from '../../../../base/application/logic/pagination';
import {Connexion} from '../../../../base/util/connexion_knex';
import {TipoAccionEnum} from '../../../../base/util/tipo_accion_enum';

import {Matricula} from '../../domain/model/matricula';

import {MatriculaDataI} from './matricula.datai';

/*import {MatriculaReturnViewDto} from './dto/matricula_return_view.dto';*/

/*FKs*/
/*import {MatriculaFKReturnViewDto} from './dto/matricula_fk_return_view.dto';*/

import {Alumno} from '../../../../estructura/alumno/domain/model/alumno';
import {AlumnoLogic} from '../../../../estructura/alumno/application/logic/alumno.logic';

	

@Injectable()
class MatriculaData implements MatriculaDataI {				
	
	static TITULO:string = "Matricula";    
	static MODULO:string = "proceso";
	static TABLA:string = "matricula";
	static PATH_PAGINA:string = "proceso/matricula_view";
	static PATH_PAGINA_FORM:string = "proceso/matricula_form_view";
	
	result: any;
    matricula1?:Matricula = null;
    matriculas:Matricula[] = [];			
	
	private matricula_data1: Repository<Matricula>;
	
	//matricula_return_view_dto:MatriculaReturnViewDto;
	
	/*FKs*/
	//matricula_fk_return_view_dto:MatriculaFKReturnViewDto;
	
	
	alumnosFK:Alumno[] = [];
	
	@Inject(AlumnoLogic)
	private readonly alumnoLogic:AlumnoLogic;	
	
	
	constructor(@InjectRepository(Matricula) matricula_data1: Repository<Matricula>) {
		
		this.matricula_data1 = matricula_data1;
        //this.connexion1=new Connexion(); 		
		this.matricula1 = null;
    	this.matriculas = new Array<Matricula>();
		
		//this.matricula_return_view_dto = new MatriculaReturnViewDto();
		
		/*FKs*/
		//this.matricula_fk_return_view_dto = new MatriculaFKReturnViewDto();
		
		
		this.alumnosFK = new Array<Alumno>();
		
	}
	
	async getTodos(pagination1:Pagination,relations1:any): Promise<Matricula[]> {  
        try	{			
            const params = {
				take: pagination1.limit,
				skip: pagination1.skip,
				relations: relations1
			};
			
			const [result,total] = await this.matricula_data1.findAndCount(params);				
			
			this.matriculas = this.getEntitiesFromModels(result);
			
			return this.matriculas;
			
		} catch(ex:any) {
            throw ex;
        }
    }
	
	async getBuscar(builder_object_matricula1:any,pagination1:Pagination,relations1:any): Promise<Matricula[]> {  
        try	{			
			const params = {
				take: pagination1.limit,
				skip: pagination1.skip,
				relations: relations1
			};
			
            this.result = await this.matricula_data1.find(params);
			
			this.matriculas = this.getEntitiesFromModels(this.result);
			
			return this.matriculas;
			
		} catch(ex:any) {
            throw ex;
        }
    }
	
	async getBuscarGeneral(builder_object_matricula1:any,pagination1:Pagination,relations1:any): Promise<Matricula[]> {  
        try	{			
			const params = {
				take: pagination1.limit,
				skip: pagination1.skip,
				relations: relations1
			};
			
            this.result = await this.matricula_data1.find(params);
			
			this.matriculas = this.getEntitiesFromModels(this.result);	
			
			return this.matriculas;
			
		} catch(ex:any) {
            throw ex;
        }
    }
	
	async getBuscarUno(builder_object_matricula1:any,relations1:any): Promise<Matricula> {  
        try	{
			const params = {
				where: builder_object_matricula1,
				
				relations: relations1
			};
			
            this.result = await this.matricula_data1.find(params);
			
			this.matricula1 = this.getEntityFromModel(this.result);
			
			return this.matricula1;
			
		} catch(ex:any) {
            throw ex;
        }
    }
	
    async nuevo(matricula1:Matricula): Promise<any> {
        try	{			   
			
			let matriculaModel2 = this.getModelFromEntity(matricula1);
			
			this.result = await this.matricula_data1.save(matriculaModel2);
			
			return this.result;
			
		} catch(ex:any) {
            throw ex;
        }
    }
	
	async actualizar(matricula1:Matricula): Promise<any> {  
        try	{			     
			let matriculaModel2 = this.getModelFromEntity(matricula1);
			
			this.result = await this.matricula_data1.update(matricula1.id,matriculaModel2);
			
			return this.result;
			
		} catch(ex:any) {
            throw ex;
        }
    }
	
	async eliminar(id:number): Promise<any> {  
        try	{			          
			this.result = await this.matricula_data1.delete(id);
			
			return this.result;
			
		} catch(ex:any) {
            throw ex;
        }
    }	
	
	async nuevos(matriculas:Array<Matricula>) {
        try	{		
			let matriculaModels2 = this.getModelsFromEntities(matriculas);
			
			this.result = await this.matricula_data1.save(matriculaModels2);
		
		} catch(ex:any) {
            throw ex;
        }
    }
	
	async eliminars(ids:Array<number>) {  
        try	{			          
			
			if(ids.length > 0) {
				this.result = await this.matricula_data1.delete(ids);
			}
			
		} catch(ex:any) {
            throw ex;
        }
    }
	
	async actualizars(updates_matriculas:Array<Matricula>,updates_columnas:Array<string>) {  
        try	{			           
			
			let updates_matriculaModels2 = this.getModelsFromEntities(updates_matriculas);
			
			for(let matriculaModel2 of updates_matriculaModels2) {
				this.result = await this.matricula_data1.update(matriculaModel2.id,matriculaModel2);
			}
			
		} catch(ex:any) {
            throw ex;
        }
    }
	
	getEntitiesFromModels(result:any): Matricula[] {		
		let matriculas = new Array<Matricula>();
		let matricula1 = new Matricula();
		
		for(let row of result) {
			matricula1 = new Matricula();
			matricula1 = {...row};			
			matriculas.push(matricula1);
		}
		
		return matriculas;
	}
	
	getEntityFromModel(result:any): Matricula {		
		let matricula1 = new Matricula();
		
		for(let row of result) {
			matricula1 = {...row};				
			break;
		}
		
		return matricula1;
	}
	
	getModelsFromEntities(matriculas: Matricula[]): Matricula[] {
		let matriculaModels = new Array<Matricula>();
		let matriculaModel2 = new Matricula();
		
		for(let matricula2 of matriculas) {
			matriculaModel2 = this.getModelFromEntity(matricula2);
			
			matriculaModels.push(matriculaModel2);
		}
		
		return matriculaModels;
	}
	
	getModelFromEntity(matricula1: Matricula) : Matricula {
		
		let matriculaModel2 = new Matricula();
		
		matriculaModel2.id = matricula1.id;
		matriculaModel2.created_at = matricula1.created_at;
		matriculaModel2.updated_at = matricula1.updated_at;
		
		matriculaModel2.anio= matricula1.anio;
		matriculaModel2.costo= matricula1.costo;
		matriculaModel2.fecha= matricula1.fecha;
		matriculaModel2.pagado= matricula1.pagado;
		
		return matriculaModel2;
	}
	
	getBuilderFunctionObjectParametroSeleccionar(id:number):any {				
		let jmatricula1:any = {};
							
		jmatricula1 = {
			id : id
		};									
				
		return jmatricula1;
	}
	
	getBuilderFunctionObjectParametroBuscar(req:any):any {				
		let jmatricula1:any = {};
		
		jmatricula1 = {
			created_at : req.body.created_at, 
			updated_at : req.body.updated_at, 
			anio : req.body.anio, 
			costo : req.body.costo, 
			fecha : req.body.fecha, 
			pagado : req.body.pagado, 
		};								
				
		return jmatricula1;
	}
	
	/*FKs*/
	async getFks() {
		try {
			let pagination1 = new Pagination();
			pagination1.limit = Constantes.LIMIT_FK_MAX;
			pagination1.skip = 0;
			
			await this.alumnoLogic.getTodos(pagination1,{});			
			this.alumnosFK = this.alumnoLogic.alumnos;
				
		} catch(e:any) {
			throw e;
		}
	}
}

export {MatriculaData};
