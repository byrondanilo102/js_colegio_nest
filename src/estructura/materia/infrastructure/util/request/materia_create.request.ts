import {IsNotEmpty,IsInt,IsString,IsBoolean,IsBooleanString,IsDate} from 'class-validator';

import {Materia} from '../../../domain/model/materia';

class MateriaCreateRequest {
	
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
	codigo: string;
	
	@IsString()
	@IsNotEmpty()
	nombre: string;
	
	@IsBoolean()
	@IsNotEmpty()
	activo: boolean;
	
	constructor() {
		/*CAMPOS*/
 		this.created_at=new Date();
 		this.updated_at=new Date();
 		this.codigo='';
 		this.nombre='';
 		this.activo=false;
	}
	
	static setMateria(materia_create_request1:MateriaCreateRequest,materia1:Materia) {
		materia1.created_at=materia_create_request1.created_at
		materia1.updated_at=materia_create_request1.updated_at
		materia1.codigo=materia_create_request1.codigo
		materia1.nombre=materia_create_request1.nombre
		materia1.activo=materia_create_request1.activo
	}
	
	static setMaterias(materia_create_requests: Array<MateriaCreateRequest>,materias: Array<Materia>) {
		let materia1:Materia;		
		
		for(let materia_create_request1 of materia_create_requests) {
			materia1 = new Materia();

			MateriaCreateRequest.setMateria(materia_create_request1,materia1);

			materias.push(materia1);
		}
	}
}

export {MateriaCreateRequest};