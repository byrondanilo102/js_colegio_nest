import {IsNotEmpty,IsInt,IsString,IsBoolean,IsBooleanString,IsDate} from 'class-validator';

import {AlumnoMateria} from '../../../domain/model/alumno_materia';

class AlumnoMateriaCreateRequest {
	
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
	
	constructor() {
		/*CAMPOS*/
 		this.created_at=new Date();
 		this.updated_at=new Date();
 		this.id_alumno=-1;
		this.id_alumno_descripcion='';
 		this.id_materia=-1;
		this.id_materia_descripcion='';
	}
	
	static setAlumnoMateria(alumno_materia_create_request1:AlumnoMateriaCreateRequest,alumno_materia1:AlumnoMateria) {
		alumno_materia1.created_at=alumno_materia_create_request1.created_at
		alumno_materia1.updated_at=alumno_materia_create_request1.updated_at
		alumno_materia1.id_alumno=alumno_materia_create_request1.id_alumno
		alumno_materia1.id_materia=alumno_materia_create_request1.id_materia
	}
	
	static setAlumnoMaterias(alumno_materia_create_requests: Array<AlumnoMateriaCreateRequest>,alumno_materias: Array<AlumnoMateria>) {
		let alumno_materia1:AlumnoMateria;		
		
		for(let alumno_materia_create_request1 of alumno_materia_create_requests) {
			alumno_materia1 = new AlumnoMateria();

			AlumnoMateriaCreateRequest.setAlumnoMateria(alumno_materia_create_request1,alumno_materia1);

			alumno_materias.push(alumno_materia1);
		}
	}
}

export {AlumnoMateriaCreateRequest};