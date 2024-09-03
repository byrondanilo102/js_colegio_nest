import {IsNotEmpty,IsInt,IsString,IsBoolean,IsBooleanString,IsDate} from 'class-validator';

import {Nota} from '../../../domain/model/nota';
class NotaUpdateRequest {
		
	@IsInt()
	@IsNotEmpty()
	id: number;	
	/*CAMPOS*/
	
	
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
		this.id=-1;
		/*CAMPOS*/
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
	
	static setNota(nota_update_request1:NotaUpdateRequest,nota1:Nota) {
		nota1.id=nota_update_request1.id;
		/*CAMPOS*/
 		nota1.updated_at=nota_update_request1.updated_at
 		nota1.id_alumno=nota_update_request1.id_alumno
 		nota1.id_materia=nota_update_request1.id_materia
 		nota1.id_docente=nota_update_request1.id_docente
 		nota1.nota_prueba=nota_update_request1.nota_prueba
 		nota1.nota_trabajo=nota_update_request1.nota_trabajo
 		nota1.nota_examen=nota_update_request1.nota_examen
 		nota1.nota_final=nota_update_request1.nota_final
	}
	
	static setNotas(nota_update_requests: Array<NotaUpdateRequest>,notas: Array<Nota>) {
		let nota1:Nota;
				
		for(let nota_update_request1 of nota_update_requests) {
			nota1 = new Nota();

			NotaUpdateRequest.setNota(nota_update_request1,nota1);

			notas.push(nota1);
		}
	}
}

export {NotaUpdateRequest};