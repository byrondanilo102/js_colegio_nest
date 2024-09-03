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

import {Contrato} from '../../domain/model/contrato';

import {ContratoLogic} from '../../application/logic/contrato.logic';
import {ContratoLogicI} from '../../application/logic/contrato.logici';
import {ContratoReturnView} from '../../infrastructure/util/return/contrato_return_view.return';

import {ContratoCreateRequest} from '../../infrastructure/util/request/contrato_create.request';
import {ContratoUpdateRequest} from '../../infrastructure/util/request/contrato_update.request';

import {ContratoFKReturnView} from '../../infrastructure/util/return/contrato_fk_return_view.return';

@Controller('/api/colegio_relaciones/financiero/contrato_api')
class ContratoController extends GeneralEntityController {

	pagination1:Pagination;
	relations1:any;
	contrato1:Contrato;
	contratos : Array<Contrato>;
	contrato_return_view:ContratoReturnView;
	result: any;
	
	/*FKs*/
	contrato_fk_return_view_dto:ContratoFKReturnView;
	
	//private contrato_logici1: ContratoLogicI;
		
	builder_object_contrato1:any;
	
	
	constructor(private contrato_logici1: ContratoLogic) {
		super();
		
		this.pagination1 = new Pagination();
		this.contrato1 = new Contrato();
		this.contratos = new Array<Contrato>();
		
			//this.contrato_logici1 = new ContratoLogic();
		
		this.contrato_return_view = new ContratoReturnView();
		
		/*FKs*/
		this.contrato_fk_return_view_dto = new ContratoFKReturnView();
		
		
	}
	
	setReturnView(tipo_accion_enum1:TipoAccionEnum) {
		/*
		this.contratos = this.contrato_logici1.contratos;
		this.contrato1 = this.contrato_logici1.contrato1;				
		*/
		
		this.contrato_return_view.setReturnView(tipo_accion_enum1,this.contrato1,this.contratos);		
	}
	
	//------------------------------ APIs ---------------------------------------
	
	@Post(Constantes.DEFAULT)
	@HttpCode(HttpStatus.OK)
	async getDefault(@Body(Constantes.PAGINATION) 
					 pagination1:Pagination) : Promise<ContratoReturnView> {		
		try {
			
			this.relations1 = {
				/*----- FKs -----*/
				
					docente:true									
			};
			
			this.contratos = await this.contrato_logici1.getTodos(pagination1,this.relations1);
			
			this.setReturnView(TipoAccionEnum.BUSCAR_TODOS);
			
		} catch(e:any) {
			throw e;
		}
		
		return this.contrato_return_view;
	}
	
	@Post(Constantes.INDEX)
	@HttpCode(HttpStatus.OK)
	async getIndex(@Body(Constantes.PAGINATION) 
				   pagination1:Pagination) : Promise<ContratoReturnView> {		
		try {
			
			this.relations1 = {
				/*----- FKs -----*/
				
					docente:true									
			};
			
			this.contratos = await this.contrato_logici1.getTodos(pagination1,this.relations1);
			
			this.setReturnView(TipoAccionEnum.BUSCAR_TODOS);
			
		} catch(e:any) {
			throw e;
		}
		
		return this.contrato_return_view;
	}
	
	@Post(Constantes.TODOS)
	@HttpCode(HttpStatus.OK)
	async getTodos(@Body(Constantes.PAGINATION) 
				   pagination1:Pagination) : Promise<ContratoReturnView> {		
		try {
			
			this.relations1 = {
				/*----- FKs -----*/
				
					docente:true									
			};
			
			this.contratos = await this.contrato_logici1.getTodos(pagination1,this.relations1);
			
			this.setReturnView(TipoAccionEnum.BUSCAR_TODOS);
			
		} catch(e:any) {
			throw e;
		}
		
		return this.contrato_return_view;
	}
	
	@Post(Constantes.BUSCAR)
	@HttpCode(HttpStatus.OK)
	async getBuscar(@Body(Constantes.PAGINATION) 
					pagination1:Pagination,@Req() req:Request) : Promise<ContratoReturnView> {		
		try {
			
			this.relations1 = {
				/*----- FKs -----*/
				
					docente:true									
			};
			
			this.builder_object_contrato1 = this.contrato_logici1.getBuilderFunctionObjectParametroBuscar(req);			
			
			this.contratos = await this.contrato_logici1.getBuscar(this.builder_object_contrato1,pagination1,this.relations1);
			
			this.setReturnView(TipoAccionEnum.BUSCAR);
			
		} catch(e:any) {
			throw e;
		}
		
		return this.contrato_return_view;
	}
	
	@Post(Constantes.SELECCIONAR)
	@HttpCode(HttpStatus.OK)
	async getSeleccionar(@Body(Constantes.ID,ParseIntPipe) 
						 id:number) : Promise<ContratoReturnView> {		
		try {
			
			this.relations1 = {
				/*----- FKs -----*/
				
					docente:true									
			};
			
			this.builder_object_contrato1=this.contrato_logici1.getBuilderFunctionObjectParametroSeleccionar(id);			
			
			this.contrato1 = await this.contrato_logici1.getBuscarUno(this.builder_object_contrato1,this.relations1);
			
			this.setReturnView(TipoAccionEnum.SELECCIONAR);
			
		} catch(e:any) {
			throw e;
		}
		
		return this.contrato_return_view;
	}
	
	@Post(Constantes.NUEVO)
	@HttpCode(HttpStatus.OK)
	async nuevo(@Body(Contrato.CONTRATO) 
				contrato_create_request1:ContratoCreateRequest) : Promise<ContratoReturnView> {		
		try {
			
			this.contrato1 = new Contrato();			
			
			ContratoCreateRequest.setContrato(contrato_create_request1,this.contrato1);
			
			this.result = await this.contrato_logici1.nuevo(this.contrato1);			
			
			this.setReturnView(TipoAccionEnum.NUEVO);
			
		} catch(e:any) {
			throw e;
		}
		
		return this.contrato_return_view;
	}

