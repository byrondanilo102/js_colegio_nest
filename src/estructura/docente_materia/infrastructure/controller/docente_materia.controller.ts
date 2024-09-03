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

import {DocenteMateria} from '../../domain/model/docente_materia';

import {DocenteMateriaLogic} from '../../application/logic/docente_materia.logic';
import {DocenteMateriaLogicI} from '../../application/logic/docente_materia.logici';
import {DocenteMateriaReturnView} from '../../infrastructure/util/return/docente_materia_return_view.return';

import {DocenteMateriaCreateRequest} from '../../infrastructure/util/request/docente_materia_create.request';
import {DocenteMateriaUpdateRequest} from '../../infrastructure/util/request/docente_materia_update.request';

import {DocenteMateriaFKReturnView} from '../../infrastructure/util/return/docente_materia_fk_return_view.return';

@Controller('/api/colegio_relaciones/estructura/docente_materia_api')
class DocenteMateriaController extends GeneralEntityController {

	pagination1:Pagination;
	relations1:any;
	docente_materia1:DocenteMateria;
	docente_materias : Array<DocenteMateria>;
	docente_materia_return_view:DocenteMateriaReturnView;
	result: any;
	
	/*FKs*/
	docente_materia_fk_return_view_dto:DocenteMateriaFKReturnView;
	
	//private docente_materia_logici1: DocenteMateriaLogicI;
		
	builder_object_docente_materia1:any;
	
	
	constructor(private docente_materia_logici1: DocenteMateriaLogic) {
		super();
		
		this.pagination1 = new Pagination();
		this.docente_materia1 = new DocenteMateria();
		this.docente_materias = new Array<DocenteMateria>();
		
			//this.docente_materia_logici1 = new DocenteMateriaLogic();
		
		this.docente_materia_return_view = new DocenteMateriaReturnView();
		
		/*FKs*/
		this.docente_materia_fk_return_view_dto = new DocenteMateriaFKReturnView();
		
		
	}
	
	setReturnView(tipo_accion_enum1:TipoAccionEnum) {
		/*
		this.docente_materias = this.docente_materia_logici1.docente_materias;
		this.docente_materia1 = this.docente_materia_logici1.docente_materia1;				
		*/
		
		this.docente_materia_return_view.setReturnView(tipo_accion_enum1,this.docente_materia1,this.docente_materias);		
	}
	
	//------------------------------ APIs ---------------------------------------
	
	@Post(Constantes.DEFAULT)
	@HttpCode(HttpStatus.OK)
	async getDefault(@Body(Constantes.PAGINATION) 
					 pagination1:Pagination) : Promise<DocenteMateriaReturnView> {		
		try {
			
			this.relations1 = {
				/*----- FKs -----*/
				
					docente:true	
					,materia:true									
			};
			
			this.docente_materias = await this.docente_materia_logici1.getTodos(pagination1,this.relations1);
			
			this.setReturnView(TipoAccionEnum.BUSCAR_TODOS);
			
		} catch(e:any) {
			throw e;
		}
		
		return this.docente_materia_return_view;
	}
	
	@Post(Constantes.INDEX)
	@HttpCode(HttpStatus.OK)
	async getIndex(@Body(Constantes.PAGINATION) 
				   pagination1:Pagination) : Promise<DocenteMateriaReturnView> {		
		try {
			
			this.relations1 = {
				/*----- FKs -----*/
				
					docente:true	
					,materia:true									
			};
			
			this.docente_materias = await this.docente_materia_logici1.getTodos(pagination1,this.relations1);
			
			this.setReturnView(TipoAccionEnum.BUSCAR_TODOS);
			
		} catch(e:any) {
			throw e;
		}
		
		return this.docente_materia_return_view;
	}
	
	@Post(Constantes.TODOS)
	@HttpCode(HttpStatus.OK)
	async getTodos(@Body(Constantes.PAGINATION) 
				   pagination1:Pagination) : Promise<DocenteMateriaReturnView> {		
		try {
			
			this.relations1 = {
				/*----- FKs -----*/
				
					docente:true	
					,materia:true									
			};
			
			this.docente_materias = await this.docente_materia_logici1.getTodos(pagination1,this.relations1);
			
			this.setReturnView(TipoAccionEnum.BUSCAR_TODOS);
			
		} catch(e:any) {
			throw e;
		}
		
		return this.docente_materia_return_view;
	}
	
