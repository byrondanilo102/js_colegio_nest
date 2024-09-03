import {IsNotEmpty,IsInt,IsString,IsBoolean,IsBooleanString,IsDate} from 'class-validator';

import {Alumno} from '../../../domain/model/alumno';

class AlumnoCreateRequest {
	
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
	
	constructor() {
		/*CAMPOS*/
 		this.created_at=new Date();
 		this.updated_at=new Date();
 		this.nombre='';
 		this.apellido='';
 		this.fecha_nacimiento=new Date();
	}
	
	static setAlumno(alumno_create_request1:AlumnoCreateRequest,alumno1:Alumno) {
		alumno1.created_at=alumno_create_request1.created_at
		alumno1.updated_at=alumno_create_request1.updated_at
		alumno1.nombre=alumno_create_request1.nombre
		alumno1.apellido=alumno_create_request1.apellido
		alumno1.fecha_nacimiento=alumno_create_request1.fecha_nacimiento
	}
	
	static setAlumnos(alumno_create_requests: Array<AlumnoCreateRequest>,alumnos: Array<Alumno>) {
		let alumno1:Alumno;		
		
		for(let alumno_create_request1 of alumno_create_requests) {
			alumno1 = new Alumno();

			AlumnoCreateRequest.setAlumno(alumno_create_request1,alumno1);

			alumnos.push(alumno1);
		}
	}
}

export {AlumnoCreateRequest};