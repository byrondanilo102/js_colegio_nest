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

import {Sueldo} from '../../domain/model/sueldo';

import {SueldoLogic} from '../../application/logic/sueldo.logic';
import {SueldoLogicI} from '../../application/logic/sueldo.logici';
import {SueldoReturnView} from '../../infrastructure/util/return/sueldo_return_view.return';

import {SueldoCreateRequest} from '../../infrastructure/util/request/sueldo_create.request';
import {SueldoUpdateRequest} from '../../infrastructure/util/request/sueldo_update.request';

import {SueldoFKReturnView} from '../../infrastructure/util/return/sueldo_fk_return_view.return';

@Controller('/api/colegio_relaciones/financiero/sueldo_api')
class SueldoController extends GeneralEntityController {

	pagination1:Pagination;
	relations1:any;
	sueldo1:Sueldo;
	sueldos : Array<Sueldo>;
	sueldo_return_view:SueldoReturnView;
	result: any;
	
	/*FKs*/
	sueldo_fk_return_view_dto:SueldoFKReturnView;
	
	//private sueldo_logici1: SueldoLogicI;
		
	builder_object_sueldo1:any;
	
	
	constructor(private sueldo_logici1: SueldoLogic) {
		super();
		
		this.pagination1 = new Pagination();
		this.sueldo1 = new Sueldo();
		this.sueldos = new Array<Sueldo>();
		
			//this.sueldo_logici1 = new SueldoLogic();
		
		this.sueldo_return_view = new SueldoReturnView();
		
		/*FKs*/
		this.sueldo_fk_return_view_dto = new SueldoFKReturnView();
		
		
	}
	
	setReturnView(tipo_accion_enum1:TipoAccionEnum) {
		/*
		this.sueldos = this.sueldo_logici1.sueldos;
		this.sueldo1 = this.sueldo_logici1.sueldo1;				
		*/
		
		this.sueldo_return_view.setReturnView(tipo_accion_enum1,this.sueldo1,this.sueldos);		
	}
	
	//------------------------------ APIs ---------------------------------------
	
	@Post(Constantes.DEFAULT)
	@HttpCode(HttpStatus.OK)
	async getDefault(@Body(Constantes.PAGINATION) 
					 pagination1:Pagination) : Promise<SueldoReturnView> {		
		try {
			
			this.relations1 = {
				/*----- FKs -----*/
				
					docente:true									
			};
			
			this.sueldos = await this.sueldo_logici1.getTodos(pagination1,this.relations1);
			
			this.setReturnView(TipoAccionEnum.BUSCAR_TODOS);
			
		} catch(e:any) {
			throw e;
		}
		
		return this.sueldo_return_view;
	}
	
	@Post(Constantes.INDEX)
	@HttpCode(HttpStatus.OK)
	async getIndex(@Body(Constantes.PAGINATION) 
				   pagination1:Pagination) : Promise<SueldoReturnView> {		
		try {
			
			this.relations1 = {
				/*----- FKs -----*/
				
					docente:true									
			};
			
			this.sueldos = await this.sueldo_logici1.getTodos(pagination1,this.relations1);
			
			this.setReturnView(TipoAccionEnum.BUSCAR_TODOS);
			
		} catch(e:any) {
			throw e;
		}
		
		return this.sueldo_return_view;
	}
	
	@Post(Constantes.TODOS)
	@HttpCode(HttpStatus.OK)
	async getTodos(@Body(Constantes.PAGINATION) 
				   pagination1:Pagination) : Promise<SueldoReturnView> {		
		try {
			
			this.relations1 = {
				/*----- FKs -----*/
				
					docente:true									
			};
			
			this.sueldos = await this.sueldo_logici1.getTodos(pagination1,this.relations1);
			
			this.setReturnView(TipoAccionEnum.BUSCAR_TODOS);
			
		} catch(e:any) {
			throw e;
		}
		
		return this.sueldo_return_view;
	}
	
