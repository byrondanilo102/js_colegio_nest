import {Injectable,Inject} from "@nestjs/common"

import {InjectRepository} from '@nestjs/typeorm';
import {Repository} from 'typeorm';

import {Constantes} from '../../../../base/util/constantes';
import {Pagination} from '../../../../base/application/logic/pagination';
import {Connexion} from '../../../../base/util/connexion_knex';
import {TipoAccionEnum} from '../../../../base/util/tipo_accion_enum';

import {DocenteMateria} from '../../domain/model/docente_materia';

import {DocenteMateriaDataI} from './docente_materia.datai';

/*import {DocenteMateriaReturnViewDto} from './dto/docente_materia_return_view.dto';*/

/*FKs*/
/*import {DocenteMateriaFKReturnViewDto} from './dto/docente_materia_fk_return_view.dto';*/

import {Docente} from '../../../../estructura/docente/domain/model/docente';
import {DocenteLogic} from '../../../../estructura/docente/application/logic/docente.logic';

import {Materia} from '../../../../estructura/materia/domain/model/materia';
import {MateriaLogic} from '../../../../estructura/materia/application/logic/materia.logic';

	

@Injectable()
class DocenteMateriaData implements DocenteMateriaDataI {				
	
	static TITULO:string = "Docente Materia";    
	static MODULO:string = "estructura";
	static TABLA:string = "docente_materia";
	static PATH_PAGINA:string = "estructura/docente_materia_view";
	static PATH_PAGINA_FORM:string = "estructura/docente_materia_form_view";
	
	result: any;
    docente_materia1?:DocenteMateria = null;
    docente_materias:DocenteMateria[] = [];			
	
	private docente_materia_data1: Repository<DocenteMateria>;
	
	//docente_materia_return_view_dto:DocenteMateriaReturnViewDto;
	
	/*FKs*/
	//docente_materia_fk_return_view_dto:DocenteMateriaFKReturnViewDto;
	
	
	docentesFK:Docente[] = [];
	materiasFK:Materia[] = [];
	
	@Inject(DocenteLogic)
	private readonly docenteLogic:DocenteLogic;	
	
	@Inject(MateriaLogic)
	private readonly materiaLogic:MateriaLogic;	
	
	
	constructor(@InjectRepository(DocenteMateria) docente_materia_data1: Repository<DocenteMateria>) {
		
		this.docente_materia_data1 = docente_materia_data1;
        //this.connexion1=new Connexion(); 		
		this.docente_materia1 = null;
    	this.docente_materias = new Array<DocenteMateria>();
		
		//this.docente_materia_return_view_dto = new DocenteMateriaReturnViewDto();
		
		/*FKs*/
		//this.docente_materia_fk_return_view_dto = new DocenteMateriaFKReturnViewDto();
		
		
		this.docentesFK = new Array<Docente>();
		this.materiasFK = new Array<Materia>();
		
	}
	
	async getTodos(pagination1:Pagination,relations1:any): Promise<DocenteMateria[]> {  
        try	{			
            const params = {
				take: pagination1.limit,
				skip: pagination1.skip,
				relations: relations1
			};
			
			const [result,total] = await this.docente_materia_data1.findAndCount(params);				
			
			this.docente_materias = this.getEntitiesFromModels(result);
			
			return this.docente_materias;
			
		} catch(ex:any) {
            throw ex;
        }
    }
	
	async getBuscar(builder_object_docente_materia1:any,pagination1:Pagination,relations1:any): Promise<DocenteMateria[]> {  
        try	{			
			const params = {
				take: pagination1.limit,
				skip: pagination1.skip,
				relations: relations1
			};
			
            this.result = await this.docente_materia_data1.find(params);
			
			this.docente_materias = this.getEntitiesFromModels(this.result);
			
			return this.docente_materias;
			
		} catch(ex:any) {
            throw ex;
        }
    }
	
	async getBuscarGeneral(builder_object_docente_materia1:any,pagination1:Pagination,relations1:any): Promise<DocenteMateria[]> {  
        try	{			
			const params = {
				take: pagination1.limit,
				skip: pagination1.skip,
				relations: relations1
			};
			
            this.result = await this.docente_materia_data1.find(params);
			
			this.docente_materias = this.getEntitiesFromModels(this.result);	
			
			return this.docente_materias;
			
		} catch(ex:any) {
            throw ex;
        }
    }
	
	async getBuscarUno(builder_object_docente_materia1:any,relations1:any): Promise<DocenteMateria> {  
        try	{
			const params = {
				where: builder_object_docente_materia1,
				
				relations: relations1
			};
			
            this.result = await this.docente_materia_data1.find(params);
			
			this.docente_materia1 = this.getEntityFromModel(this.result);
			
			return this.docente_materia1;
			
		} catch(ex:any) {
            throw ex;
        }
    }
	
