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

import {AlumnoMateria} from '../../domain/model/alumno_materia';

import {AlumnoMateriaLogic} from '../../application/logic/alumno_materia.logic';
import {AlumnoMateriaLogicI} from '../../application/logic/alumno_materia.logici';
import {AlumnoMateriaReturnView} from '../../infrastructure/util/return/alumno_materia_return_view.return';

import {AlumnoMateriaCreateRequest} from '../../infrastructure/util/request/alumno_materia_create.request';
import {AlumnoMateriaUpdateRequest} from '../../infrastructure/util/request/alumno_materia_update.request';

import {AlumnoMateriaFKReturnView} from '../../infrastructure/util/return/alumno_materia_fk_return_view.return';

@Controller('/api/colegio_relaciones/estructura/alumno_materia_api')
class AlumnoMateriaController extends GeneralEntityController {

	pagination1:Pagination;
	relations1:any;
	alumno_materia1:AlumnoMateria;
	alumno_materias : Array<AlumnoMateria>;
	alumno_materia_return_view:AlumnoMateriaReturnView;
	result: any;
	
	/*FKs*/
	alumno_materia_fk_return_view_dto:AlumnoMateriaFKReturnView;
	
	//private alumno_materia_logici1: AlumnoMateriaLogicI;
		
	builder_object_alumno_materia1:any;
	
	
	constructor(private alumno_materia_logici1: AlumnoMateriaLogic) {
		super();
		
		this.pagination1 = new Pagination();
		this.alumno_materia1 = new AlumnoMateria();
		this.alumno_materias = new Array<AlumnoMateria>();
		
			//this.alumno_materia_logici1 = new AlumnoMateriaLogic();
		
		this.alumno_materia_return_view = new AlumnoMateriaReturnView();
		
		/*FKs*/
		this.alumno_materia_fk_return_view_dto = new AlumnoMateriaFKReturnView();
		
		
	}
	
	setReturnView(tipo_accion_enum1:TipoAccionEnum) {
		/*
		this.alumno_materias = this.alumno_materia_logici1.alumno_materias;
		this.alumno_materia1 = this.alumno_materia_logici1.alumno_materia1;				
		*/
		
		this.alumno_materia_return_view.setReturnView(tipo_accion_enum1,this.alumno_materia1,this.alumno_materias);		
	}
	
	//------------------------------ APIs ---------------------------------------
	
	@Post(Constantes.DEFAULT)
	@HttpCode(HttpStatus.OK)
	async getDefault(@Body(Constantes.PAGINATION) 
					 pagination1:Pagination) : Promise<AlumnoMateriaReturnView> {		
		try {
			
			this.relations1 = {
				/*----- FKs -----*/
				
					alumno:true	
					,materia:true									
			};
			
			this.alumno_materias = await this.alumno_materia_logici1.getTodos(pagination1,this.relations1);
			
			this.setReturnView(TipoAccionEnum.BUSCAR_TODOS);
			
		} catch(e:any) {
			throw e;
		}
		
		return this.alumno_materia_return_view;
	}
	
	@Post(Constantes.INDEX)
	@HttpCode(HttpStatus.OK)
	async getIndex(@Body(Constantes.PAGINATION) 
				   pagination1:Pagination) : Promise<AlumnoMateriaReturnView> {		
		try {
			
			this.relations1 = {
				/*----- FKs -----*/
				
					alumno:true	
					,materia:true									
			};
			
			this.alumno_materias = await this.alumno_materia_logici1.getTodos(pagination1,this.relations1);
			
			this.setReturnView(TipoAccionEnum.BUSCAR_TODOS);
			
		} catch(e:any) {
			throw e;
		}
		
		return this.alumno_materia_return_view;
	}
	
	@Post(Constantes.TODOS)
	@HttpCode(HttpStatus.OK)
	async getTodos(@Body(Constantes.PAGINATION) 
				   pagination1:Pagination) : Promise<AlumnoMateriaReturnView> {		
		try {
			
			this.relations1 = {
				/*----- FKs -----*/
				
					alumno:true	
					,materia:true									
			};
			
			this.alumno_materias = await this.alumno_materia_logici1.getTodos(pagination1,this.relations1);
			
			this.setReturnView(TipoAccionEnum.BUSCAR_TODOS);
			
		} catch(e:any) {
			throw e;
		}
		
		return this.alumno_materia_return_view;
	}
	
