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

import {Docente} from '../../domain/model/docente';

import {DocenteLogic} from '../../application/logic/docente.logic';
import {DocenteLogicI} from '../../application/logic/docente.logici';
import {DocenteReturnView} from '../../infrastructure/util/return/docente_return_view.return';

import {DocenteCreateRequest} from '../../infrastructure/util/request/docente_create.request';
import {DocenteUpdateRequest} from '../../infrastructure/util/request/docente_update.request';


@Controller('/api/colegio_relaciones/estructura/docente_api')
class DocenteController extends GeneralEntityController {

	pagination1:Pagination;
	relations1:any;
	docente1:Docente;
	docentes : Array<Docente>;
	docente_return_view:DocenteReturnView;
	result: any;
	
	
	//private docente_logici1: DocenteLogicI;
		
	builder_object_docente1:any;
	
	
	constructor(private docente_logici1: DocenteLogic) {
		super();
		
		this.pagination1 = new Pagination();
		this.docente1 = new Docente();
		this.docentes = new Array<Docente>();
		
			//this.docente_logici1 = new DocenteLogic();
		
		this.docente_return_view = new DocenteReturnView();
		
		
		
	}
	
	setReturnView(tipo_accion_enum1:TipoAccionEnum) {
		/*
		this.docentes = this.docente_logici1.docentes;
		this.docente1 = this.docente_logici1.docente1;				
		*/
		
		this.docente_return_view.setReturnView(tipo_accion_enum1,this.docente1,this.docentes);		
	}
	
	//------------------------------ APIs ---------------------------------------
	
	@Post(Constantes.DEFAULT)
	@HttpCode(HttpStatus.OK)
	async getDefault(@Body(Constantes.PAGINATION) 
					 pagination1:Pagination) : Promise<DocenteReturnView> {		
		try {
			
			this.relations1 = {
			};
			
			this.docentes = await this.docente_logici1.getTodos(pagination1,this.relations1);
			
			this.setReturnView(TipoAccionEnum.BUSCAR_TODOS);
			
		} catch(e:any) {
			throw e;
		}
		
		return this.docente_return_view;
	}
	
	@Post(Constantes.INDEX)
	@HttpCode(HttpStatus.OK)
	async getIndex(@Body(Constantes.PAGINATION) 
				   pagination1:Pagination) : Promise<DocenteReturnView> {		
		try {
			
			this.relations1 = {
			};
			
			this.docentes = await this.docente_logici1.getTodos(pagination1,this.relations1);
			
			this.setReturnView(TipoAccionEnum.BUSCAR_TODOS);
			
		} catch(e:any) {
			throw e;
		}
		
		return this.docente_return_view;
	}
	
	@Post(Constantes.TODOS)
	@HttpCode(HttpStatus.OK)
	async getTodos(@Body(Constantes.PAGINATION) 
				   pagination1:Pagination) : Promise<DocenteReturnView> {		
		try {
			
			this.relations1 = {
			};
			
			this.docentes = await this.docente_logici1.getTodos(pagination1,this.relations1);
			
			this.setReturnView(TipoAccionEnum.BUSCAR_TODOS);
			
		} catch(e:any) {
			throw e;
		}
		
		return this.docente_return_view;
	}
	
	@Post(Constantes.BUSCAR)
	@HttpCode(HttpStatus.OK)
	async getBuscar(@Body(Constantes.PAGINATION) 
					pagination1:Pagination,@Req() req:Request) : Promise<DocenteReturnView> {		
		try {
			
			this.relations1 = {
			};
			
			this.builder_object_docente1 = this.docente_logici1.getBuilderFunctionObjectParametroBuscar(req);			
			
			this.docentes = await this.docente_logici1.getBuscar(this.builder_object_docente1,pagination1,this.relations1);
			
			this.setReturnView(TipoAccionEnum.BUSCAR);
			
		} catch(e:any) {
			throw e;
		}
		
		return this.docente_return_view;
	}
	
