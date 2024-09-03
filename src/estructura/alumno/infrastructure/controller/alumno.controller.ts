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

import {Alumno} from '../../domain/model/alumno';

import {AlumnoLogic} from '../../application/logic/alumno.logic';
import {AlumnoLogicI} from '../../application/logic/alumno.logici';
import {AlumnoReturnView} from '../../infrastructure/util/return/alumno_return_view.return';

import {AlumnoCreateRequest} from '../../infrastructure/util/request/alumno_create.request';
import {AlumnoUpdateRequest} from '../../infrastructure/util/request/alumno_update.request';


@Controller('/api/colegio_relaciones/estructura/alumno_api')
class AlumnoController extends GeneralEntityController {

	pagination1:Pagination;
	relations1:any;
	alumno1:Alumno;
	alumnos : Array<Alumno>;
	alumno_return_view:AlumnoReturnView;
	result: any;
	
	
	//private alumno_logici1: AlumnoLogicI;
		
	builder_object_alumno1:any;
	
	
	constructor(private alumno_logici1: AlumnoLogic) {
		super();
		
		this.pagination1 = new Pagination();
		this.alumno1 = new Alumno();
		this.alumnos = new Array<Alumno>();
		
			//this.alumno_logici1 = new AlumnoLogic();
		
		this.alumno_return_view = new AlumnoReturnView();
		
		
		
	}
	
	setReturnView(tipo_accion_enum1:TipoAccionEnum) {
		/*
		this.alumnos = this.alumno_logici1.alumnos;
		this.alumno1 = this.alumno_logici1.alumno1;				
		*/
		
		this.alumno_return_view.setReturnView(tipo_accion_enum1,this.alumno1,this.alumnos);		
	}
	
	//------------------------------ APIs ---------------------------------------
	
	@Post(Constantes.DEFAULT)
	@HttpCode(HttpStatus.OK)
	async getDefault(@Body(Constantes.PAGINATION) 
					 pagination1:Pagination) : Promise<AlumnoReturnView> {		
		try {
			
			this.relations1 = {
			};
			
			this.alumnos = await this.alumno_logici1.getTodos(pagination1,this.relations1);
			
			this.setReturnView(TipoAccionEnum.BUSCAR_TODOS);
			
		} catch(e:any) {
			throw e;
		}
		
		return this.alumno_return_view;
	}
	
	@Post(Constantes.INDEX)
	@HttpCode(HttpStatus.OK)
	async getIndex(@Body(Constantes.PAGINATION) 
				   pagination1:Pagination) : Promise<AlumnoReturnView> {		
		try {
			
			this.relations1 = {
			};
			
			this.alumnos = await this.alumno_logici1.getTodos(pagination1,this.relations1);
			
			this.setReturnView(TipoAccionEnum.BUSCAR_TODOS);
			
		} catch(e:any) {
			throw e;
		}
		
		return this.alumno_return_view;
	}
	
	@Post(Constantes.TODOS)
	@HttpCode(HttpStatus.OK)
	async getTodos(@Body(Constantes.PAGINATION) 
				   pagination1:Pagination) : Promise<AlumnoReturnView> {		
		try {
			
			this.relations1 = {
			};
			
			this.alumnos = await this.alumno_logici1.getTodos(pagination1,this.relations1);
			
			this.setReturnView(TipoAccionEnum.BUSCAR_TODOS);
			
		} catch(e:any) {
			throw e;
		}
		
		return this.alumno_return_view;
	}
	
	@Post(Constantes.BUSCAR)
	@HttpCode(HttpStatus.OK)
	async getBuscar(@Body(Constantes.PAGINATION) 
					pagination1:Pagination,@Req() req:Request) : Promise<AlumnoReturnView> {		
		try {
			
			this.relations1 = {
			};
			
			this.builder_object_alumno1 = this.alumno_logici1.getBuilderFunctionObjectParametroBuscar(req);			
			
			this.alumnos = await this.alumno_logici1.getBuscar(this.builder_object_alumno1,pagination1,this.relations1);
			
			this.setReturnView(TipoAccionEnum.BUSCAR);
			
		} catch(e:any) {
			throw e;
		}
		
		return this.alumno_return_view;
	}
	