	@Post(Constantes.BUSCAR)
	@HttpCode(HttpStatus.OK)
	async getBuscar(@Body(Constantes.PAGINATION) 
					pagination1:Pagination,@Req() req:Request) : Promise<SueldoReturnView> {		
		try {
			
			this.relations1 = {
				/*----- FKs -----*/
				
					docente:true									
			};
			
			this.builder_object_sueldo1 = this.sueldo_logici1.getBuilderFunctionObjectParametroBuscar(req);			
			
			this.sueldos = await this.sueldo_logici1.getBuscar(this.builder_object_sueldo1,pagination1,this.relations1);
			
			this.setReturnView(TipoAccionEnum.BUSCAR);
			
		} catch(e:any) {
			throw e;
		}
		
		return this.sueldo_return_view;
	}
	
	@Post(Constantes.SELECCIONAR)
	@HttpCode(HttpStatus.OK)
	async getSeleccionar(@Body(Constantes.ID,ParseIntPipe) 
						 id:number) : Promise<SueldoReturnView> {		
		try {
			
			this.relations1 = {
				/*----- FKs -----*/
				
					docente:true									
			};
			
			this.builder_object_sueldo1=this.sueldo_logici1.getBuilderFunctionObjectParametroSeleccionar(id);			
			
			this.sueldo1 = await this.sueldo_logici1.getBuscarUno(this.builder_object_sueldo1,this.relations1);
			
			this.setReturnView(TipoAccionEnum.SELECCIONAR);
			
		} catch(e:any) {
			throw e;
		}
		
		return this.sueldo_return_view;
	}
	
	@Post(Constantes.NUEVO)
	@HttpCode(HttpStatus.OK)
	async nuevo(@Body(Sueldo.SUELDO) 
				sueldo_create_request1:SueldoCreateRequest) : Promise<SueldoReturnView> {		
		try {
			
			this.sueldo1 = new Sueldo();			
			
			SueldoCreateRequest.setSueldo(sueldo_create_request1,this.sueldo1);
			
			this.result = await this.sueldo_logici1.nuevo(this.sueldo1);			
			
			this.setReturnView(TipoAccionEnum.NUEVO);
			
		} catch(e:any) {
			throw e;
		}
		
		return this.sueldo_return_view;
	}

	@Put(Constantes.ACTUALIZAR)
	@HttpCode(HttpStatus.OK)
	async actualizar(@Body(Sueldo.SUELDO) 
					 sueldo_update_request1:SueldoUpdateRequest) : Promise<SueldoReturnView> {	
		try {
			
			SueldoUpdateRequest.setSueldo(sueldo_update_request1,this.sueldo1);
			
			this.result = await this.sueldo_logici1.actualizar(this.sueldo1);
			
			this.setReturnView(TipoAccionEnum.ACTUALIZAR);			
			
		} catch(e:any) {
			throw e;
		}
		
		return this.sueldo_return_view;
	}
	
	@Delete(Constantes.ELIMINAR)
	@HttpCode(HttpStatus.OK)
	async eliminar(@Body(Constantes.ID,ParseIntPipe) 
				   id:number) : Promise<SueldoReturnView> {	
		try {			
			
			this.result = await this.sueldo_logici1.eliminar(id);
			
			this.setReturnView(TipoAccionEnum.ELIMINAR);			
			
		} catch(e:any) {
			throw e;
		}
		
		return this.sueldo_return_view;
	}
	
	@Post(Constantes.NUEVOS)
	@HttpCode(HttpStatus.OK)
	async nuevos(@Body('news_sueldos',new ParseArrayPipe({ items: SueldoCreateRequest })) 
				 sueldo_create_requests: Array<SueldoCreateRequest>) : Promise<SueldoReturnView> {		
		try {
			
			this.sueldos = new Array<Sueldo>();			
			
			SueldoCreateRequest.setSueldos(sueldo_create_requests,this.sueldos);
			
			await this.sueldo_logici1.nuevos(this.sueldos);
			
			this.setReturnView(TipoAccionEnum.NUEVO);
			
		} catch(e:any) {
			throw e;
		}
		
		return this.sueldo_return_view;
	}
	