	@Post(Constantes.SELECCIONAR)
	@HttpCode(HttpStatus.OK)
	async getSeleccionar(@Body(Constantes.ID,ParseIntPipe) 
						 id:number) : Promise<DocenteReturnView> {		
		try {
			
			this.relations1 = {
			};
			
			this.builder_object_docente1=this.docente_logici1.getBuilderFunctionObjectParametroSeleccionar(id);			
			
			this.docente1 = await this.docente_logici1.getBuscarUno(this.builder_object_docente1,this.relations1);
			
			this.setReturnView(TipoAccionEnum.SELECCIONAR);
			
		} catch(e:any) {
			throw e;
		}
		
		return this.docente_return_view;
	}
	
	@Post(Constantes.NUEVO)
	@HttpCode(HttpStatus.OK)
	async nuevo(@Body(Docente.DOCENTE) 
				docente_create_request1:DocenteCreateRequest) : Promise<DocenteReturnView> {		
		try {
			
			this.docente1 = new Docente();			
			
			DocenteCreateRequest.setDocente(docente_create_request1,this.docente1);
			
			this.result = await this.docente_logici1.nuevo(this.docente1);			
			
			this.setReturnView(TipoAccionEnum.NUEVO);
			
		} catch(e:any) {
			throw e;
		}
		
		return this.docente_return_view;
	}

	@Put(Constantes.ACTUALIZAR)
	@HttpCode(HttpStatus.OK)
	async actualizar(@Body(Docente.DOCENTE) 
					 docente_update_request1:DocenteUpdateRequest) : Promise<DocenteReturnView> {	
		try {
			
			DocenteUpdateRequest.setDocente(docente_update_request1,this.docente1);
			
			this.result = await this.docente_logici1.actualizar(this.docente1);
			
			this.setReturnView(TipoAccionEnum.ACTUALIZAR);			
			
		} catch(e:any) {
			throw e;
		}
		
		return this.docente_return_view;
	}
	
	@Delete(Constantes.ELIMINAR)
	@HttpCode(HttpStatus.OK)
	async eliminar(@Body(Constantes.ID,ParseIntPipe) 
				   id:number) : Promise<DocenteReturnView> {	
		try {			
			
			this.result = await this.docente_logici1.eliminar(id);
			
			this.setReturnView(TipoAccionEnum.ELIMINAR);			
			
		} catch(e:any) {
			throw e;
		}
		
		return this.docente_return_view;
	}
	
	@Post(Constantes.NUEVOS)
	@HttpCode(HttpStatus.OK)
	async nuevos(@Body('news_docentes',new ParseArrayPipe({ items: DocenteCreateRequest })) 
				 docente_create_requests: Array<DocenteCreateRequest>) : Promise<DocenteReturnView> {		
		try {
			
			this.docentes = new Array<Docente>();			
			
			DocenteCreateRequest.setDocentes(docente_create_requests,this.docentes);
			
			await this.docente_logici1.nuevos(this.docentes);
			
			this.setReturnView(TipoAccionEnum.NUEVO);
			
		} catch(e:any) {
			throw e;
		}
		
		return this.docente_return_view;
	}
	
	@Delete(Constantes.ELIMINARS)
	@HttpCode(HttpStatus.OK)
	async eliminars(@Body('ids_deletes_docentes',new ParseArrayPipe({ items: Number })) 
					ids: Array<number>) : Promise<DocenteReturnView> {	
		try {			
			
			await this.docente_logici1.eliminars(ids);
			
			this.setReturnView(TipoAccionEnum.ELIMINAR);
			
		} catch(e:any) {
			throw e;
		}
		
		return this.docente_return_view;
	}
	
