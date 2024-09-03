import {Controller, Get, Post, Put, Delete, 
		Body, Param, Req, Res, Next,
		Query,Render,
		ParseIntPipe, ParseArrayPipe,
		HttpStatus} from '@nestjs/common';

import express, {Request,Response,NextFunction} from "express";

import {Constantes} from "../../../../base/util/constantes";
import {TipoAccionEnum} from "../../../../base/util/tipo_accion_enum";
import {TipoParametroEnum} from "../../../../base/util/tipo_parametro_enum";
import {GeneralEntityController} from "../../../../base/infrastructure/controller/general_entity_controller";
import {Pagination} from "../../../../base/application/logic/pagination";

import {Materia} from "../../domain/model/materia";
import {MateriaLogicI} from "../../application/logic/materia.logici";
import {MateriaLogic} from "../../application/logic/materia.logic";
import {MateriaReturnView} from "../../infrastructure/util/return/materia_return_view.return";

import {MateriaCreateRequest} from '../../infrastructure/util/request/materia_create.request';
import {MateriaUpdateRequest} from '../../infrastructure/util/request/materia_update.request';

@Controller('/colegio_relaciones/estructura/materia')
class MateriaMvcController extends GeneralEntityController {
	
	static URL_BASE:string = '/colegio_relaciones/estructura/materia';
	
	static PATH_PAGINA:string = 'Estructura/Materia/Application/View/MateriaView';
	
	static PATH_SUBPAGINA_FORM:string = 'Estructura/Materia/Application/Component/MateriaFormComp';
	static PATH_SUBPAGINA_TABLE:string = 'Estructura/Materia/Application/Component/MateriaTableComp';
	static PATH_SUBPAGINA_SEARCH:string = 'Estructura/Materia/Application/Component/MateriaSearchComp';
	
	static URL_PARAMS_SELECCIONAR:string = "/:id";
	//Se utiliza desde Formulario y con method=post o get
	//URL_PARAMS no funciona directo con Formulario, es url/accion/luis/sanchez/30
	static URL_PARAMS_BUSCAR:string = "";//"/:created_at-:updated_at-:codigo-:nombre-:activo-";
	static URL_PARAMS_NUEVO:string = "";//"/:created_at-:updated_at-:codigo-:nombre-:activo-";
	static URL_PARAMS_ACTUALIZAR:string = "";//"/:id-:created_at-:updated_at-:codigo-:nombre-:activo-";	
	static URL_PARAMS_ELIMINAR:string = "";//"/:id";		
		
	pagination1:Pagination;
	relations1:any;
	//materia_service1:MateriaService;
	materia_return_view:MateriaReturnView;
	
	materia1:Materia;
	materias: Array<Materia>;
	jmateria1:any;
	builder_function_materia1:any;
	
	accion_busqueda:string = 'todos';
	
	display:string = 'table-row';
	style_id_column:string ='table-row';
	display_actualizar:string ='none';
	display_nuevo:string ='none';
	text_id_aux:number = -1;
	
	paramsView:any = {};
	
	constructor(private materia_service1: MateriaLogic) {		
		super();
		
		this.pagination1 = new Pagination();
		
		//this.materia_service1 = new MateriaService();
		this.materia_return_view = new MateriaReturnView();
		
		this.materia1 = new Materia();
		this.materias = new Array<Materia>();
		
		this.jmateria1={};
		this.builder_function_materia1 = (builder:any) => { builder.where({id : '1'}); };
		
		this.accion_busqueda = 'todos';
		
		this.displayForm(false);
	}
	
	setReturnView(tipo_accion_enum1:TipoAccionEnum) {
		
		if(tipo_accion_enum1 != TipoAccionEnum.CANCELAR && 
			tipo_accion_enum1 != TipoAccionEnum.NUEVO_PREPARAR) {
				
			this.materias = this.materia_service1.materias;
			this.materia1 = this.materia_service1.materia1;				
		}
		
		this.materia_return_view.setReturnView(tipo_accion_enum1,this.materia1,this.materias);		
	}
	
