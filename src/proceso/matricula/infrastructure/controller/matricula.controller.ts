import {Controller, Get, Post, Put, Delete, 
		Body, Param, Req, Res, Next, 
		HttpStatus, HttpCode, 
		ParseIntPipe,ParseArrayPipe,
		ClassSerializerInterceptor,UseInterceptors} from '@nestjs/common';

import express, {Request} from "express";

import {Constantes} from '../../../../base/util/constantes';
import {TipoAccionEnum} from '../../../../base/util/tipo_accion_enum';
import {GeneralEntityController} from '../../../../base/infrastructure/controller/general_entity_controller';
import {Pagination} from '../../../../base/application/logic/pagination';

import {Matricula} from '../../domain/model/matricula';

import {MatriculaLogic} from '../../application/logic/matricula.logic';
import {MatriculaLogicI} from '../../application/logic/matricula.logici';
import {MatriculaReturnView} from '../../infrastructure/util/return/matricula_return_view.return';

import {MatriculaCreateRequest} from '../../infrastructure/util/request/matricula_create.request';
import {MatriculaUpdateRequest} from '../../infrastructure/util/request/matricula_update.request';

import {MatriculaFKReturnView} from '../../infrastructure/util/return/matricula_fk_return_view.return';

@Controller('/api/colegio_relaciones/proceso/matricula_api')
class MatriculaController extends GeneralEntityController {

	pagination1:Pagination;
	relations1:any;
	matricula1:Matricula;
	matriculas : Array<Matricula>;
	matricula_return_view:MatriculaReturnView;
	result: any;
	
	/*FKs*/
	matricula_fk_return_view_dto:MatriculaFKReturnView;
	
	//private matricula_logici1: MatriculaLogicI;
		
	builder_object_matricula1:any;
	
	
	constructor(private matricula_logici1: MatriculaLogic) {
		super();
		
		this.pagination1 = new Pagination();
		this.matricula1 = new Matricula();
		this.matriculas = new Array<Matricula>();
		
			//this.matricula_logici1 = new MatriculaLogic();
		
		this.matricula_return_view = new MatriculaReturnView();
		
		/*FKs*/
		this.matricula_fk_return_view_dto = new MatriculaFKReturnView();
		
		
	}
	
	setReturnView(tipo_accion_enum1:TipoAccionEnum) {
		/*
		this.matriculas = this.matricula_logici1.matriculas;
		this.matricula1 = this.matricula_logici1.matricula1;				
		*/
		
		this.matricula_return_view.setReturnView(tipo_accion_enum1,this.matricula1,this.matriculas);		
	}
	
	//------------------------------ APIs ---------------------------------------
	
	@Post(Constantes.DEFAULT)
	@HttpCode(HttpStatus.OK)
	async getDefault(@Body(Constantes.PAGINATION) 
					 pagination1:Pagination) : Promise<MatriculaReturnView> {		
		try {
			
			this.relations1 = {
				/*----- FKs -----*/
				
					alumno:true									
			};
			
			this.matriculas = await this.matricula_logici1.getTodos(pagination1,this.relations1);
			
			this.setReturnView(TipoAccionEnum.BUSCAR_TODOS);
			
		} catch(e:any) {
			throw e;
		}
		
		return this.matricula_return_view;
	}
	
	@Post(Constantes.INDEX)
	@HttpCode(HttpStatus.OK)
	async getIndex(@Body(Constantes.PAGINATION) 
				   pagination1:Pagination) : Promise<MatriculaReturnView> {		
		try {
			
			this.relations1 = {
				/*----- FKs -----*/
				
					alumno:true									
			};
			
			this.matriculas = await this.matricula_logici1.getTodos(pagination1,this.relations1);
			
			this.setReturnView(TipoAccionEnum.BUSCAR_TODOS);
			
		} catch(e:any) {
			throw e;
		}
		
		return this.matricula_return_view;
	}
	
