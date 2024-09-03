import {Injectable,Inject} from "@nestjs/common"

import {InjectRepository} from '@nestjs/typeorm';
import {Repository} from 'typeorm';

import {Constantes} from '../../../../base/util/constantes';
import {Pagination} from '../../../../base/application/logic/pagination';
import {Connexion} from '../../../../base/util/connexion_knex';
import {TipoAccionEnum} from '../../../../base/util/tipo_accion_enum';

import {Nota} from '../../domain/model/nota';

import {NotaDataI} from './nota.datai';

/*import {NotaReturnViewDto} from './dto/nota_return_view.dto';*/

/*FKs*/
/*import {NotaFKReturnViewDto} from './dto/nota_fk_return_view.dto';*/

import {Alumno} from '../../../../estructura/alumno/domain/model/alumno';
import {AlumnoLogic} from '../../../../estructura/alumno/application/logic/alumno.logic';

import {Materia} from '../../../../estructura/materia/domain/model/materia';
import {MateriaLogic} from '../../../../estructura/materia/application/logic/materia.logic';

import {Docente} from '../../../../estructura/docente/domain/model/docente';
import {DocenteLogic} from '../../../../estructura/docente/application/logic/docente.logic';

	

@Injectable()
class NotaData implements NotaDataI {				
	
	static TITULO:string = "Nota";    
	static MODULO:string = "proceso";
	static TABLA:string = "nota";
	static PATH_PAGINA:string = "proceso/nota_view";
	static PATH_PAGINA_FORM:string = "proceso/nota_form_view";
	
	result: any;
    nota1?:Nota = null;
    notas:Nota[] = [];			
	
	private nota_data1: Repository<Nota>;
	
	//nota_return_view_dto:NotaReturnViewDto;
	
	/*FKs*/
	//nota_fk_return_view_dto:NotaFKReturnViewDto;
	
	
	alumnosFK:Alumno[] = [];
	materiasFK:Materia[] = [];
	docentesFK:Docente[] = [];
	
	@Inject(AlumnoLogic)
	private readonly alumnoLogic:AlumnoLogic;	
	
	@Inject(MateriaLogic)
	private readonly materiaLogic:MateriaLogic;	
	
	@Inject(DocenteLogic)
	private readonly docenteLogic:DocenteLogic;	
	
	
	constructor(@InjectRepository(Nota) nota_data1: Repository<Nota>) {
		
		this.nota_data1 = nota_data1;
        //this.connexion1=new Connexion(); 		
		this.nota1 = null;
    	this.notas = new Array<Nota>();
		
		//this.nota_return_view_dto = new NotaReturnViewDto();
		
		/*FKs*/
		//this.nota_fk_return_view_dto = new NotaFKReturnViewDto();
		
		
		this.alumnosFK = new Array<Alumno>();
		this.materiasFK = new Array<Materia>();
		this.docentesFK = new Array<Docente>();
		
	}
	
	async getTodos(pagination1:Pagination,relations1:any): Promise<Nota[]> {  
        try	{			
            const params = {
				take: pagination1.limit,
				skip: pagination1.skip,
				relations: relations1
			};
			
			const [result,total] = await this.nota_data1.findAndCount(params);				
			
			this.notas = this.getEntitiesFromModels(result);
			
			return this.notas;
			
		} catch(ex:any) {
            throw ex;
        }
    }
	
	async getBuscar(builder_object_nota1:any,pagination1:Pagination,relations1:any): Promise<Nota[]> {  
        try	{			
			const params = {
				take: pagination1.limit,
				skip: pagination1.skip,
				relations: relations1
			};
			
            this.result = await this.nota_data1.find(params);
			
			this.notas = this.getEntitiesFromModels(this.result);
			
			return this.notas;
			
		} catch(ex:any) {
            throw ex;
        }
    }
	
	async getBuscarGeneral(builder_object_nota1:any,pagination1:Pagination,relations1:any): Promise<Nota[]> {  
        try	{			
			const params = {
				take: pagination1.limit,
				skip: pagination1.skip,
				relations: relations1
			};
			
            this.result = await this.nota_data1.find(params);
			
			this.notas = this.getEntitiesFromModels(this.result);	
			
			return this.notas;
			
		} catch(ex:any) {
            throw ex;
        }
    }
	
	async getBuscarUno(builder_object_nota1:any,relations1:any): Promise<Nota> {  
        try	{
			const params = {
				where: builder_object_nota1,
				
				relations: relations1
			};
			
            this.result = await this.nota_data1.find(params);
			
			this.nota1 = this.getEntityFromModel(this.result);
			
			return this.nota1;
			
		} catch(ex:any) {
            throw ex;
        }
    }
	
