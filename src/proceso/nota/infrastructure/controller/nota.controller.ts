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

import {Nota} from '../../domain/model/nota';

import {NotaLogic} from '../../application/logic/nota.logic';
import {NotaLogicI} from '../../application/logic/nota.logici';
import {NotaReturnView} from '../../infrastructure/util/return/nota_return_view.return';

import {NotaCreateRequest} from '../../infrastructure/util/request/nota_create.request';
import {NotaUpdateRequest} from '../../infrastructure/util/request/nota_update.request';

import {NotaFKReturnView} from '../../infrastructure/util/return/nota_fk_return_view.return';

@Controller('/api/colegio_relaciones/proceso/nota_api')
class NotaController extends GeneralEntityController {

	pagination1:Pagination;
	relations1:any;
	nota1:Nota;
	notas : Array<Nota>;
	nota_return_view:NotaReturnView;
	result: any;
	
	/*FKs*/
	nota_fk_return_view_dto:NotaFKReturnView;
	
	//private nota_logici1: NotaLogicI;
		
	builder_object_nota1:any;
	
	
	constructor(private nota_logici1: NotaLogic) {
		super();
		
		this.pagination1 = new Pagination();
		this.nota1 = new Nota();
		this.notas = new Array<Nota>();
		
			//this.nota_logici1 = new NotaLogic();
		
		this.nota_return_view = new NotaReturnView();
		
		/*FKs*/
		this.nota_fk_return_view_dto = new NotaFKReturnView();
		
		
	}
	
	setReturnView(tipo_accion_enum1:TipoAccionEnum) {
		/*
		this.notas = this.nota_logici1.notas;
		this.nota1 = this.nota_logici1.nota1;				
		*/
		
		this.nota_return_view.setReturnView(tipo_accion_enum1,this.nota1,this.notas);		
	}
	
	//------------------------------ APIs ---------------------------------------
	
	@Post(Constantes.DEFAULT)
	@HttpCode(HttpStatus.OK)
	async getDefault(@Body(Constantes.PAGINATION) 
					 pagination1:Pagination) : Promise<NotaReturnView> {		
		try {
			
			this.relations1 = {
				/*----- FKs -----*/
				
					alumno:true	
					,materia:true	
					,docente:true									
			};
			
			this.notas = await this.nota_logici1.getTodos(pagination1,this.relations1);
			
			this.setReturnView(TipoAccionEnum.BUSCAR_TODOS);
			
		} catch(e:any) {
			throw e;
		}
		
		return this.nota_return_view;
	}
	
	@Post(Constantes.INDEX)
	@HttpCode(HttpStatus.OK)
	async getIndex(@Body(Constantes.PAGINATION) 
				   pagination1:Pagination) : Promise<NotaReturnView> {		
		try {
			
			this.relations1 = {
				/*----- FKs -----*/
				
					alumno:true	
					,materia:true	
					,docente:true									
			};
			
			this.notas = await this.nota_logici1.getTodos(pagination1,this.relations1);
			
			this.setReturnView(TipoAccionEnum.BUSCAR_TODOS);
			
		} catch(e:any) {
			throw e;
		}
		
		return this.nota_return_view;
	}
	
	@Post(Constantes.TODOS)
	@HttpCode(HttpStatus.OK)
	async getTodos(@Body(Constantes.PAGINATION) 
				   pagination1:Pagination) : Promise<NotaReturnView> {		
		try {
			
			this.relations1 = {
				/*----- FKs -----*/
				
					alumno:true	
					,materia:true	
					,docente:true									
			};
			
			this.notas = await this.nota_logici1.getTodos(pagination1,this.relations1);
			
			this.setReturnView(TipoAccionEnum.BUSCAR_TODOS);
			
		} catch(e:any) {
			throw e;
		}
		
		return this.nota_return_view;
	}
	
	@Post(Constantes.BUSCAR)
	@HttpCode(HttpStatus.OK)
	async getBuscar(@Body(Constantes.PAGINATION) 
					pagination1:Pagination,@Req() req:Request) : Promise<NotaReturnView> {		
		try {
			
			this.relations1 = {
				/*----- FKs -----*/
				
					alumno:true	
					,materia:true	
					,docente:true									
			};
			
			this.builder_object_nota1 = this.nota_logici1.getBuilderFunctionObjectParametroBuscar(req);			
			
			this.notas = await this.nota_logici1.getBuscar(this.builder_object_nota1,pagination1,this.relations1);
			
			this.setReturnView(TipoAccionEnum.BUSCAR);
			
		} catch(e:any) {
			throw e;
		}
		
		return this.nota_return_view;
	}
	
	@Post(Constantes.SELECCIONAR)
	@HttpCode(HttpStatus.OK)
	async getSeleccionar(@Body(Constantes.ID,ParseIntPipe) 
						 id:number) : Promise<NotaReturnView> {		
		try {
			
			this.relations1 = {
				/*----- FKs -----*/
				
					alumno:true	
					,materia:true	
					,docente:true									
			};
			
			this.builder_object_nota1=this.nota_logici1.getBuilderFunctionObjectParametroSeleccionar(id);			
			
			this.nota1 = await this.nota_logici1.getBuscarUno(this.builder_object_nota1,this.relations1);
			
			this.setReturnView(TipoAccionEnum.SELECCIONAR);
			
		} catch(e:any) {
			throw e;
		}
		
		return this.nota_return_view;
	}
	
	@Post(Constantes.NUEVO)
	@HttpCode(HttpStatus.OK)
	async nuevo(@Body(Nota.NOTA) 
				nota_create_request1:NotaCreateRequest) : Promise<NotaReturnView> {		
		try {
			
			this.nota1 = new Nota();			
			
			NotaCreateRequest.setNota(nota_create_request1,this.nota1);
			
			this.result = await this.nota_logici1.nuevo(this.nota1);			
			
			this.setReturnView(TipoAccionEnum.NUEVO);
			
		} catch(e:any) {
			throw e;
		}
		
		return this.nota_return_view;
	}