	@Put(Constantes.ACTUALIZARS)
	@HttpCode(HttpStatus.OK)
	async actualizars(@Body('updates_docentes',new ParseArrayPipe({ items: DocenteUpdateRequest })) 
					  docente_update_requests: Array<DocenteUpdateRequest>,
					  @Body('updates_columnas',new ParseArrayPipe({ items: String })) 
					  updates_columnas:Array<string>) : Promise<DocenteReturnView> {	
		try {
			
			this.docentes = new Array<Docente>();
			
			DocenteUpdateRequest.setDocentes(docente_update_requests,this.docentes);
			
			await this.docente_logici1.actualizars(this.docentes,updates_columnas);
			
			this.setReturnView(TipoAccionEnum.ACTUALIZAR);
		
		} catch(e:any) {
			throw e;
		}
		
		return this.docente_return_view;
	}
	
	@Post(Constantes.GUARDAR_CAMBIOS)
	@HttpCode(HttpStatus.OK)
	async guardarCambios(@Body('news_docentes') 
						 news_docentes: Array<Docente>,
						 @Body('ids_deletes_docentes') 
						 ids_deletes_docentes: Array<number>,
						 @Body('updates_docentes') 
						 updates_docentes: Array<Docente>,
						 @Body('updates_columnas') 
						 updates_columnas:Array<string>) : Promise<DocenteReturnView> {	
		try {
			
			/*--- Inserts ---*/
			await this.docente_logici1.nuevos(news_docentes);
			
			/*--- Deletes ---*/
			await this.docente_logici1.eliminars(ids_deletes_docentes);
			
			/*--- Updates ---*/
			await this.docente_logici1.actualizars(updates_docentes,updates_columnas);
						
			this.setReturnView(TipoAccionEnum.GUARDAR_CAMBIOS);			
		
		} catch(e:any) {
			throw e;
		}
		
		return this.docente_return_view;
	}
	
	
	/*----- RELACIONES -----*/
	@Post(Constantes.TODOS_RELACIONES)
	@HttpCode(HttpStatus.OK)
	async getTodosRelaciones(@Body(Constantes.PAGINATION) 
							 pagination1:Pagination) : Promise<DocenteReturnView> {		
		try {
			
			this.relations1 = {
				/*----- Relaciones -----*/
				
				sueldos:true
				,contrato:true
				,materias:true
				,notas:true
				,docente_materias:true
			};
			
			this.docentes = await this.docente_logici1.getTodos(pagination1,this.relations1);
			
			this.setReturnView(TipoAccionEnum.BUSCAR_TODOS);
			
		} catch(e:any) {
			throw e;
		}
		
		return this.docente_return_view;
	}
	
	@Post(Constantes.SELECCIONAR_RELACIONES)
	@HttpCode(HttpStatus.OK)
	async getSeleccionarRelaciones(@Body(Constantes.ID,ParseIntPipe) 
								   id:number) : Promise<DocenteReturnView> {		
		try {
			
			this.relations1 = {
				
				/*----- Relaciones -----*/
				
				sueldos:true
				,contrato:true
				,materias:true
				,notas:true
				,docente_materias:true
			};
			
			this.builder_object_docente1=this.docente_logici1.getBuilderFunctionObjectParametroSeleccionar(id);			
			
			this.docente1 = await this.docente_logici1.getBuscarUno(this.builder_object_docente1,this.relations1);
			
			this.setReturnView(TipoAccionEnum.SELECCIONAR);
			
		} catch(e:any) {
			throw e;
		}
		
		return this.docente_return_view;
	}
	
	@Post(Constantes.TODOS_ENTITIES_DTO)
	@HttpCode(HttpStatus.OK)
	@UseInterceptors(ClassSerializerInterceptor)
	async getTodosEntitiesDto(@Body(Constantes.PAGINATION) 
				   pagination1:Pagination) : Promise<Array<Docente>> {
		
		let docentes = new Array<Docente>();
		
		try {
			
			this.relations1 = {
			};
			
			this.docentes = await this.docente_logici1.getTodos(pagination1,this.relations1);
						
		} catch(e:any) {
			throw e;
		}
		
		return docentes;
	}
}

export {DocenteController};