    async nuevo(docente_materia1:DocenteMateria): Promise<any> {
        try	{			   
			
			let docente_materiaModel2 = this.getModelFromEntity(docente_materia1);
			
			this.result = await this.docente_materia_data1.save(docente_materiaModel2);
			
			return this.result;
			
		} catch(ex:any) {
            throw ex;
        }
    }
	
	async actualizar(docente_materia1:DocenteMateria): Promise<any> {  
        try	{			     
			let docente_materiaModel2 = this.getModelFromEntity(docente_materia1);
			
			this.result = await this.docente_materia_data1.update(docente_materia1.id,docente_materiaModel2);
			
			return this.result;
			
		} catch(ex:any) {
            throw ex;
        }
    }
	
	async eliminar(id:number): Promise<any> {  
        try	{			          
			this.result = await this.docente_materia_data1.delete(id);
			
			return this.result;
			
		} catch(ex:any) {
            throw ex;
        }
    }	
	
	async nuevos(docente_materias:Array<DocenteMateria>) {
        try	{		
			let docente_materiaModels2 = this.getModelsFromEntities(docente_materias);
			
			this.result = await this.docente_materia_data1.save(docente_materiaModels2);
		
		} catch(ex:any) {
            throw ex;
        }
    }
	
	async eliminars(ids:Array<number>) {  
        try	{			          
			
			if(ids.length > 0) {
				this.result = await this.docente_materia_data1.delete(ids);
			}
			
		} catch(ex:any) {
            throw ex;
        }
    }
	
	async actualizars(updates_docente_materias:Array<DocenteMateria>,updates_columnas:Array<string>) {  
        try	{			           
			
			let updates_docente_materiaModels2 = this.getModelsFromEntities(updates_docente_materias);
			
			for(let docente_materiaModel2 of updates_docente_materiaModels2) {
				this.result = await this.docente_materia_data1.update(docente_materiaModel2.id,docente_materiaModel2);
			}
			
		} catch(ex:any) {
            throw ex;
        }
    }
	
	getEntitiesFromModels(result:any): DocenteMateria[] {		
		let docente_materias = new Array<DocenteMateria>();
		let docente_materia1 = new DocenteMateria();
		
		for(let row of result) {
			docente_materia1 = new DocenteMateria();
			docente_materia1 = {...row};			
			docente_materias.push(docente_materia1);
		}
		
		return docente_materias;
	}
	
	getEntityFromModel(result:any): DocenteMateria {		
		let docente_materia1 = new DocenteMateria();
		
		for(let row of result) {
			docente_materia1 = {...row};				
			break;
		}
		
		return docente_materia1;
	}
	
	getModelsFromEntities(docente_materias: DocenteMateria[]): DocenteMateria[] {
		let docente_materiaModels = new Array<DocenteMateria>();
		let docente_materiaModel2 = new DocenteMateria();
		
		for(let docente_materia2 of docente_materias) {
			docente_materiaModel2 = this.getModelFromEntity(docente_materia2);
			
			docente_materiaModels.push(docente_materiaModel2);
		}
		
		return docente_materiaModels;
	}
	
	getModelFromEntity(docente_materia1: DocenteMateria) : DocenteMateria {
		
		let docente_materiaModel2 = new DocenteMateria();
		
		docente_materiaModel2.id = docente_materia1.id;
		docente_materiaModel2.created_at = docente_materia1.created_at;
		docente_materiaModel2.updated_at = docente_materia1.updated_at;
		
		docente_materiaModel2.id_docente= docente_materia1.id_docente;
		docente_materiaModel2.id_materia= docente_materia1.id_materia;
		
		return docente_materiaModel2;
	}
	
	getBuilderFunctionObjectParametroSeleccionar(id:number):any {				
		let jdocente_materia1:any = {};
							
		jdocente_materia1 = {
			id : id
		};									
				
		return jdocente_materia1;
	}
	
	getBuilderFunctionObjectParametroBuscar(req:any):any {				
		let jdocente_materia1:any = {};
		
		jdocente_materia1 = {
			created_at : req.body.created_at, 
			updated_at : req.body.updated_at, 
			id_docente : req.body.id_docente, 
			id_materia : req.body.id_materia, 
		};								
				
		return jdocente_materia1;
	}
	
	/*FKs*/
	async getFks() {
		try {
			let pagination1 = new Pagination();
			pagination1.limit = Constantes.LIMIT_FK_MAX;
			pagination1.skip = 0;
			
			await this.docenteLogic.getTodos(pagination1,{});			
			this.docentesFK = this.docenteLogic.docentes;
				
			await this.materiaLogic.getTodos(pagination1,{});			
			this.materiasFK = this.materiaLogic.materias;
				
		} catch(e:any) {
			throw e;
		}
	}
}

export {DocenteMateriaData};