	@Put(Constantes.ACTUALIZAR)
	@HttpCode(HttpStatus.OK)
	async actualizar(@Body(Nota.NOTA) 
					 nota_update_request1:NotaUpdateRequest) : Promise<NotaReturnView> {	
		try {
			
			NotaUpdateRequest.setNota(nota_update_request1,this.nota1);
			
			this.result = await this.nota_logici1.actualizar(this.nota1);
			
			this.setReturnView(TipoAccionEnum.ACTUALIZAR);			
			
		} catch(e:any) {
			throw e;
		}
		
		return this.nota_return_view;
	}
	
	@Delete(Constantes.ELIMINAR)
	@HttpCode(HttpStatus.OK)
	async eliminar(@Body(Constantes.ID,ParseIntPipe) 
				   id:number) : Promise<NotaReturnView> {	
		try {			
			
			this.result = await this.nota_logici1.eliminar(id);
			
			this.setReturnView(TipoAccionEnum.ELIMINAR);			
			
		} catch(e:any) {
			throw e;
		}
		
		return this.nota_return_view;
	}
	
	@Post(Constantes.NUEVOS)
	@HttpCode(HttpStatus.OK)
	async nuevos(@Body('news_notas',new ParseArrayPipe({ items: NotaCreateRequest })) 
				 nota_create_requests: Array<NotaCreateRequest>) : Promise<NotaReturnView> {		
		try {
			
			this.notas = new Array<Nota>();			
			
			NotaCreateRequest.setNotas(nota_create_requests,this.notas);
			
			await this.nota_logici1.nuevos(this.notas);
			
			this.setReturnView(TipoAccionEnum.NUEVO);
			
		} catch(e:any) {
			throw e;
		}
		
		return this.nota_return_view;
	}
	
	@Delete(Constantes.ELIMINARS)
	@HttpCode(HttpStatus.OK)
	async eliminars(@Body('ids_deletes_notas',new ParseArrayPipe({ items: Number })) 
					ids: Array<number>) : Promise<NotaReturnView> {	
		try {			
			
			await this.nota_logici1.eliminars(ids);
			
			this.setReturnView(TipoAccionEnum.ELIMINAR);
			
		} catch(e:any) {
			throw e;
		}
		
		return this.nota_return_view;
	}
	
	@Put(Constantes.ACTUALIZARS)
	@HttpCode(HttpStatus.OK)
	async actualizars(@Body('updates_notas',new ParseArrayPipe({ items: NotaUpdateRequest })) 
					  nota_update_requests: Array<NotaUpdateRequest>,
					  @Body('updates_columnas',new ParseArrayPipe({ items: String })) 
					  updates_columnas:Array<string>) : Promise<NotaReturnView> {	
		try {
			
			this.notas = new Array<Nota>();
			
			NotaUpdateRequest.setNotas(nota_update_requests,this.notas);
			
			await this.nota_logici1.actualizars(this.notas,updates_columnas);
			
			this.setReturnView(TipoAccionEnum.ACTUALIZAR);
		
		} catch(e:any) {
			throw e;
		}
		
		return this.nota_return_view;
	}
	
	@Post(Constantes.GUARDAR_CAMBIOS)
	@HttpCode(HttpStatus.OK)
	async guardarCambios(@Body('news_notas') 
						 news_notas: Array<Nota>,
						 @Body('ids_deletes_notas') 
						 ids_deletes_notas: Array<number>,
						 @Body('updates_notas') 
						 updates_notas: Array<Nota>,
						 @Body('updates_columnas') 
						 updates_columnas:Array<string>) : Promise<NotaReturnView> {	
		try {
			
			/*--- Inserts ---*/
			await this.nota_logici1.nuevos(news_notas);
			
			/*--- Deletes ---*/
			await this.nota_logici1.eliminars(ids_deletes_notas);
			
			/*--- Updates ---*/
			await this.nota_logici1.actualizars(updates_notas,updates_columnas);
						
			this.setReturnView(TipoAccionEnum.GUARDAR_CAMBIOS);			
		
		} catch(e:any) {
			throw e;
		}
		
		return this.nota_return_view;
	}
	
	/*FKs*/
	@Post(Constantes.GET_FKS)
	@HttpCode(HttpStatus.OK)
	async getFks() : Promise<NotaFKReturnView> {
		try {
			
			await this.nota_logici1.getFks();				
			
			this.nota_fk_return_view_dto.alumnosFK = this.nota_logici1.alumnosFK;
			this.nota_fk_return_view_dto.materiasFK = this.nota_logici1.materiasFK;
			this.nota_fk_return_view_dto.docentesFK = this.nota_logici1.docentesFK;
		
			return this.nota_fk_return_view_dto;
			
		} catch(e:any) {
			throw e;
		}		
	}
	
	
	@Post(Constantes.TODOS_ENTITIES_DTO)
	@HttpCode(HttpStatus.OK)
	@UseInterceptors(ClassSerializerInterceptor)
	async getTodosEntitiesDto(@Body(Constantes.PAGINATION) 
				   pagination1:Pagination) : Promise<Array<Nota>> {
		
		let notas = new Array<Nota>();
		
		try {
			
			this.relations1 = {
				/*----- FKs -----*/
				
					alumno:true	
					,materia:true	
					,docente:true									
			};
			
			this.notas = await this.nota_logici1.getTodos(pagination1,this.relations1);
						
		} catch(e:any) {
			throw e;
		}
		
		return notas;
	}
}

export {NotaController};
