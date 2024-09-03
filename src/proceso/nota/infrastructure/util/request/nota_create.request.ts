import {IsNotEmpty,IsInt,IsString,IsBoolean,IsBooleanString,IsDate} from 'class-validator';

import {Nota} from '../../../domain/model/nota';

class NotaCreateRequest {
	
	/*id: number;*/
	
	/*CAMPOS*/
	
	@IsString()
	@IsNotEmpty()
	created_at: Date;
	
	@IsString()
	@IsNotEmpty()
	updated_at: Date;
	
	@IsInt()
	@IsNotEmpty()
	id_alumno: number;
	id_alumno_descripcion: string;
	
	@IsInt()
	@IsNotEmpty()
	id_materia: number;
	id_materia_descripcion: string;
	
	@IsInt()
	@IsNotEmpty()
	id_docente: number;
	id_docente_descripcion: string;
	
	@IsInt()
	@IsNotEmpty()
	nota_prueba: number;
	
	@IsInt()
	@IsNotEmpty()
	nota_trabajo: number;
	
	@IsInt()
	@IsNotEmpty()
	nota_examen: number;
	
	@IsInt()
	@IsNotEmpty()
	nota_final: number;
	
	constructor() {
		/*CAMPOS*/
 		this.created_at=new Date();
 		this.updated_at=new Date();
 		this.id_alumno=-1;
		this.id_alumno_descripcion='';
 		this.id_materia=-1;
		this.id_materia_descripcion='';
 		this.id_docente=-1;
		this.id_docente_descripcion='';
 		this.nota_prueba=0.0;
 		this.nota_trabajo=0.0;
 		this.nota_examen=0.0;
 		this.nota_final=0.0;
	}
	
	static setNota(nota_create_request1:NotaCreateRequest,nota1:Nota) {
		nota1.created_at=nota_create_request1.created_at
		nota1.updated_at=nota_create_request1.updated_at
		nota1.id_alumno=nota_create_request1.id_alumno
		nota1.id_materia=nota_create_request1.id_materia
		nota1.id_docente=nota_create_request1.id_docente
		nota1.nota_prueba=nota_create_request1.nota_prueba
		nota1.nota_trabajo=nota_create_request1.nota_trabajo
		nota1.nota_examen=nota_create_request1.nota_examen
		nota1.nota_final=nota_create_request1.nota_final
	}
	
	static setNotas(nota_create_requests: Array<NotaCreateRequest>,notas: Array<Nota>) {
		let nota1:Nota;		
		
		for(let nota_create_request1 of nota_create_requests) {
			nota1 = new Nota();

			NotaCreateRequest.setNota(nota_create_request1,nota1);

			notas.push(nota1);
		}
	}
}

export {NotaCreateRequest};