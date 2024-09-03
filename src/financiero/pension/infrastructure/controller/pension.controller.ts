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

import {Pension} from '../../domain/model/pension';

import {PensionLogic} from '../../application/logic/pension.logic';
import {PensionLogicI} from '../../application/logic/pension.logici';
import {PensionReturnView} from '../../infrastructure/util/return/pension_return_view.return';

import {PensionCreateRequest} from '../../infrastructure/util/request/pension_create.request';
import {PensionUpdateRequest} from '../../infrastructure/util/request/pension_update.request';

import {PensionFKReturnView} from '../../infrastructure/util/return/pension_fk_return_view.return';

@Controller('/api/colegio_relaciones/financiero/pension_api')
class PensionController extends GeneralEntityController {

	pagination1:Pagination;
	relations1:any;
	pension1:Pension;
	pensions : Array<Pension>;
	pension_return_view:PensionReturnView;
	result: any;
	
	/*FKs*/
	pension_fk_return_view_dto:PensionFKReturnView;
	
	//private pension_logici1: PensionLogicI;
		
	builder_object_pension1:any;
	
	
	constructor(private pension_logici1: PensionLogic) {
		super();
		
		this.pagination1 = new Pagination();
		this.pension1 = new Pension();
		this.pensions = new Array<Pension>();
		
			//this.pension_logici1 = new PensionLogic();
		
		this.pension_return_view = new PensionReturnView();
		
		/*FKs*/
		this.pension_fk_return_view_dto = new PensionFKReturnView();
		
		
	}
	
	setReturnView(tipo_accion_enum1:TipoAccionEnum) {
		/*
		this.pensions = this.pension_logici1.pensions;
		this.pension1 = this.pension_logici1.pension1;				
		*/
		
		this.pension_return_view.setReturnView(tipo_accion_enum1,this.pension1,this.pensions);		
	}
	
	//------------------------------ APIs ---------------------------------------
	
	@Post(Constantes.DEFAULT)
	@HttpCode(HttpStatus.OK)
	async getDefault(@Body(Constantes.PAGINATION) 
					 pagination1:Pagination) : Promise<PensionReturnView> {		
		try {
			
			this.relations1 = {
				/*----- FKs -----*/
				
					alumno:true									
			};
			
			this.pensions = await this.pension_logici1.getTodos(pagination1,this.relations1);
			
			this.setReturnView(TipoAccionEnum.BUSCAR_TODOS);
			
		} catch(e:any) {
			throw e;
		}
		
		return this.pension_return_view;
	}
	
	@Post(Constantes.INDEX)
	@HttpCode(HttpStatus.OK)
	async getIndex(@Body(Constantes.PAGINATION) 
				   pagination1:Pagination) : Promise<PensionReturnView> {		
		try {
			
			this.relations1 = {
				/*----- FKs -----*/
				
					alumno:true									
			};
			
			this.pensions = await this.pension_logici1.getTodos(pagination1,this.relations1);
			
			this.setReturnView(TipoAccionEnum.BUSCAR_TODOS);
			
		} catch(e:any) {
			throw e;
		}
		
		return this.pension_return_view;
	}
	
	@Post(Constantes.TODOS)
	@HttpCode(HttpStatus.OK)
	async getTodos(@Body(Constantes.PAGINATION) 
				   pagination1:Pagination) : Promise<PensionReturnView> {		
		try {
			
			this.relations1 = {
				/*----- FKs -----*/
				
					alumno:true									
			};
			
			this.pensions = await this.pension_logici1.getTodos(pagination1,this.relations1);
			
			this.setReturnView(TipoAccionEnum.BUSCAR_TODOS);
			
		} catch(e:any) {
			throw e;
		}
		
		return this.pension_return_view;
	}
	
	@Post(Constantes.BUSCAR)
	@HttpCode(HttpStatus.OK)
	async getBuscar(@Body(Constantes.PAGINATION) 
					pagination1:Pagination,@Req() req:Request) : Promise<PensionReturnView> {		
		try {
			
			this.relations1 = {
				/*----- FKs -----*/
				
					alumno:true									
			};
			
			this.builder_object_pension1 = this.pension_logici1.getBuilderFunctionObjectParametroBuscar(req);			
			
			this.pensions = await this.pension_logici1.getBuscar(this.builder_object_pension1,pagination1,this.relations1);
			
			this.setReturnView(TipoAccionEnum.BUSCAR);
			
		} catch(e:any) {
			throw e;
		}
		
		return this.pension_return_view;
	}
	
	@Post(Constantes.SELECCIONAR)
	@HttpCode(HttpStatus.OK)
	async getSeleccionar(@Body(Constantes.ID,ParseIntPipe) 
						 id:number) : Promise<PensionReturnView> {		
		try {
			
			this.relations1 = {
				/*----- FKs -----*/
				
					alumno:true									
			};
			
			this.builder_object_pension1=this.pension_logici1.getBuilderFunctionObjectParametroSeleccionar(id);			
			
			this.pension1 = await this.pension_logici1.getBuscarUno(this.builder_object_pension1,this.relations1);
			
			this.setReturnView(TipoAccionEnum.SELECCIONAR);
			
		} catch(e:any) {
			throw e;
		}
		
		return this.pension_return_view;
	}
	
	@Post(Constantes.NUEVO)
	@HttpCode(HttpStatus.OK)
	async nuevo(@Body(Pension.PENSION) 
				pension_create_request1:PensionCreateRequest) : Promise<PensionReturnView> {		
		try {
			
			this.pension1 = new Pension();			
			
			PensionCreateRequest.setPension(pension_create_request1,this.pension1);
			
			this.result = await this.pension_logici1.nuevo(this.pension1);			
			
			this.setReturnView(TipoAccionEnum.NUEVO);
			
		} catch(e:any) {
			throw e;
		}
		
		return this.pension_return_view;
	}