	@Post(Constantes.SELECCIONAR)
	@HttpCode(HttpStatus.OK)
	async getSeleccionar(@Body(Constantes.ID,ParseIntPipe) 
						 id:number) : Promise<AlumnoReturnView> {		
		try {
			
			this.relations1 = {
			};
			
			this.builder_object_alumno1=this.alumno_logici1.getBuilderFunctionObjectParametroSeleccionar(id);			
			
			this.alumno1 = await this.alumno_logici1.getBuscarUno(this.builder_object_alumno1,this.relations1);
			
			this.setReturnView(TipoAccionEnum.SELECCIONAR);
			
		} catch(e:any) {
			throw e;
		}
		
		return this.alumno_return_view;
	}
	
	@Post(Constantes.NUEVO)
	@HttpCode(HttpStatus.OK)
	async nuevo(@Body(Alumno.ALUMNO) 
				alumno_create_request1:AlumnoCreateRequest) : Promise<AlumnoReturnView> {		
		try {
			
			this.alumno1 = new Alumno();			
			
			AlumnoCreateRequest.setAlumno(alumno_create_request1,this.alumno1);
			
			this.result = await this.alumno_logici1.nuevo(this.alumno1);			
			
			this.setReturnView(TipoAccionEnum.NUEVO);
			
		} catch(e:any) {
			throw e;
		}
		
		return this.alumno_return_view;
	}

	@Put(Constantes.ACTUALIZAR)
	@HttpCode(HttpStatus.OK)
	async actualizar(@Body(Alumno.ALUMNO) 
					 alumno_update_request1:AlumnoUpdateRequest) : Promise<AlumnoReturnView> {	
		try {
			
			AlumnoUpdateRequest.setAlumno(alumno_update_request1,this.alumno1);
			
			this.result = await this.alumno_logici1.actualizar(this.alumno1);
			
			this.setReturnView(TipoAccionEnum.ACTUALIZAR);			
			
		} catch(e:any) {
			throw e;
		}
		
		return this.alumno_return_view;
	}
	
	@Delete(Constantes.ELIMINAR)
	@HttpCode(HttpStatus.OK)
	async eliminar(@Body(Constantes.ID,ParseIntPipe) 
				   id:number) : Promise<AlumnoReturnView> {	
		try {			
			
			this.result = await this.alumno_logici1.eliminar(id);
			
			this.setReturnView(TipoAccionEnum.ELIMINAR);			
			
		} catch(e:any) {
			throw e;
		}
		
		return this.alumno_return_view;
	}
	
	@Post(Constantes.NUEVOS)
	@HttpCode(HttpStatus.OK)
	async nuevos(@Body('news_alumnos',new ParseArrayPipe({ items: AlumnoCreateRequest })) 
				 alumno_create_requests: Array<AlumnoCreateRequest>) : Promise<AlumnoReturnView> {		
		try {
			
			this.alumnos = new Array<Alumno>();			
			
			AlumnoCreateRequest.setAlumnos(alumno_create_requests,this.alumnos);
			
			await this.alumno_logici1.nuevos(this.alumnos);
			
			this.setReturnView(TipoAccionEnum.NUEVO);
			
		} catch(e:any) {
			throw e;
		}
		
		return this.alumno_return_view;
	}
	
	@Delete(Constantes.ELIMINARS)
	@HttpCode(HttpStatus.OK)
	async eliminars(@Body('ids_deletes_alumnos',new ParseArrayPipe({ items: Number })) 
					ids: Array<number>) : Promise<AlumnoReturnView> {	
		try {			
			
			await this.alumno_logici1.eliminars(ids);
			
			this.setReturnView(TipoAccionEnum.ELIMINAR);
			
		} catch(e:any) {
			throw e;
		}
		
		return this.alumno_return_view;
	}
	
