import {IsNotEmpty,IsInt,IsString,IsBoolean,IsBooleanString,IsDate} from 'class-validator';

import {Materia} from '../../../domain/model/materia';
class MateriaUpdateRequest {
		
	@IsInt()
	@IsNotEmpty()
	id: number;	
	/*CAMPOS*/
	
	
	@IsString()
	@IsNotEmpty()
	updated_at: Date;
	
	@IsString()
	@IsNotEmpty()
	codigo: string;
	
	@IsString()
	@IsNotEmpty()
	nombre: string;
	
	@IsBoolean()
	@IsNotEmpty()
	activo: boolean;
	
	constructor() {
		this.id=-1;
		/*CAMPOS*/
 		this.updated_at=new Date();
 		this.codigo='';
 		this.nombre='';
 		this.activo=false;
	}
	
	static setMateria(materia_update_request1:MateriaUpdateRequest,materia1:Materia) {
		materia1.id=materia_update_request1.id;
		/*CAMPOS*/
 		materia1.updated_at=materia_update_request1.updated_at
 		materia1.codigo=materia_update_request1.codigo
 		materia1.nombre=materia_update_request1.nombre
 		materia1.activo=materia_update_request1.activo
	}
	
	static setMaterias(materia_update_requests: Array<MateriaUpdateRequest>,materias: Array<Materia>) {
		let materia1:Materia;
				
		for(let materia_update_request1 of materia_update_requests) {
			materia1 = new Materia();

			MateriaUpdateRequest.setMateria(materia_update_request1,materia1);

			materias.push(materia1);
		}
	}
}

export {MateriaUpdateRequest};