	@Post(Constantes.BUSCAR)
	@HttpCode(HttpStatus.OK)
	async getBuscar(@Body(Constantes.PAGINATION) 
					pagination1:Pagination,@Req() req:Request) : Promise<DocenteMateriaReturnView> {		
		try {
			
			this.relations1 = {
				/*----- FKs -----*/
				
					docente:true	
					,materia:true									
			};
			
			this.builder_object_docente_materia1 = this.docente_materia_logici1.getBuilderFunctionObjectParametroBuscar(req);			
			
			this.docente_materias = await this.docente_materia_logici1.getBuscar(this.builder_object_docente_materia1,pagination1,this.relations1);
			
			this.setReturnView(TipoAccionEnum.BUSCAR);
			
		} catch(e:any) {
			throw e;
		}
		
		return this.docente_materia_return_view;
	}
	
	@Post(Constantes.SELECCIONAR)
	@HttpCode(HttpStatus.OK)
	async getSeleccionar(@Body(Constantes.ID,ParseIntPipe) 
						 id:number) : Promise<DocenteMateriaReturnView> {		
		try {
			
			this.relations1 = {
				/*----- FKs -----*/
				
					docente:true	
					,materia:true									
			};
			
			this.builder_object_docente_materia1=this.docente_materia_logici1.getBuilderFunctionObjectParametroSeleccionar(id);			
			
			this.docente_materia1 = await this.docente_materia_logici1.getBuscarUno(this.builder_object_docente_materia1,this.relations1);
			
			this.setReturnView(TipoAccionEnum.SELECCIONAR);
			
		} catch(e:any) {
			throw e;
		}
		
		return this.docente_materia_return_view;
	}
	
	@Post(Constantes.NUEVO)
	@HttpCode(HttpStatus.OK)
	async nuevo(@Body(DocenteMateria.DOCENTE_MATERIA) 
				docente_materia_create_request1:DocenteMateriaCreateRequest) : Promise<DocenteMateriaReturnView> {		
		try {
			
			this.docente_materia1 = new DocenteMateria();			
			
			DocenteMateriaCreateRequest.setDocenteMateria(docente_materia_create_request1,this.docente_materia1);
			
			this.result = await this.docente_materia_logici1.nuevo(this.docente_materia1);			
			
			this.setReturnView(TipoAccionEnum.NUEVO);
			
		} catch(e:any) {
			throw e;
		}
		
		return this.docente_materia_return_view;
	}

	@Put(Constantes.ACTUALIZAR)
	@HttpCode(HttpStatus.OK)
	async actualizar(@Body(DocenteMateria.DOCENTE_MATERIA) 
					 docente_materia_update_request1:DocenteMateriaUpdateRequest) : Promise<DocenteMateriaReturnView> {	
		try {
			
			DocenteMateriaUpdateRequest.setDocenteMateria(docente_materia_update_request1,this.docente_materia1);
			
			this.result = await this.docente_materia_logici1.actualizar(this.docente_materia1);
			
			this.setReturnView(TipoAccionEnum.ACTUALIZAR);			
			
		} catch(e:any) {
			throw e;
		}
		
		return this.docente_materia_return_view;
	}
	
	@Delete(Constantes.ELIMINAR)
	@HttpCode(HttpStatus.OK)
	async eliminar(@Body(Constantes.ID,ParseIntPipe) 
				   id:number) : Promise<DocenteMateriaReturnView> {	
		try {			
			
			this.result = await this.docente_materia_logici1.eliminar(id);
			
			this.setReturnView(TipoAccionEnum.ELIMINAR);			
			
		} catch(e:any) {
			throw e;
		}
		
		return this.docente_materia_return_view;
	}
	
	@Post(Constantes.NUEVOS)
	@HttpCode(HttpStatus.OK)
	async nuevos(@Body('news_docente_materias',new ParseArrayPipe({ items: DocenteMateriaCreateRequest })) 
				 docente_materia_create_requests: Array<DocenteMateriaCreateRequest>) : Promise<DocenteMateriaReturnView> {		
		try {
			
			this.docente_materias = new Array<DocenteMateria>();			
			
			DocenteMateriaCreateRequest.setDocenteMaterias(docente_materia_create_requests,this.docente_materias);
			
			await this.docente_materia_logici1.nuevos(this.docente_materias);
			
			this.setReturnView(TipoAccionEnum.NUEVO);
			
		} catch(e:any) {
			throw e;
		}
		
		return this.docente_materia_return_view;
	}
	