    async nuevo(nota1:Nota): Promise<any> {
        try	{			   
			
			let notaModel2 = this.getModelFromEntity(nota1);
			
			this.result = await this.nota_data1.save(notaModel2);
			
			return this.result;
			
		} catch(ex:any) {
            throw ex;
        }
    }
	
	async actualizar(nota1:Nota): Promise<any> {  
        try	{			     
			let notaModel2 = this.getModelFromEntity(nota1);
			
			this.result = await this.nota_data1.update(nota1.id,notaModel2);
			
			return this.result;
			
		} catch(ex:any) {
            throw ex;
        }
    }
	
	async eliminar(id:number): Promise<any> {  
        try	{			          
			this.result = await this.nota_data1.delete(id);
			
			return this.result;
			
		} catch(ex:any) {
            throw ex;
        }
    }	
	
	async nuevos(notas:Array<Nota>) {
        try	{		
			let notaModels2 = this.getModelsFromEntities(notas);
			
			this.result = await this.nota_data1.save(notaModels2);
		
		} catch(ex:any) {
            throw ex;
        }
    }
	
	async eliminars(ids:Array<number>) {  
        try	{			          
			
			if(ids.length > 0) {
				this.result = await this.nota_data1.delete(ids);
			}
			
		} catch(ex:any) {
            throw ex;
        }
    }
	
	async actualizars(updates_notas:Array<Nota>,updates_columnas:Array<string>) {  
        try	{			           
			
			let updates_notaModels2 = this.getModelsFromEntities(updates_notas);
			
			for(let notaModel2 of updates_notaModels2) {
				this.result = await this.nota_data1.update(notaModel2.id,notaModel2);
			}
			
		} catch(ex:any) {
            throw ex;
        }
    }
	
	getEntitiesFromModels(result:any): Nota[] {		
		let notas = new Array<Nota>();
		let nota1 = new Nota();
		
		for(let row of result) {
			nota1 = new Nota();
			nota1 = {...row};			
			notas.push(nota1);
		}
		
		return notas;
	}
	
	getEntityFromModel(result:any): Nota {		
		let nota1 = new Nota();
		
		for(let row of result) {
			nota1 = {...row};				
			break;
		}
		
		return nota1;
	}
	
	getModelsFromEntities(notas: Nota[]): Nota[] {
		let notaModels = new Array<Nota>();
		let notaModel2 = new Nota();
		
		for(let nota2 of notas) {
			notaModel2 = this.getModelFromEntity(nota2);
			
			notaModels.push(notaModel2);
		}
		
		return notaModels;
	}
	
	getModelFromEntity(nota1: Nota) : Nota {
		
		let notaModel2 = new Nota();
		
		notaModel2.id = nota1.id;
		notaModel2.created_at = nota1.created_at;
		notaModel2.updated_at = nota1.updated_at;
		
		notaModel2.id_alumno= nota1.id_alumno;
		notaModel2.id_materia= nota1.id_materia;
		notaModel2.id_docente= nota1.id_docente;
		notaModel2.nota_prueba= nota1.nota_prueba;
		notaModel2.nota_trabajo= nota1.nota_trabajo;
		notaModel2.nota_examen= nota1.nota_examen;
		notaModel2.nota_final= nota1.nota_final;
		
		return notaModel2;
	}
	
	getBuilderFunctionObjectParametroSeleccionar(id:number):any {				
		let jnota1:any = {};
							
		jnota1 = {
			id : id
		};									
				
		return jnota1;
	}
	
	getBuilderFunctionObjectParametroBuscar(req:any):any {				
		let jnota1:any = {};
		
		jnota1 = {
			created_at : req.body.created_at, 
			updated_at : req.body.updated_at, 
			id_alumno : req.body.id_alumno, 
			id_materia : req.body.id_materia, 
			id_docente : req.body.id_docente, 
			nota_prueba : req.body.nota_prueba, 
			nota_trabajo : req.body.nota_trabajo, 
			nota_examen : req.body.nota_examen, 
			nota_final : req.body.nota_final, 
		};								
				
		return jnota1;
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
				
			await this.docenteLogic.getTodos(pagination1,{});			
			this.docentesFK = this.docenteLogic.docentes;
				
		} catch(e:any) {
			throw e;
		}
	}
}

export {NotaData};
