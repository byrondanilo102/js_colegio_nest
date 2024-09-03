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

import {Materia} from '../../domain/model/materia';

import {MateriaLogic} from '../../application/logic/materia.logic';
import {MateriaLogicI} from '../../application/logic/materia.logici';
import {MateriaReturnView} from '../../infrastructure/util/return/materia_return_view.return';

import {MateriaCreateRequest} from '../../infrastructure/util/request/materia_create.request';
import {MateriaUpdateRequest} from '../../infrastructure/util/request/materia_update.request';


@Controller('/api/colegio_relaciones/estructura/materia_api')
class MateriaController extends GeneralEntityController {

	pagination1:Pagination;
	relations1:any;
	materia1:Materia;
	materias : Array<Materia>;
	materia_return_view:MateriaReturnView;
	result: any;
	
	
	//private materia_logici1: MateriaLogicI;
		
	builder_object_materia1:any;
	
	
	constructor(private materia_logici1: MateriaLogic) {
		super();
		
		this.pagination1 = new Pagination();
		this.materia1 = new Materia();
		this.materias = new Array<Materia>();
		
			//this.materia_logici1 = new MateriaLogic();
		
		this.materia_return_view = new MateriaReturnView();
		
		
		
	}
	
	setReturnView(tipo_accion_enum1:TipoAccionEnum) {
		/*
		this.materias = this.materia_logici1.materias;
		this.materia1 = this.materia_logici1.materia1;				
		*/
		
		this.materia_return_view.setReturnView(tipo_accion_enum1,this.materia1,this.materias);		
	}
	
	//------------------------------ APIs ---------------------------------------
	
	@Post(Constantes.DEFAULT)
	@HttpCode(HttpStatus.OK)
	async getDefault(@Body(Constantes.PAGINATION) 
					 pagination1:Pagination) : Promise<MateriaReturnView> {		
		try {
			
			this.relations1 = {
			};
			
			this.materias = await this.materia_logici1.getTodos(pagination1,this.relations1);
			
			this.setReturnView(TipoAccionEnum.BUSCAR_TODOS);
			
		} catch(e:any) {
			throw e;
		}
		
		return this.materia_return_view;
	}
	
	@Post(Constantes.INDEX)
	@HttpCode(HttpStatus.OK)
	async getIndex(@Body(Constantes.PAGINATION) 
				   pagination1:Pagination) : Promise<MateriaReturnView> {		
		try {
			
			this.relations1 = {
			};
			
			this.materias = await this.materia_logici1.getTodos(pagination1,this.relations1);
			
			this.setReturnView(TipoAccionEnum.BUSCAR_TODOS);
			
		} catch(e:any) {
			throw e;
		}
		
		return this.materia_return_view;
	}
	
	@Post(Constantes.TODOS)
	@HttpCode(HttpStatus.OK)
	async getTodos(@Body(Constantes.PAGINATION) 
				   pagination1:Pagination) : Promise<MateriaReturnView> {		
		try {
			
			this.relations1 = {
			};
			
			this.materias = await this.materia_logici1.getTodos(pagination1,this.relations1);
			
			this.setReturnView(TipoAccionEnum.BUSCAR_TODOS);
			
		} catch(e:any) {
			throw e;
		}
		
		return this.materia_return_view;
	}
	
	@Post(Constantes.BUSCAR)
	@HttpCode(HttpStatus.OK)
	async getBuscar(@Body(Constantes.PAGINATION) 
					pagination1:Pagination,@Req() req:Request) : Promise<MateriaReturnView> {		
		try {
			
			this.relations1 = {
			};
			
			this.builder_object_materia1 = this.materia_logici1.getBuilderFunctionObjectParametroBuscar(req);			
			
			this.materias = await this.materia_logici1.getBuscar(this.builder_object_materia1,pagination1,this.relations1);
			
			this.setReturnView(TipoAccionEnum.BUSCAR);
			
		} catch(e:any) {
			throw e;
		}
		
		return this.materia_return_view;
	}
	