	@Post(Constantes.BUSCAR)
	@HttpCode(HttpStatus.OK)
	async getBuscar(@Body(Constantes.PAGINATION) 
					pagination1:Pagination,@Req() req:Request) : Promise<AlumnoMateriaReturnView> {		
		try {
			
			this.relations1 = {
				/*----- FKs -----*/
				
					alumno:true	
					,materia:true									
			};
			
			this.builder_object_alumno_materia1 = this.alumno_materia_logici1.getBuilderFunctionObjectParametroBuscar(req);			
			
			this.alumno_materias = await this.alumno_materia_logici1.getBuscar(this.builder_object_alumno_materia1,pagination1,this.relations1);
			
			this.setReturnView(TipoAccionEnum.BUSCAR);
			
		} catch(e:any) {
			throw e;
		}
		
		return this.alumno_materia_return_view;
	}
	
	@Post(Constantes.SELECCIONAR)
	@HttpCode(HttpStatus.OK)
	async getSeleccionar(@Body(Constantes.ID,ParseIntPipe) 
						 id:number) : Promise<AlumnoMateriaReturnView> {		
		try {
			
			this.relations1 = {
				/*----- FKs -----*/
				
					alumno:true	
					,materia:true									
			};
			
			this.builder_object_alumno_materia1=this.alumno_materia_logici1.getBuilderFunctionObjectParametroSeleccionar(id);			
			
			this.alumno_materia1 = await this.alumno_materia_logici1.getBuscarUno(this.builder_object_alumno_materia1,this.relations1);
			
			this.setReturnView(TipoAccionEnum.SELECCIONAR);
			
		} catch(e:any) {
			throw e;
		}
		
		return this.alumno_materia_return_view;
	}
	
	@Post(Constantes.NUEVO)
	@HttpCode(HttpStatus.OK)
	async nuevo(@Body(AlumnoMateria.ALUMNO_MATERIA) 
				alumno_materia_create_request1:AlumnoMateriaCreateRequest) : Promise<AlumnoMateriaReturnView> {		
		try {
			
			this.alumno_materia1 = new AlumnoMateria();			
			
			AlumnoMateriaCreateRequest.setAlumnoMateria(alumno_materia_create_request1,this.alumno_materia1);
			
			this.result = await this.alumno_materia_logici1.nuevo(this.alumno_materia1);			
			
			this.setReturnView(TipoAccionEnum.NUEVO);
			
		} catch(e:any) {
			throw e;
		}
		
		return this.alumno_materia_return_view;
	}

	@Put(Constantes.ACTUALIZAR)
	@HttpCode(HttpStatus.OK)
	async actualizar(@Body(AlumnoMateria.ALUMNO_MATERIA) 
					 alumno_materia_update_request1:AlumnoMateriaUpdateRequest) : Promise<AlumnoMateriaReturnView> {	
		try {
			
			AlumnoMateriaUpdateRequest.setAlumnoMateria(alumno_materia_update_request1,this.alumno_materia1);
			
			this.result = await this.alumno_materia_logici1.actualizar(this.alumno_materia1);
			
			this.setReturnView(TipoAccionEnum.ACTUALIZAR);			
			
		} catch(e:any) {
			throw e;
		}
		
		return this.alumno_materia_return_view;
	}
	
	@Delete(Constantes.ELIMINAR)
	@HttpCode(HttpStatus.OK)
	async eliminar(@Body(Constantes.ID,ParseIntPipe) 
				   id:number) : Promise<AlumnoMateriaReturnView> {	
		try {			
			
			this.result = await this.alumno_materia_logici1.eliminar(id);
			
			this.setReturnView(TipoAccionEnum.ELIMINAR);			
			
		} catch(e:any) {
			throw e;
		}
		
		return this.alumno_materia_return_view;
	}
	
	@Post(Constantes.NUEVOS)
	@HttpCode(HttpStatus.OK)
	async nuevos(@Body('news_alumno_materias',new ParseArrayPipe({ items: AlumnoMateriaCreateRequest })) 
				 alumno_materia_create_requests: Array<AlumnoMateriaCreateRequest>) : Promise<AlumnoMateriaReturnView> {		
		try {
			
			this.alumno_materias = new Array<AlumnoMateria>();			
			
			AlumnoMateriaCreateRequest.setAlumnoMaterias(alumno_materia_create_requests,this.alumno_materias);
			
			await this.alumno_materia_logici1.nuevos(this.alumno_materias);
			
			this.setReturnView(TipoAccionEnum.NUEVO);
			
		} catch(e:any) {
			throw e;
		}
		
		return this.alumno_materia_return_view;
	}
	