	@Post(Constantes.TODOS)
	@HttpCode(HttpStatus.OK)
	async getTodos(@Body(Constantes.PAGINATION) 
				   pagination1:Pagination) : Promise<MatriculaReturnView> {		
		try {
			
			this.relations1 = {
				/*----- FKs -----*/
				
					alumno:true									
			};
			
			this.matriculas = await this.matricula_logici1.getTodos(pagination1,this.relations1);
			
			this.setReturnView(TipoAccionEnum.BUSCAR_TODOS);
			
		} catch(e:any) {
			throw e;
		}
		
		return this.matricula_return_view;
	}
	
	@Post(Constantes.BUSCAR)
	@HttpCode(HttpStatus.OK)
	async getBuscar(@Body(Constantes.PAGINATION) 
					pagination1:Pagination,@Req() req:Request) : Promise<MatriculaReturnView> {		
		try {
			
			this.relations1 = {
				/*----- FKs -----*/
				
					alumno:true									
			};
			
			this.builder_object_matricula1 = this.matricula_logici1.getBuilderFunctionObjectParametroBuscar(req);			
			
			this.matriculas = await this.matricula_logici1.getBuscar(this.builder_object_matricula1,pagination1,this.relations1);
			
			this.setReturnView(TipoAccionEnum.BUSCAR);
			
		} catch(e:any) {
			throw e;
		}
		
		return this.matricula_return_view;
	}
	
	@Post(Constantes.SELECCIONAR)
	@HttpCode(HttpStatus.OK)
	async getSeleccionar(@Body(Constantes.ID,ParseIntPipe) 
						 id:number) : Promise<MatriculaReturnView> {		
		try {
			
			this.relations1 = {
				/*----- FKs -----*/
				
					alumno:true									
			};
			
			this.builder_object_matricula1=this.matricula_logici1.getBuilderFunctionObjectParametroSeleccionar(id);			
			
			this.matricula1 = await this.matricula_logici1.getBuscarUno(this.builder_object_matricula1,this.relations1);
			
			this.setReturnView(TipoAccionEnum.SELECCIONAR);
			
		} catch(e:any) {
			throw e;
		}
		
		return this.matricula_return_view;
	}
	
	@Post(Constantes.NUEVO)
	@HttpCode(HttpStatus.OK)
	async nuevo(@Body(Matricula.MATRICULA) 
				matricula_create_request1:MatriculaCreateRequest) : Promise<MatriculaReturnView> {		
		try {
			
			this.matricula1 = new Matricula();			
			
			MatriculaCreateRequest.setMatricula(matricula_create_request1,this.matricula1);
			
			this.result = await this.matricula_logici1.nuevo(this.matricula1);			
			
			this.setReturnView(TipoAccionEnum.NUEVO);
			
		} catch(e:any) {
			throw e;
		}
		
		return this.matricula_return_view;
	}

	@Put(Constantes.ACTUALIZAR)
	@HttpCode(HttpStatus.OK)
	async actualizar(@Body(Matricula.MATRICULA) 
					 matricula_update_request1:MatriculaUpdateRequest) : Promise<MatriculaReturnView> {	
		try {
			
			MatriculaUpdateRequest.setMatricula(matricula_update_request1,this.matricula1);
			
			this.result = await this.matricula_logici1.actualizar(this.matricula1);
			
			this.setReturnView(TipoAccionEnum.ACTUALIZAR);			
			
		} catch(e:any) {
			throw e;
		}
		
		return this.matricula_return_view;
	}
	
	@Delete(Constantes.ELIMINAR)
	@HttpCode(HttpStatus.OK)
	async eliminar(@Body(Constantes.ID,ParseIntPipe) 
				   id:number) : Promise<MatriculaReturnView> {	
		try {			
			
			this.result = await this.matricula_logici1.eliminar(id);
			
			this.setReturnView(TipoAccionEnum.ELIMINAR);			
			
		} catch(e:any) {
			throw e;
		}
		
		return this.matricula_return_view;
	}
	