	//------------------------------ MVC ---------------------------------------
	@Get(Constantes.DEFAULT)
	@Render(MateriaMvcController.PATH_PAGINA)
	async getDefault(): Promise<any> {
		
		/*
		@Query(Constantes.S_SKIP) skip:number,
		@Query(Constantes.S_LIMIT) limit:number
		*/
		
		try {			
			
			this.accion_busqueda = 'todos';
			
			this.relations1 = {
			};
			
			this.pagination1 = new Pagination();
			/*this.getPagination(skip,limit);*/
			
			await this.materia_service1.getTodos(this.pagination1,this.relations1);		
			this.setReturnView(TipoAccionEnum.BUSCAR_TODOS);
			
			this.displayForm(false);
		
			this.loadParamsView();
		
		} catch(e:any) {
			throw e;
		}
		
		return this.paramsView;
	}
	
	loadParamsView() {
		this.paramsView = {
			title: 'Materia',
			url_base: MateriaMvcController.URL_BASE,
			accion_busqueda: this.accion_busqueda,
			text_id_aux: this.text_id_aux,
			display: this.display,
			style_id_column: this.style_id_column,
			display_actualizar: this.display_actualizar,
			display_nuevo: this.display_nuevo,
			materia: this.materia1,
			materia_parametro_view: this.materia_return_view
		};
	}
	
	displayForm(con_display) {
		
		if(con_display==true) {
			this.display = 'table-row';
			this.style_id_column = 'table-row';
		} else {
			this.display = 'none';
			this.style_id_column = 'table-row';
		}
	}
	
	@Get(Constantes.INDEX)
	@Render(MateriaMvcController.PATH_PAGINA)
	async getIndex(): Promise<any> {
		
		/*
		@Query(Constantes.S_SKIP) skip:number,
		@Query(Constantes.S_LIMIT) limit:number
		*/
		
		try {			
			
			this.accion_busqueda = 'todos';
			
			this.relations1 = {
			};
			
			this.pagination1 = new Pagination();
			/*this.getPagination(skip,limit);*/
			
			await this.materia_service1.getTodos(this.pagination1,this.relations1);
			this.setReturnView(TipoAccionEnum.BUSCAR_TODOS);
			
			this.displayForm(false);
		
			this.loadParamsView();
		
		} catch(e:any) {
			throw e;
		}
		
		return this.paramsView;
	}

	@Post(Constantes.TODOS)
	@Render(MateriaMvcController.PATH_SUBPAGINA_TABLE)
	async getTodos(@Body(Constantes.PAGINATION) 
				   pagination1: Pagination): Promise<any> {			
		try {
			
			this.accion_busqueda = 'todos';
			
			this.relations1 = {
			};
			
			this.getPagination(pagination1.skip, pagination1.limit);
			await this.materia_service1.getTodos(this.pagination1,this.relations1);
			this.setReturnView(TipoAccionEnum.BUSCAR_TODOS);
			
			this.displayForm(false);
		
			this.loadParamsView();
		
		} catch(e:any) {
			throw e;
		}
		
		return this.paramsView;
	}	
	
	@Post(Constantes.BUSCAR) /*MateriaMvcController.URL_PARAMS_BUSCAR*/
	@Render(MateriaMvcController.PATH_SUBPAGINA_TABLE)
	async getBuscar(@Body(Constantes.PAGINATION) 
					pagination1: Pagination): Promise<any> {
		try {
			
			this.accion_busqueda = 'buscar';
			
			this.relations1 = {
			};
			
			this.getPagination(pagination1.skip, pagination1.limit);
			//this.builder_function_materia1=this.materia_service1.getBuilderFunctionParametroBuscar(req,TipoAccionEnum.BUSCAR);						
			await this.materia_service1.getBuscar(this.builder_function_materia1,this.pagination1,this.relations1);
			this.setReturnView(TipoAccionEnum.BUSCAR);
			
			this.displayForm(false);
		
			this.loadParamsView();
			
		} catch(e:any) {
			throw e;
		}
		
		return this.paramsView;
	}