	@Delete(Constantes.ELIMINARS)
	@HttpCode(HttpStatus.OK)
	async eliminars(@Body('ids_deletes_alumno_materias',new ParseArrayPipe({ items: Number })) 
					ids: Array<number>) : Promise<AlumnoMateriaReturnView> {	
		try {			
			
			await this.alumno_materia_logici1.eliminars(ids);
			
			this.setReturnView(TipoAccionEnum.ELIMINAR);
			
		} catch(e:any) {
			throw e;
		}
		
		return this.alumno_materia_return_view;
	}
	
	@Put(Constantes.ACTUALIZARS)
	@HttpCode(HttpStatus.OK)
	async actualizars(@Body('updates_alumno_materias',new ParseArrayPipe({ items: AlumnoMateriaUpdateRequest })) 
					  alumno_materia_update_requests: Array<AlumnoMateriaUpdateRequest>,
					  @Body('updates_columnas',new ParseArrayPipe({ items: String })) 
					  updates_columnas:Array<string>) : Promise<AlumnoMateriaReturnView> {	
		try {
			
			this.alumno_materias = new Array<AlumnoMateria>();
			
			AlumnoMateriaUpdateRequest.setAlumnoMaterias(alumno_materia_update_requests,this.alumno_materias);
			
			await this.alumno_materia_logici1.actualizars(this.alumno_materias,updates_columnas);
			
			this.setReturnView(TipoAccionEnum.ACTUALIZAR);
		
		} catch(e:any) {
			throw e;
		}
		
		return this.alumno_materia_return_view;
	}
	
	@Post(Constantes.GUARDAR_CAMBIOS)
	@HttpCode(HttpStatus.OK)
	async guardarCambios(@Body('news_alumno_materias') 
						 news_alumno_materias: Array<AlumnoMateria>,
						 @Body('ids_deletes_alumno_materias') 
						 ids_deletes_alumno_materias: Array<number>,
						 @Body('updates_alumno_materias') 
						 updates_alumno_materias: Array<AlumnoMateria>,
						 @Body('updates_columnas') 
						 updates_columnas:Array<string>) : Promise<AlumnoMateriaReturnView> {	
		try {
			
			/*--- Inserts ---*/
			await this.alumno_materia_logici1.nuevos(news_alumno_materias);
			
			/*--- Deletes ---*/
			await this.alumno_materia_logici1.eliminars(ids_deletes_alumno_materias);
			
			/*--- Updates ---*/
			await this.alumno_materia_logici1.actualizars(updates_alumno_materias,updates_columnas);
						
			this.setReturnView(TipoAccionEnum.GUARDAR_CAMBIOS);			
		
		} catch(e:any) {
			throw e;
		}
		
		return this.alumno_materia_return_view;
	}
	
	/*FKs*/
	@Post(Constantes.GET_FKS)
	@HttpCode(HttpStatus.OK)
	async getFks() : Promise<AlumnoMateriaFKReturnView> {
		try {
			
			await this.alumno_materia_logici1.getFks();				
			
			this.alumno_materia_fk_return_view_dto.alumnosFK = this.alumno_materia_logici1.alumnosFK;
			this.alumno_materia_fk_return_view_dto.materiasFK = this.alumno_materia_logici1.materiasFK;
		
			return this.alumno_materia_fk_return_view_dto;
			
		} catch(e:any) {
			throw e;
		}		
	}
	
	
	@Post(Constantes.TODOS_ENTITIES_DTO)
	@HttpCode(HttpStatus.OK)
	@UseInterceptors(ClassSerializerInterceptor)
	async getTodosEntitiesDto(@Body(Constantes.PAGINATION) 
				   pagination1:Pagination) : Promise<Array<AlumnoMateria>> {
		
		let alumno_materias = new Array<AlumnoMateria>();
		
		try {
			
			this.relations1 = {
				/*----- FKs -----*/
				
					alumno:true	
					,materia:true									
			};
			
			this.alumno_materias = await this.alumno_materia_logici1.getTodos(pagination1,this.relations1);
						
		} catch(e:any) {
			throw e;
		}
		
		return alumno_materias;
	}
}

export {AlumnoMateriaController};