	@Delete(Constantes.ELIMINARS)
	@HttpCode(HttpStatus.OK)
	async eliminars(@Body('ids_deletes_sueldos',new ParseArrayPipe({ items: Number })) 
					ids: Array<number>) : Promise<SueldoReturnView> {	
		try {			
			
			await this.sueldo_logici1.eliminars(ids);
			
			this.setReturnView(TipoAccionEnum.ELIMINAR);
			
		} catch(e:any) {
			throw e;
		}
		
		return this.sueldo_return_view;
	}
	
	@Put(Constantes.ACTUALIZARS)
	@HttpCode(HttpStatus.OK)
	async actualizars(@Body('updates_sueldos',new ParseArrayPipe({ items: SueldoUpdateRequest })) 
					  sueldo_update_requests: Array<SueldoUpdateRequest>,
					  @Body('updates_columnas',new ParseArrayPipe({ items: String })) 
					  updates_columnas:Array<string>) : Promise<SueldoReturnView> {	
		try {
			
			this.sueldos = new Array<Sueldo>();
			
			SueldoUpdateRequest.setSueldos(sueldo_update_requests,this.sueldos);
			
			await this.sueldo_logici1.actualizars(this.sueldos,updates_columnas);
			
			this.setReturnView(TipoAccionEnum.ACTUALIZAR);
		
		} catch(e:any) {
			throw e;
		}
		
		return this.sueldo_return_view;
	}
	
	@Post(Constantes.GUARDAR_CAMBIOS)
	@HttpCode(HttpStatus.OK)
	async guardarCambios(@Body('news_sueldos') 
						 news_sueldos: Array<Sueldo>,
						 @Body('ids_deletes_sueldos') 
						 ids_deletes_sueldos: Array<number>,
						 @Body('updates_sueldos') 
						 updates_sueldos: Array<Sueldo>,
						 @Body('updates_columnas') 
						 updates_columnas:Array<string>) : Promise<SueldoReturnView> {	
		try {
			
			/*--- Inserts ---*/
			await this.sueldo_logici1.nuevos(news_sueldos);
			
			/*--- Deletes ---*/
			await this.sueldo_logici1.eliminars(ids_deletes_sueldos);
			
			/*--- Updates ---*/
			await this.sueldo_logici1.actualizars(updates_sueldos,updates_columnas);
						
			this.setReturnView(TipoAccionEnum.GUARDAR_CAMBIOS);			
		
		} catch(e:any) {
			throw e;
		}
		
		return this.sueldo_return_view;
	}
	
	/*FKs*/
	@Post(Constantes.GET_FKS)
	@HttpCode(HttpStatus.OK)
	async getFks() : Promise<SueldoFKReturnView> {
		try {
			
			await this.sueldo_logici1.getFks();				
			
			this.sueldo_fk_return_view_dto.docentesFK = this.sueldo_logici1.docentesFK;
		
			return this.sueldo_fk_return_view_dto;
			
		} catch(e:any) {
			throw e;
		}		
	}
	
	
	@Post(Constantes.TODOS_ENTITIES_DTO)
	@HttpCode(HttpStatus.OK)
	@UseInterceptors(ClassSerializerInterceptor)
	async getTodosEntitiesDto(@Body(Constantes.PAGINATION) 
				   pagination1:Pagination) : Promise<Array<Sueldo>> {
		
		let sueldos = new Array<Sueldo>();
		
		try {
			
			this.relations1 = {
				/*----- FKs -----*/
				
					docente:true									
			};
			
			this.sueldos = await this.sueldo_logici1.getTodos(pagination1,this.relations1);
						
		} catch(e:any) {
			throw e;
		}
		
		return sueldos;
	}
}

export {SueldoController};
