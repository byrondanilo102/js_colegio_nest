import {IsNotEmpty,IsInt,IsString,IsBoolean,IsBooleanString,IsDate} from 'class-validator';

import {Sueldo} from '../../../domain/model/sueldo';

class SueldoCreateRequest {
	
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
	id_docente: number;
	id_docente_descripcion: string;
	
	@IsInt()
	@IsNotEmpty()
	anio: number;
	
	@IsInt()
	@IsNotEmpty()
	mes: number;
	
	@IsInt()
	@IsNotEmpty()
	valor: number;
	
	@IsBoolean()
	@IsNotEmpty()
	cobrado: boolean;
	
	constructor() {
		/*CAMPOS*/
 		this.created_at=new Date();
 		this.updated_at=new Date();
 		this.id_docente=-1;
		this.id_docente_descripcion='';
 		this.anio=0;
 		this.mes=0;
 		this.valor=0.0;
 		this.cobrado=false;
	}
	
	static setSueldo(sueldo_create_request1:SueldoCreateRequest,sueldo1:Sueldo) {
		sueldo1.created_at=sueldo_create_request1.created_at
		sueldo1.updated_at=sueldo_create_request1.updated_at
		sueldo1.id_docente=sueldo_create_request1.id_docente
		sueldo1.anio=sueldo_create_request1.anio
		sueldo1.mes=sueldo_create_request1.mes
		sueldo1.valor=sueldo_create_request1.valor
		sueldo1.cobrado=sueldo_create_request1.cobrado
	}
	
	static setSueldos(sueldo_create_requests: Array<SueldoCreateRequest>,sueldos: Array<Sueldo>) {
		let sueldo1:Sueldo;		
		
		for(let sueldo_create_request1 of sueldo_create_requests) {
			sueldo1 = new Sueldo();

			SueldoCreateRequest.setSueldo(sueldo_create_request1,sueldo1);

			sueldos.push(sueldo1);
		}
	}
}

export {SueldoCreateRequest};