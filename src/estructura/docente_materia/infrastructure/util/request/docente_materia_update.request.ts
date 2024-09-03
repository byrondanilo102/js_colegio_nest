import {IsNotEmpty,IsInt,IsString,IsBoolean,IsBooleanString,IsDate} from 'class-validator';

import {DocenteMateria} from '../../../domain/model/docente_materia';
class DocenteMateriaUpdateRequest {
		
	@IsInt()
	@IsNotEmpty()
	id: number;	
	/*CAMPOS*/
	
	
	@IsString()
	@IsNotEmpty()
	updated_at: Date;
	
	@IsInt()
	@IsNotEmpty()
	id_docente: number;
	id_docente_descripcion: string;
	
	@IsInt()
	@IsNotEmpty()
	id_materia: number;
	id_materia_descripcion: string;
	
	constructor() {
		this.id=-1;
		/*CAMPOS*/
 		this.updated_at=new Date();
 		this.id_docente=-1;
		this.id_docente_descripcion='';
 		this.id_materia=-1;
		this.id_materia_descripcion='';
	}
	
	static setDocenteMateria(docente_materia_update_request1:DocenteMateriaUpdateRequest,docente_materia1:DocenteMateria) {
		docente_materia1.id=docente_materia_update_request1.id;
		/*CAMPOS*/
 		docente_materia1.updated_at=docente_materia_update_request1.updated_at
 		docente_materia1.id_docente=docente_materia_update_request1.id_docente
 		docente_materia1.id_materia=docente_materia_update_request1.id_materia
	}
	
	static setDocenteMaterias(docente_materia_update_requests: Array<DocenteMateriaUpdateRequest>,docente_materias: Array<DocenteMateria>) {
		let docente_materia1:DocenteMateria;
				
		for(let docente_materia_update_request1 of docente_materia_update_requests) {
			docente_materia1 = new DocenteMateria();

			DocenteMateriaUpdateRequest.setDocenteMateria(docente_materia_update_request1,docente_materia1);

			docente_materias.push(docente_materia1);
		}
	}
}

export {DocenteMateriaUpdateRequest};