	@Post(Constantes.NUEVOS)
	@HttpCode(HttpStatus.OK)
	async nuevos(@Body('news_matriculas',new ParseArrayPipe({ items: MatriculaCreateRequest })) 
				 matricula_create_requests: Array<MatriculaCreateRequest>) : Promise<MatriculaReturnView> {		
		try {
			
			this.matriculas = new Array<Matricula>();			
			
			MatriculaCreateRequest.setMatriculas(matricula_create_requests,this.matriculas);
			
			await this.matricula_logici1.nuevos(this.matriculas);
			
			this.setReturnView(TipoAccionEnum.NUEVO);
			
		} catch(e:any) {
			throw e;
		}
		
		return this.matricula_return_view;
	}
	
	@Delete(Constantes.ELIMINARS)
	@HttpCode(HttpStatus.OK)
	async eliminars(@Body('ids_deletes_matriculas',new ParseArrayPipe({ items: Number })) 
					ids: Array<number>) : Promise<MatriculaReturnView> {	
		try {			
			
			await this.matricula_logici1.eliminars(ids);
			
			this.setReturnView(TipoAccionEnum.ELIMINAR);
			
		} catch(e:any) {
			throw e;
		}
		
		return this.matricula_return_view;
	}
	
	@Put(Constantes.ACTUALIZARS)
	@HttpCode(HttpStatus.OK)
	async actualizars(@Body('updates_matriculas',new ParseArrayPipe({ items: MatriculaUpdateRequest })) 
					  matricula_update_requests: Array<MatriculaUpdateRequest>,
					  @Body('updates_columnas',new ParseArrayPipe({ items: String })) 
					  updates_columnas:Array<string>) : Promise<MatriculaReturnView> {	
		try {
			
			this.matriculas = new Array<Matricula>();
			
			MatriculaUpdateRequest.setMatriculas(matricula_update_requests,this.matriculas);
			
			await this.matricula_logici1.actualizars(this.matriculas,updates_columnas);
			
			this.setReturnView(TipoAccionEnum.ACTUALIZAR);
		
		} catch(e:any) {
			throw e;
		}
		
		return this.matricula_return_view;
	}
	
	@Post(Constantes.GUARDAR_CAMBIOS)
	@HttpCode(HttpStatus.OK)
	async guardarCambios(@Body('news_matriculas') 
						 news_matriculas: Array<Matricula>,
						 @Body('ids_deletes_matriculas') 
						 ids_deletes_matriculas: Array<number>,
						 @Body('updates_matriculas') 
						 updates_matriculas: Array<Matricula>,
						 @Body('updates_columnas') 
						 updates_columnas:Array<string>) : Promise<MatriculaReturnView> {	
		try {
			
			/*--- Inserts ---*/
			await this.matricula_logici1.nuevos(news_matriculas);
			
			/*--- Deletes ---*/
			await this.matricula_logici1.eliminars(ids_deletes_matriculas);
			
			/*--- Updates ---*/
			await this.matricula_logici1.actualizars(updates_matriculas,updates_columnas);
						
			this.setReturnView(TipoAccionEnum.GUARDAR_CAMBIOS);			
		
		} catch(e:any) {
			throw e;
		}
		
		return this.matricula_return_view;
	}
	
	/*FKs*/
	@Post(Constantes.GET_FKS)
	@HttpCode(HttpStatus.OK)
	async getFks() : Promise<MatriculaFKReturnView> {
		try {
			
			await this.matricula_logici1.getFks();				
			
			this.matricula_fk_return_view_dto.alumnosFK = this.matricula_logici1.alumnosFK;
		
			return this.matricula_fk_return_view_dto;
			
		} catch(e:any) {
			throw e;
		}		
	}
	
	
	@Post(Constantes.TODOS_ENTITIES_DTO)
	@HttpCode(HttpStatus.OK)
	@UseInterceptors(ClassSerializerInterceptor)
	async getTodosEntitiesDto(@Body(Constantes.PAGINATION) 
				   pagination1:Pagination) : Promise<Array<Matricula>> {
		
		let matriculas = new Array<Matricula>();
		
		try {
			
			this.relations1 = {
				/*----- FKs -----*/
				
					alumno:true									
			};
			
			this.matriculas = await this.matricula_logici1.getTodos(pagination1,this.relations1);
						
		} catch(e:any) {
			throw e;
		}
		
		return matriculas;
	}
}

export {MatriculaController};
