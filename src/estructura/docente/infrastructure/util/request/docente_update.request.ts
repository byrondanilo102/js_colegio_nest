import {IsNotEmpty,IsInt,IsString,IsBoolean,IsBooleanString,IsDate} from 'class-validator';

import {Docente} from '../../../domain/model/docente';
class DocenteUpdateRequest {
		
	@IsInt()
	@IsNotEmpty()
	id: number;	
	/*CAMPOS*/
	
	
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
		this.id=-1;
		/*CAMPOS*/
 		this.updated_at=new Date();
 		this.nombre='';
 		this.apellido='';
 		this.fecha_nacimiento=new Date();
 		this.anios_experiencia=0;
 		this.nota_evaluacion=0.0;
	}
	
	static setDocente(docente_update_request1:DocenteUpdateRequest,docente1:Docente) {
		docente1.id=docente_update_request1.id;
		/*CAMPOS*/
 		docente1.updated_at=docente_update_request1.updated_at
 		docente1.nombre=docente_update_request1.nombre
 		docente1.apellido=docente_update_request1.apellido
 		docente1.fecha_nacimiento=docente_update_request1.fecha_nacimiento
 		docente1.anios_experiencia=docente_update_request1.anios_experiencia
 		docente1.nota_evaluacion=docente_update_request1.nota_evaluacion
	}
	
	static setDocentes(docente_update_requests: Array<DocenteUpdateRequest>,docentes: Array<Docente>) {
		let docente1:Docente;
				
		for(let docente_update_request1 of docente_update_requests) {
			docente1 = new Docente();

			DocenteUpdateRequest.setDocente(docente_update_request1,docente1);

			docentes.push(docente1);
		}
	}
}

export {DocenteUpdateRequest};