	@Put(Constantes.ACTUALIZAR)
	@HttpCode(HttpStatus.OK)
	async actualizar(@Body(Contrato.CONTRATO) 
					 contrato_update_request1:ContratoUpdateRequest) : Promise<ContratoReturnView> {	
		try {
			
			ContratoUpdateRequest.setContrato(contrato_update_request1,this.contrato1);
			
			this.result = await this.contrato_logici1.actualizar(this.contrato1);
			
			this.setReturnView(TipoAccionEnum.ACTUALIZAR);			
			
		} catch(e:any) {
			throw e;
		}
		
		return this.contrato_return_view;
	}
	
	@Delete(Constantes.ELIMINAR)
	@HttpCode(HttpStatus.OK)
	async eliminar(@Body(Constantes.ID,ParseIntPipe) 
				   id:number) : Promise<ContratoReturnView> {	
		try {			
			
			this.result = await this.contrato_logici1.eliminar(id);
			
			this.setReturnView(TipoAccionEnum.ELIMINAR);			
			
		} catch(e:any) {
			throw e;
		}
		
		return this.contrato_return_view;
	}
	
	@Post(Constantes.NUEVOS)
	@HttpCode(HttpStatus.OK)
	async nuevos(@Body('news_contratos',new ParseArrayPipe({ items: ContratoCreateRequest })) 
				 contrato_create_requests: Array<ContratoCreateRequest>) : Promise<ContratoReturnView> {		
		try {
			
			this.contratos = new Array<Contrato>();			
			
			ContratoCreateRequest.setContratos(contrato_create_requests,this.contratos);
			
			await this.contrato_logici1.nuevos(this.contratos);
			
			this.setReturnView(TipoAccionEnum.NUEVO);
			
		} catch(e:any) {
			throw e;
		}
		
		return this.contrato_return_view;
	}
	
	@Delete(Constantes.ELIMINARS)
	@HttpCode(HttpStatus.OK)
	async eliminars(@Body('ids_deletes_contratos',new ParseArrayPipe({ items: Number })) 
					ids: Array<number>) : Promise<ContratoReturnView> {	
		try {			
			
			await this.contrato_logici1.eliminars(ids);
			
			this.setReturnView(TipoAccionEnum.ELIMINAR);
			
		} catch(e:any) {
			throw e;
		}
		
		return this.contrato_return_view;
	}
	
	@Put(Constantes.ACTUALIZARS)
	@HttpCode(HttpStatus.OK)
	async actualizars(@Body('updates_contratos',new ParseArrayPipe({ items: ContratoUpdateRequest })) 
					  contrato_update_requests: Array<ContratoUpdateRequest>,
					  @Body('updates_columnas',new ParseArrayPipe({ items: String })) 
					  updates_columnas:Array<string>) : Promise<ContratoReturnView> {	
		try {
			
			this.contratos = new Array<Contrato>();
			
			ContratoUpdateRequest.setContratos(contrato_update_requests,this.contratos);
			
			await this.contrato_logici1.actualizars(this.contratos,updates_columnas);
			
			this.setReturnView(TipoAccionEnum.ACTUALIZAR);
		
		} catch(e:any) {
			throw e;
		}
		
		return this.contrato_return_view;
	}
	
	@Post(Constantes.GUARDAR_CAMBIOS)
	@HttpCode(HttpStatus.OK)
	async guardarCambios(@Body('news_contratos') 
						 news_contratos: Array<Contrato>,
						 @Body('ids_deletes_contratos') 
						 ids_deletes_contratos: Array<number>,
						 @Body('updates_contratos') 
						 updates_contratos: Array<Contrato>,
						 @Body('updates_columnas') 
						 updates_columnas:Array<string>) : Promise<ContratoReturnView> {	
		try {
			
			/*--- Inserts ---*/
			await this.contrato_logici1.nuevos(news_contratos);
			
			/*--- Deletes ---*/
			await this.contrato_logici1.eliminars(ids_deletes_contratos);
			
			/*--- Updates ---*/
			await this.contrato_logici1.actualizars(updates_contratos,updates_columnas);
						
			this.setReturnView(TipoAccionEnum.GUARDAR_CAMBIOS);			
		
		} catch(e:any) {
			throw e;
		}
		
		return this.contrato_return_view;
	}
	
	/*FKs*/
	@Post(Constantes.GET_FKS)
	@HttpCode(HttpStatus.OK)
	async getFks() : Promise<ContratoFKReturnView> {
		try {
			
			await this.contrato_logici1.getFks();				
			
			this.contrato_fk_return_view_dto.docentesFK = this.contrato_logici1.docentesFK;
		
			return this.contrato_fk_return_view_dto;
			
		} catch(e:any) {
			throw e;
		}		
	}
	
	
	@Post(Constantes.TODOS_ENTITIES_DTO)
	@HttpCode(HttpStatus.OK)
	@UseInterceptors(ClassSerializerInterceptor)
	async getTodosEntitiesDto(@Body(Constantes.PAGINATION) 
				   pagination1:Pagination) : Promise<Array<Contrato>> {
		
		let contratos = new Array<Contrato>();
		
		try {
			
			this.relations1 = {
				/*----- FKs -----*/
				
					docente:true									
			};
			
			this.contratos = await this.contrato_logici1.getTodos(pagination1,this.relations1);
						
		} catch(e:any) {
			throw e;
		}
		
		return contratos;
	}
}

export {ContratoController};
