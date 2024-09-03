import {Injectable,Inject} from "@nestjs/common"

import {InjectRepository} from '@nestjs/typeorm';
import {Repository} from 'typeorm';

import {Constantes} from '../../../../base/util/constantes';
import {GeneralEntityLogic} from '../../../../base/application/logic/general_entity_logic';
import {Pagination} from '../../../../base/application/logic/pagination';
import {Connexion} from '../../../../base/util/connexion_knex';
import {TipoAccionEnum} from '../../../../base/util/tipo_accion_enum';

import {Nota} from '../../domain/model/nota';

import {NotaData} from '../../infrastructure/data/nota.data';
import {NotaDataI} from '../../infrastructure/data/nota.datai';

import {NotaLogicI} from './nota.logici';

//import {NotaReturnViewDto} from './dto/nota_return_view.dto';

/*FKs*/
//import {NotaFKReturnViewDto} from './dto/nota_fk_return_view.dto';

import {Alumno} from '../../../../estructura/alumno/domain/model/alumno';
import {AlumnoLogic} from '../../../../estructura/alumno/application/logic/alumno.logic';

import {Materia} from '../../../../estructura/materia/domain/model/materia';
import {MateriaLogic} from '../../../../estructura/materia/application/logic/materia.logic';

import {Docente} from '../../../../estructura/docente/domain/model/docente';
import {DocenteLogic} from '../../../../estructura/docente/application/logic/docente.logic';

	

@Injectable()
class NotaLogic extends GeneralEntityLogic implements NotaLogicI {
	
	result: any;
	total: any;
    nota1?:Nota = null;
    notas:Nota[] = [];			
	
	/*private nota_datai1: NotaDataI;*/
	
	
	
	alumnosFK:Alumno[] = [];
	materiasFK:Materia[] = [];
	docentesFK:Docente[] = [];
	
	@Inject(AlumnoLogic)
	private readonly alumnoLogic:AlumnoLogic;	
	
	@Inject(MateriaLogic)
	private readonly materiaLogic:MateriaLogic;	
	
	@Inject(DocenteLogic)
	private readonly docenteLogic:DocenteLogic;	
	
	
	constructor(private nota_datai1: NotaData) {
		super();
		this.nota_datai1 = nota_datai1;
        
		this.nota1 = null;
    	this.notas = new Array<Nota>();
		
		/*FKs*/
		
		this.alumnosFK = new Array<Alumno>();
		this.materiasFK = new Array<Materia>();
		this.docentesFK = new Array<Docente>();
		
	}
	
	async getTodos(pagination1:Pagination,relations1:any): Promise<Nota[]> {
        try	{			           			
			this.notas = await this.nota_datai1.getTodos(pagination1,relations1);			
			return this.notas;
			
		} catch(ex:any) {
            throw ex;
        }
    }
	
	async getBuscar(builder_object_nota1:any,pagination1:Pagination,relations1:any): Promise<Nota[]> {
        try	{									
            this.notas = await this.nota_datai1.getBuscar(builder_object_nota1,pagination1,relations1);			
			return this.notas;	
			
		} catch(ex:any) {
            throw ex;
        }
    }
	
	async getBuscarGeneral(builder_object_nota1:any,pagination1:Pagination,relations1:any): Promise<Nota[]> {
        try	{						
			
            this.notas = await this.nota_datai1.getBuscarGeneral(builder_object_nota1,pagination1,relations1);			
			return this.notas;	
			
		} catch(ex:any) {
            throw ex;
        }
    }
	
	async getBuscarUno(builder_object_nota1:any,relations1:any): Promise<Nota> {
        try	{			
            this.nota1 = await this.nota_datai1.getBuscarUno(builder_object_nota1,relations1);			
			return this.nota1;
			
		} catch(ex:any) {
            throw ex;
        }
    }
	
    async nuevo(nota1:Nota): Promise<any> {
        try	{			           
			this.result = await this.nota_datai1.nuevo(nota1);
			return this.result;
			
		} catch(ex:any) {
            throw ex;
        }
    }
	
	async actualizar(nota1:Nota): Promise<any> {
        try	{			           
			this.result = await this.nota_datai1.actualizar(nota1);
			return this.result;
			
		} catch(ex:any) {
            throw ex;
        }
    }
	
	async eliminar(id:number): Promise<any> {  
        try	{			          
			this.result = await this.nota_datai1.eliminar(id);
			return this.result;
			
		} catch(ex:any) {
            throw ex;
        }
    }	
	
	async nuevos(notas:Array<Nota>) {
        try	{			           
			this.result = await this.nota_datai1.nuevos(notas);
		
		} catch(ex:any) {
            throw ex;
        }
    }
	
	async eliminars(ids:Array<number>) {  
        try	{			          
			
			if(ids.length > 0) {
				this.result = await this.nota_datai1.eliminars(ids);
			}
			
		} catch(ex:any) {
            throw ex;
        }
    }
	
	async actualizars(updates_notas:Array<Nota>,updates_columnas:Array<string>) {  
        try	{			           						
			this.result = await this.nota_datai1.actualizars(updates_notas,updates_columnas);			
			
		} catch(ex:any) {
            throw ex;
        }
    }	
	
	getBuilderFunctionObjectParametroSeleccionar(id:number):any {				
		let jnota1:any = this.nota_datai1.getBuilderFunctionObjectParametroSeleccionar(id);
		return jnota1;		
	}
	
	getBuilderFunctionObjectParametroBuscar(req:any):any {				
		let jnota1:any = this.nota_datai1.getBuilderFunctionObjectParametroBuscar(req);
		return jnota1;
	}
	
	/*FKs*/
	async getFks() {
		try {
			await this.nota_datai1.getFks();
			
			this.alumnosFK = this.nota_datai1.alumnosFK;				
			this.materiasFK = this.nota_datai1.materiasFK;				
			this.docentesFK = this.nota_datai1.docentesFK;				
			
		} catch(e:any) {
			throw e;
		}
	}
}

export {NotaLogic};