	@Put(Constantes.ACTUALIZARS)
	@HttpCode(HttpStatus.OK)
	async actualizars(@Body('updates_alumnos',new ParseArrayPipe({ items: AlumnoUpdateRequest })) 
					  alumno_update_requests: Array<AlumnoUpdateRequest>,
					  @Body('updates_columnas',new ParseArrayPipe({ items: String })) 
					  updates_columnas:Array<string>) : Promise<AlumnoReturnView> {	
		try {
			
			this.alumnos = new Array<Alumno>();
			
			AlumnoUpdateRequest.setAlumnos(alumno_update_requests,this.alumnos);
			
			await this.alumno_logici1.actualizars(this.alumnos,updates_columnas);
			
			this.setReturnView(TipoAccionEnum.ACTUALIZAR);
		
		} catch(e:any) {
			throw e;
		}
		
		return this.alumno_return_view;
	}
	
	@Post(Constantes.GUARDAR_CAMBIOS)
	@HttpCode(HttpStatus.OK)
	async guardarCambios(@Body('news_alumnos') 
						 news_alumnos: Array<Alumno>,
						 @Body('ids_deletes_alumnos') 
						 ids_deletes_alumnos: Array<number>,
						 @Body('updates_alumnos') 
						 updates_alumnos: Array<Alumno>,
						 @Body('updates_columnas') 
						 updates_columnas:Array<string>) : Promise<AlumnoReturnView> {	
		try {
			
			/*--- Inserts ---*/
			await this.alumno_logici1.nuevos(news_alumnos);
			
			/*--- Deletes ---*/
			await this.alumno_logici1.eliminars(ids_deletes_alumnos);
			
			/*--- Updates ---*/
			await this.alumno_logici1.actualizars(updates_alumnos,updates_columnas);
						
			this.setReturnView(TipoAccionEnum.GUARDAR_CAMBIOS);			
		
		} catch(e:any) {
			throw e;
		}
		
		return this.alumno_return_view;
	}
	
	
	/*----- RELACIONES -----*/
	@Post(Constantes.TODOS_RELACIONES)
	@HttpCode(HttpStatus.OK)
	async getTodosRelaciones(@Body(Constantes.PAGINATION) 
							 pagination1:Pagination) : Promise<AlumnoReturnView> {		
		try {
			
			this.relations1 = {
				/*----- Relaciones -----*/
				
				matricula:true
				,alumno_materias:true
				,materias:true
				,pensions:true
				,notas:true
			};
			
			this.alumnos = await this.alumno_logici1.getTodos(pagination1,this.relations1);
			
			this.setReturnView(TipoAccionEnum.BUSCAR_TODOS);
			
		} catch(e:any) {
			throw e;
		}
		
		return this.alumno_return_view;
	}
	
	@Post(Constantes.SELECCIONAR_RELACIONES)
	@HttpCode(HttpStatus.OK)
	async getSeleccionarRelaciones(@Body(Constantes.ID,ParseIntPipe) 
								   id:number) : Promise<AlumnoReturnView> {		
		try {
			
			this.relations1 = {
				
				/*----- Relaciones -----*/
				
				matricula:true
				,alumno_materias:true
				,materias:true
				,pensions:true
				,notas:true
			};
			
			this.builder_object_alumno1=this.alumno_logici1.getBuilderFunctionObjectParametroSeleccionar(id);			
			
			this.alumno1 = await this.alumno_logici1.getBuscarUno(this.builder_object_alumno1,this.relations1);
			
			this.setReturnView(TipoAccionEnum.SELECCIONAR);
			
		} catch(e:any) {
			throw e;
		}
		
		return this.alumno_return_view;
	}
	
	@Post(Constantes.TODOS_ENTITIES_DTO)
	@HttpCode(HttpStatus.OK)
	@UseInterceptors(ClassSerializerInterceptor)
	async getTodosEntitiesDto(@Body(Constantes.PAGINATION) 
				   pagination1:Pagination) : Promise<Array<Alumno>> {
		
		let alumnos = new Array<Alumno>();
		
		try {
			
			this.relations1 = {
			};
			
			this.alumnos = await this.alumno_logici1.getTodos(pagination1,this.relations1);
						
		} catch(e:any) {
			throw e;
		}
		
		return alumnos;
	}
}

export {AlumnoController};