	@Post(Constantes.SELECCIONAR) /*MateriaMvcController.URL_PARAMS_SELECCIONAR*/
	@Render(MateriaMvcController.PATH_SUBPAGINA_FORM)
	async getSeleccionar(@Body(Constantes.ID_TABLE,ParseIntPipe) 
						 id:number): Promise<any> {					
		try {
			
			this.relations1 = {
			};
			
			this.builder_function_materia1=this.materia_service1.getBuilderFunctionObjectParametroSeleccionar(id);
			
			await this.materia_service1.getBuscarUno(this.builder_function_materia1,this.relations1);			
			
			this.setReturnView(TipoAccionEnum.SELECCIONAR);
			
			this.display_actualizar = 'table-row';
			this.display_nuevo = 'none';
			
			this.displayForm(true);
			
			this.loadParamsView();
		
		} catch(e:any) {
			throw e;
		}
		
		return this.paramsView;
	}
	
	@Post(Constantes.NUEVO_PREPARAR)
	@Render(MateriaMvcController.PATH_SUBPAGINA_FORM)
	async nuevoPreparar() {   		
				
		this.materia1 = new Materia();
		
		this.materia1.created_at = new Date();
		this.materia1.updated_at = new Date();
		
		this.setReturnView(TipoAccionEnum.NUEVO_PREPARAR);
		
		this.display_actualizar = 'none';
		this.display_nuevo = 'table-row';
		
		this.displayForm(true);
		
		this.loadParamsView();
		
		return this.paramsView;
	}	
	
	@Post(Constantes.CANCELAR)
	@Render(MateriaMvcController.PATH_SUBPAGINA_FORM)
	async cancelar() {   		
				
		this.materia1 = new Materia();
			
		this.setReturnView(TipoAccionEnum.CANCELAR);
		
		this.displayForm(false);
		
		this.loadParamsView();
		
		return this.paramsView;
	}
	
	@Post(Constantes.NUEVO) /*MateriaMvcController.URL_PARAMS_NUEVO*/
	@Render(MateriaMvcController.PATH_SUBPAGINA_FORM)
	async nuevo(@Body(Materia.MATERIA) 
				materia_create_request1:MateriaCreateRequest): Promise<any> {		
		try {
			this.relations1 = {
			};
			
			MateriaCreateRequest.setMateria(materia_create_request1,this.materia1);
			
			await this.materia_service1.nuevo(this.materia1);
			
			this.setReturnView(TipoAccionEnum.NUEVO);
			
			this.displayForm(false);
		
			this.loadParamsView();
		
		} catch(e:any) {
			throw e;
		}
		
		return this.paramsView;
	}
	
	@Put(Constantes.ACTUALIZAR) /*MateriaMvcController.URL_PARAMS_ACTUALIZAR*/
	@Render(MateriaMvcController.PATH_SUBPAGINA_FORM)
	async actualizar(@Body(Materia.MATERIA) 
					 materia_update_request1:MateriaUpdateRequest): Promise<any> {	
		try {
			
			this.relations1 = {
			};
			
			MateriaUpdateRequest.setMateria(materia_update_request1,this.materia1);
			
			await this.materia_service1.actualizar(this.materia1);
			
			this.setReturnView(TipoAccionEnum.ACTUALIZAR);
			
			this.displayForm(false);
		
			this.loadParamsView();
		
		} catch(e:any) {
			throw e;
		}
		
		return this.paramsView;
	}
	
	@Delete(Constantes.ELIMINAR) /*MateriaMvcController.URL_PARAMS_ELIMINAR*/
	@Render(MateriaMvcController.PATH_SUBPAGINA_FORM)
	async eliminar(@Body(Constantes.ID,ParseIntPipe) 
				   id:number): Promise<any> {
		try {
			this.relations1 = {
			};
			
			await this.materia_service1.eliminar(id);						
			this.setReturnView(TipoAccionEnum.ELIMINAR);
			
			this.displayForm(false);
		
			this.loadParamsView();
		
		} catch(e:any) {
			throw e;
		}
		
		return this.paramsView;
	}
	
	getPagination(skip:number, limit:number) {
		this.pagination1.skip = skip;
		this.pagination1.limit = limit;
	}
}

export {MateriaMvcController};
