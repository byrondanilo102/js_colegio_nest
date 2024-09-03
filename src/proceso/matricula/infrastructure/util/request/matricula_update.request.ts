import {IsNotEmpty,IsInt,IsString,IsBoolean,IsBooleanString,IsDate} from 'class-validator';

import {Matricula} from '../../../domain/model/matricula';
class MatriculaUpdateRequest {
		
	@IsInt()
	@IsNotEmpty()
	id: number;	
	/*CAMPOS*/
	
	
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
		this.id=-1;
		/*CAMPOS*/
 		this.updated_at=new Date();
 		this.anio=0;
 		this.costo=0.0;
 		this.fecha=new Date();
 		this.pagado=false;
	}
	
	static setMatricula(matricula_update_request1:MatriculaUpdateRequest,matricula1:Matricula) {
		matricula1.id=matricula_update_request1.id;
		/*CAMPOS*/
 		matricula1.updated_at=matricula_update_request1.updated_at
 		matricula1.anio=matricula_update_request1.anio
 		matricula1.costo=matricula_update_request1.costo
 		matricula1.fecha=matricula_update_request1.fecha
 		matricula1.pagado=matricula_update_request1.pagado
	}
	
	static setMatriculas(matricula_update_requests: Array<MatriculaUpdateRequest>,matriculas: Array<Matricula>) {
		let matricula1:Matricula;
				
		for(let matricula_update_request1 of matricula_update_requests) {
			matricula1 = new Matricula();

			MatriculaUpdateRequest.setMatricula(matricula_update_request1,matricula1);

			matriculas.push(matricula1);
		}
	}
}

export {MatriculaUpdateRequest};