	@Post(Constantes.SELECCIONAR)
	@HttpCode(HttpStatus.OK)
	async getSeleccionar(@Body(Constantes.ID,ParseIntPipe) 
						 id:number) : Promise<MateriaReturnView> {		
		try {
			
			this.relations1 = {
			};
			
			this.builder_object_materia1=this.materia_logici1.getBuilderFunctionObjectParametroSeleccionar(id);			
			
			this.materia1 = await this.materia_logici1.getBuscarUno(this.builder_object_materia1,this.relations1);
			
			this.setReturnView(TipoAccionEnum.SELECCIONAR);
			
		} catch(e:any) {
			throw e;
		}
		
		return this.materia_return_view;
	}
	
	@Post(Constantes.NUEVO)
	@HttpCode(HttpStatus.OK)
	async nuevo(@Body(Materia.MATERIA) 
				materia_create_request1:MateriaCreateRequest) : Promise<MateriaReturnView> {		
		try {
			
			this.materia1 = new Materia();			
			
			MateriaCreateRequest.setMateria(materia_create_request1,this.materia1);
			
			this.result = await this.materia_logici1.nuevo(this.materia1);			
			
			this.setReturnView(TipoAccionEnum.NUEVO);
			
		} catch(e:any) {
			throw e;
		}
		
		return this.materia_return_view;
	}

	@Put(Constantes.ACTUALIZAR)
	@HttpCode(HttpStatus.OK)
	async actualizar(@Body(Materia.MATERIA) 
					 materia_update_request1:MateriaUpdateRequest) : Promise<MateriaReturnView> {	
		try {
			
			MateriaUpdateRequest.setMateria(materia_update_request1,this.materia1);
			
			this.result = await this.materia_logici1.actualizar(this.materia1);
			
			this.setReturnView(TipoAccionEnum.ACTUALIZAR);			
			
		} catch(e:any) {
			throw e;
		}
		
		return this.materia_return_view;
	}
	
	@Delete(Constantes.ELIMINAR)
	@HttpCode(HttpStatus.OK)
	async eliminar(@Body(Constantes.ID,ParseIntPipe) 
				   id:number) : Promise<MateriaReturnView> {	
		try {			
			
			this.result = await this.materia_logici1.eliminar(id);
			
			this.setReturnView(TipoAccionEnum.ELIMINAR);			
			
		} catch(e:any) {
			throw e;
		}
		
		return this.materia_return_view;
	}
	
	@Post(Constantes.NUEVOS)
	@HttpCode(HttpStatus.OK)
	async nuevos(@Body('news_materias',new ParseArrayPipe({ items: MateriaCreateRequest })) 
				 materia_create_requests: Array<MateriaCreateRequest>) : Promise<MateriaReturnView> {		
		try {
			
			this.materias = new Array<Materia>();			
			
			MateriaCreateRequest.setMaterias(materia_create_requests,this.materias);
			
			await this.materia_logici1.nuevos(this.materias);
			
			this.setReturnView(TipoAccionEnum.NUEVO);
			
		} catch(e:any) {
			throw e;
		}
		
		return this.materia_return_view;
	}
	
	@Delete(Constantes.ELIMINARS)
	@HttpCode(HttpStatus.OK)
	async eliminars(@Body('ids_deletes_materias',new ParseArrayPipe({ items: Number })) 
					ids: Array<number>) : Promise<MateriaReturnView> {	
		try {			
			
			await this.materia_logici1.eliminars(ids);
			
			this.setReturnView(TipoAccionEnum.ELIMINAR);
			
		} catch(e:any) {
			throw e;
		}
		
		return this.materia_return_view;
	}
	
