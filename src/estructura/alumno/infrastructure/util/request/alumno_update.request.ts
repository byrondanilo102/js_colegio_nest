import {IsNotEmpty,IsInt,IsString,IsBoolean,IsBooleanString,IsDate} from 'class-validator';

import {Alumno} from '../../../domain/model/alumno';
class AlumnoUpdateRequest {
		
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
	
	constructor() {
		this.id=-1;
		/*CAMPOS*/
 		this.updated_at=new Date();
 		this.nombre='';
 		this.apellido='';
 		this.fecha_nacimiento=new Date();
	}
	
	static setAlumno(alumno_update_request1:AlumnoUpdateRequest,alumno1:Alumno) {
		alumno1.id=alumno_update_request1.id;
		/*CAMPOS*/
 		alumno1.updated_at=alumno_update_request1.updated_at
 		alumno1.nombre=alumno_update_request1.nombre
 		alumno1.apellido=alumno_update_request1.apellido
 		alumno1.fecha_nacimiento=alumno_update_request1.fecha_nacimiento
	}
	
	static setAlumnos(alumno_update_requests: Array<AlumnoUpdateRequest>,alumnos: Array<Alumno>) {
		let alumno1:Alumno;
				
		for(let alumno_update_request1 of alumno_update_requests) {
			alumno1 = new Alumno();

			AlumnoUpdateRequest.setAlumno(alumno_update_request1,alumno1);

			alumnos.push(alumno1);
		}
	}
}

export {AlumnoUpdateRequest};