	@Put(Constantes.ACTUALIZAR)
	@HttpCode(HttpStatus.OK)
	async actualizar(@Body(Pension.PENSION) 
					 pension_update_request1:PensionUpdateRequest) : Promise<PensionReturnView> {	
		try {
			
			PensionUpdateRequest.setPension(pension_update_request1,this.pension1);
			
			this.result = await this.pension_logici1.actualizar(this.pension1);
			
			this.setReturnView(TipoAccionEnum.ACTUALIZAR);			
			
		} catch(e:any) {
			throw e;
		}
		
		return this.pension_return_view;
	}
	
	@Delete(Constantes.ELIMINAR)
	@HttpCode(HttpStatus.OK)
	async eliminar(@Body(Constantes.ID,ParseIntPipe) 
				   id:number) : Promise<PensionReturnView> {	
		try {			
			
			this.result = await this.pension_logici1.eliminar(id);
			
			this.setReturnView(TipoAccionEnum.ELIMINAR);			
			
		} catch(e:any) {
			throw e;
		}
		
		return this.pension_return_view;
	}
	
	@Post(Constantes.NUEVOS)
	@HttpCode(HttpStatus.OK)
	async nuevos(@Body('news_pensions',new ParseArrayPipe({ items: PensionCreateRequest })) 
				 pension_create_requests: Array<PensionCreateRequest>) : Promise<PensionReturnView> {		
		try {
			
			this.pensions = new Array<Pension>();			
			
			PensionCreateRequest.setPensions(pension_create_requests,this.pensions);
			
			await this.pension_logici1.nuevos(this.pensions);
			
			this.setReturnView(TipoAccionEnum.NUEVO);
			
		} catch(e:any) {
			throw e;
		}
		
		return this.pension_return_view;
	}
	
	@Delete(Constantes.ELIMINARS)
	@HttpCode(HttpStatus.OK)
	async eliminars(@Body('ids_deletes_pensions',new ParseArrayPipe({ items: Number })) 
					ids: Array<number>) : Promise<PensionReturnView> {	
		try {			
			
			await this.pension_logici1.eliminars(ids);
			
			this.setReturnView(TipoAccionEnum.ELIMINAR);
			
		} catch(e:any) {
			throw e;
		}
		
		return this.pension_return_view;
	}
	
	@Put(Constantes.ACTUALIZARS)
	@HttpCode(HttpStatus.OK)
	async actualizars(@Body('updates_pensions',new ParseArrayPipe({ items: PensionUpdateRequest })) 
					  pension_update_requests: Array<PensionUpdateRequest>,
					  @Body('updates_columnas',new ParseArrayPipe({ items: String })) 
					  updates_columnas:Array<string>) : Promise<PensionReturnView> {	
		try {
			
			this.pensions = new Array<Pension>();
			
			PensionUpdateRequest.setPensions(pension_update_requests,this.pensions);
			
			await this.pension_logici1.actualizars(this.pensions,updates_columnas);
			
			this.setReturnView(TipoAccionEnum.ACTUALIZAR);
		
		} catch(e:any) {
			throw e;
		}
		
		return this.pension_return_view;
	}
	
	@Post(Constantes.GUARDAR_CAMBIOS)
	@HttpCode(HttpStatus.OK)
	async guardarCambios(@Body('news_pensions') 
						 news_pensions: Array<Pension>,
						 @Body('ids_deletes_pensions') 
						 ids_deletes_pensions: Array<number>,
						 @Body('updates_pensions') 
						 updates_pensions: Array<Pension>,
						 @Body('updates_columnas') 
						 updates_columnas:Array<string>) : Promise<PensionReturnView> {	
		try {
			
			/*--- Inserts ---*/
			await this.pension_logici1.nuevos(news_pensions);
			
			/*--- Deletes ---*/
			await this.pension_logici1.eliminars(ids_deletes_pensions);
			
			/*--- Updates ---*/
			await this.pension_logici1.actualizars(updates_pensions,updates_columnas);
						
			this.setReturnView(TipoAccionEnum.GUARDAR_CAMBIOS);			
		
		} catch(e:any) {
			throw e;
		}
		
		return this.pension_return_view;
	}
	
	/*FKs*/
	@Post(Constantes.GET_FKS)
	@HttpCode(HttpStatus.OK)
	async getFks() : Promise<PensionFKReturnView> {
		try {
			
			await this.pension_logici1.getFks();				
			
			this.pension_fk_return_view_dto.alumnosFK = this.pension_logici1.alumnosFK;
		
			return this.pension_fk_return_view_dto;
			
		} catch(e:any) {
			throw e;
		}		
	}
	
	
	@Post(Constantes.TODOS_ENTITIES_DTO)
	@HttpCode(HttpStatus.OK)
	@UseInterceptors(ClassSerializerInterceptor)
	async getTodosEntitiesDto(@Body(Constantes.PAGINATION) 
				   pagination1:Pagination) : Promise<Array<Pension>> {
		
		let pensions = new Array<Pension>();
		
		try {
			
			this.relations1 = {
				/*----- FKs -----*/
				
					alumno:true									
			};
			
			this.pensions = await this.pension_logici1.getTodos(pagination1,this.relations1);
						
		} catch(e:any) {
			throw e;
		}
		
		return pensions;
	}
}

export {PensionController};