	@Put(Constantes.ACTUALIZARS)
	@HttpCode(HttpStatus.OK)
	async actualizars(@Body('updates_materias',new ParseArrayPipe({ items: MateriaUpdateRequest })) 
					  materia_update_requests: Array<MateriaUpdateRequest>,
					  @Body('updates_columnas',new ParseArrayPipe({ items: String })) 
					  updates_columnas:Array<string>) : Promise<MateriaReturnView> {	
		try {
			
			this.materias = new Array<Materia>();
			
			MateriaUpdateRequest.setMaterias(materia_update_requests,this.materias);
			
			await this.materia_logici1.actualizars(this.materias,updates_columnas);
			
			this.setReturnView(TipoAccionEnum.ACTUALIZAR);
		
		} catch(e:any) {
			throw e;
		}
		
		return this.materia_return_view;
	}
	
	@Post(Constantes.GUARDAR_CAMBIOS)
	@HttpCode(HttpStatus.OK)
	async guardarCambios(@Body('news_materias') 
						 news_materias: Array<Materia>,
						 @Body('ids_deletes_materias') 
						 ids_deletes_materias: Array<number>,
						 @Body('updates_materias') 
						 updates_materias: Array<Materia>,
						 @Body('updates_columnas') 
						 updates_columnas:Array<string>) : Promise<MateriaReturnView> {	
		try {
			
			/*--- Inserts ---*/
			await this.materia_logici1.nuevos(news_materias);
			
			/*--- Deletes ---*/
			await this.materia_logici1.eliminars(ids_deletes_materias);
			
			/*--- Updates ---*/
			await this.materia_logici1.actualizars(updates_materias,updates_columnas);
						
			this.setReturnView(TipoAccionEnum.GUARDAR_CAMBIOS);			
		
		} catch(e:any) {
			throw e;
		}
		
		return this.materia_return_view;
	}
	
	
	/*----- RELACIONES -----*/
	@Post(Constantes.TODOS_RELACIONES)
	@HttpCode(HttpStatus.OK)
	async getTodosRelaciones(@Body(Constantes.PAGINATION) 
							 pagination1:Pagination) : Promise<MateriaReturnView> {		
		try {
			
			this.relations1 = {
				/*----- Relaciones -----*/
				
				alumnos:true
				,alumno_materias:true
				,docentes:true
				,notas:true
				,docente_materias:true
			};
			
			this.materias = await this.materia_logici1.getTodos(pagination1,this.relations1);
			
			this.setReturnView(TipoAccionEnum.BUSCAR_TODOS);
			
		} catch(e:any) {
			throw e;
		}
		
		return this.materia_return_view;
	}
	
	@Post(Constantes.SELECCIONAR_RELACIONES)
	@HttpCode(HttpStatus.OK)
	async getSeleccionarRelaciones(@Body(Constantes.ID,ParseIntPipe) 
								   id:number) : Promise<MateriaReturnView> {		
		try {
			
			this.relations1 = {
				
				/*----- Relaciones -----*/
				
				alumnos:true
				,alumno_materias:true
				,docentes:true
				,notas:true
				,docente_materias:true
			};
			
			this.builder_object_materia1=this.materia_logici1.getBuilderFunctionObjectParametroSeleccionar(id);			
			
			this.materia1 = await this.materia_logici1.getBuscarUno(this.builder_object_materia1,this.relations1);
			
			this.setReturnView(TipoAccionEnum.SELECCIONAR);
			
		} catch(e:any) {
			throw e;
		}
		
		return this.materia_return_view;
	}
	
	@Post(Constantes.TODOS_ENTITIES_DTO)
	@HttpCode(HttpStatus.OK)
	@UseInterceptors(ClassSerializerInterceptor)
	async getTodosEntitiesDto(@Body(Constantes.PAGINATION) 
				   pagination1:Pagination) : Promise<Array<Materia>> {
		
		let materias = new Array<Materia>();
		
		try {
			
			this.relations1 = {
			};
			
			this.materias = await this.materia_logici1.getTodos(pagination1,this.relations1);
						
		} catch(e:any) {
			throw e;
		}
		
		return materias;
	}
}

export {MateriaController};
