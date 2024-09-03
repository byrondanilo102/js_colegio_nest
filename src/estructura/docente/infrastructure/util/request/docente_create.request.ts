import {IsNotEmpty,IsInt,IsString,IsBoolean,IsBooleanString,IsDate} from 'class-validator';

import {Docente} from '../../../domain/model/docente';

class DocenteCreateRequest {
	
	/*id: number;*/
	
	/*CAMPOS*/
	
	@IsString()
	@IsNotEmpty()
	created_at: Date;
	
	@IsString()
	@IsNotEmpty()
	updated_at: Date;
	
	@IsString()
	@IsNotEmpty()
	nombre: string;
	
	@IsString()
	@IsNotEmpty()
	apellido: string;
	
	@IsString()
	@IsNotEmpty()
	fecha_nacimiento: Date;
	
	@IsInt()
	@IsNotEmpty()
	anios_experiencia: number;
	
	@IsInt()
	@IsNotEmpty()
	nota_evaluacion: number;
	
	constructor() {
		/*CAMPOS*/
 		this.created_at=new Date();
 		this.updated_at=new Date();
 		this.nombre='';
 		this.apellido='';
 		this.fecha_nacimiento=new Date();
 		this.anios_experiencia=0;
 		this.nota_evaluacion=0.0;
	}
	
	static setDocente(docente_create_request1:DocenteCreateRequest,docente1:Docente) {
		docente1.created_at=docente_create_request1.created_at
		docente1.updated_at=docente_create_request1.updated_at
		docente1.nombre=docente_create_request1.nombre
		docente1.apellido=docente_create_request1.apellido
		docente1.fecha_nacimiento=docente_create_request1.fecha_nacimiento
		docente1.anios_experiencia=docente_create_request1.anios_experiencia
		docente1.nota_evaluacion=docente_create_request1.nota_evaluacion
	}
	
	static setDocentes(docente_create_requests: Array<DocenteCreateRequest>,docentes: Array<Docente>) {
		let docente1:Docente;		
		
		for(let docente_create_request1 of docente_create_requests) {
			docente1 = new Docente();

			DocenteCreateRequest.setDocente(docente_create_request1,docente1);

			docentes.push(docente1);
		}
	}
}

export {DocenteCreateRequest};