	@Delete(Constantes.ELIMINARS)
	@HttpCode(HttpStatus.OK)
	async eliminars(@Body('ids_deletes_docente_materias',new ParseArrayPipe({ items: Number })) 
					ids: Array<number>) : Promise<DocenteMateriaReturnView> {	
		try {			
			
			await this.docente_materia_logici1.eliminars(ids);
			
			this.setReturnView(TipoAccionEnum.ELIMINAR);
			
		} catch(e:any) {
			throw e;
		}
		
		return this.docente_materia_return_view;
	}
	
	@Put(Constantes.ACTUALIZARS)
	@HttpCode(HttpStatus.OK)
	async actualizars(@Body('updates_docente_materias',new ParseArrayPipe({ items: DocenteMateriaUpdateRequest })) 
					  docente_materia_update_requests: Array<DocenteMateriaUpdateRequest>,
					  @Body('updates_columnas',new ParseArrayPipe({ items: String })) 
					  updates_columnas:Array<string>) : Promise<DocenteMateriaReturnView> {	
		try {
			
			this.docente_materias = new Array<DocenteMateria>();
			
			DocenteMateriaUpdateRequest.setDocenteMaterias(docente_materia_update_requests,this.docente_materias);
			
			await this.docente_materia_logici1.actualizars(this.docente_materias,updates_columnas);
			
			this.setReturnView(TipoAccionEnum.ACTUALIZAR);
		
		} catch(e:any) {
			throw e;
		}
		
		return this.docente_materia_return_view;
	}
	
	@Post(Constantes.GUARDAR_CAMBIOS)
	@HttpCode(HttpStatus.OK)
	async guardarCambios(@Body('news_docente_materias') 
						 news_docente_materias: Array<DocenteMateria>,
						 @Body('ids_deletes_docente_materias') 
						 ids_deletes_docente_materias: Array<number>,
						 @Body('updates_docente_materias') 
						 updates_docente_materias: Array<DocenteMateria>,
						 @Body('updates_columnas') 
						 updates_columnas:Array<string>) : Promise<DocenteMateriaReturnView> {	
		try {
			
			/*--- Inserts ---*/
			await this.docente_materia_logici1.nuevos(news_docente_materias);
			
			/*--- Deletes ---*/
			await this.docente_materia_logici1.eliminars(ids_deletes_docente_materias);
			
			/*--- Updates ---*/
			await this.docente_materia_logici1.actualizars(updates_docente_materias,updates_columnas);
						
			this.setReturnView(TipoAccionEnum.GUARDAR_CAMBIOS);			
		
		} catch(e:any) {
			throw e;
		}
		
		return this.docente_materia_return_view;
	}
	
	/*FKs*/
	@Post(Constantes.GET_FKS)
	@HttpCode(HttpStatus.OK)
	async getFks() : Promise<DocenteMateriaFKReturnView> {
		try {
			
			await this.docente_materia_logici1.getFks();				
			
			this.docente_materia_fk_return_view_dto.docentesFK = this.docente_materia_logici1.docentesFK;
			this.docente_materia_fk_return_view_dto.materiasFK = this.docente_materia_logici1.materiasFK;
		
			return this.docente_materia_fk_return_view_dto;
			
		} catch(e:any) {
			throw e;
		}		
	}
	
	
	@Post(Constantes.TODOS_ENTITIES_DTO)
	@HttpCode(HttpStatus.OK)
	@UseInterceptors(ClassSerializerInterceptor)
	async getTodosEntitiesDto(@Body(Constantes.PAGINATION) 
				   pagination1:Pagination) : Promise<Array<DocenteMateria>> {
		
		let docente_materias = new Array<DocenteMateria>();
		
		try {
			
			this.relations1 = {
				/*----- FKs -----*/
				
					docente:true	
					,materia:true									
			};
			
			this.docente_materias = await this.docente_materia_logici1.getTodos(pagination1,this.relations1);
						
		} catch(e:any) {
			throw e;
		}
		
		return docente_materias;
	}
}

export {DocenteMateriaController};
