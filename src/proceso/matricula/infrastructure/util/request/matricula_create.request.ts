import {IsNotEmpty,IsInt,IsString,IsBoolean,IsBooleanString,IsDate} from 'class-validator';

import {Matricula} from '../../../domain/model/matricula';

class MatriculaCreateRequest {
	
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
	anio: number;
	
	@IsInt()
	@IsNotEmpty()
	costo: number;
	
	@IsString()
	@IsNotEmpty()
	fecha: Date;
	
	@IsBoolean()
	@IsNotEmpty()
	pagado: boolean;
	
	constructor() {
		/*CAMPOS*/
 		this.created_at=new Date();
 		this.updated_at=new Date();
 		this.anio=0;
 		this.costo=0.0;
 		this.fecha=new Date();
 		this.pagado=false;
	}
	
	static setMatricula(matricula_create_request1:MatriculaCreateRequest,matricula1:Matricula) {
		matricula1.created_at=matricula_create_request1.created_at
		matricula1.updated_at=matricula_create_request1.updated_at
		matricula1.anio=matricula_create_request1.anio
		matricula1.costo=matricula_create_request1.costo
		matricula1.fecha=matricula_create_request1.fecha
		matricula1.pagado=matricula_create_request1.pagado
	}
	
	static setMatriculas(matricula_create_requests: Array<MatriculaCreateRequest>,matriculas: Array<Matricula>) {
		let matricula1:Matricula;		
		
		for(let matricula_create_request1 of matricula_create_requests) {
			matricula1 = new Matricula();

			MatriculaCreateRequest.setMatricula(matricula_create_request1,matricula1);

			matriculas.push(matricula1);
		}
	}
}

export {MatriculaCreateRequest};