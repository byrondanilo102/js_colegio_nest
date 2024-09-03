import {IsNotEmpty,IsInt,IsString,IsBoolean,IsBooleanString,IsDate} from 'class-validator';

import {Sueldo} from '../../../domain/model/sueldo';
class SueldoUpdateRequest {
		
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
		this.id=-1;
		/*CAMPOS*/
 		this.updated_at=new Date();
 		this.id_docente=-1;
		this.id_docente_descripcion='';
 		this.anio=0;
 		this.mes=0;
 		this.valor=0.0;
 		this.cobrado=false;
	}
	
	static setSueldo(sueldo_update_request1:SueldoUpdateRequest,sueldo1:Sueldo) {
		sueldo1.id=sueldo_update_request1.id;
		/*CAMPOS*/
 		sueldo1.updated_at=sueldo_update_request1.updated_at
 		sueldo1.id_docente=sueldo_update_request1.id_docente
 		sueldo1.anio=sueldo_update_request1.anio
 		sueldo1.mes=sueldo_update_request1.mes
 		sueldo1.valor=sueldo_update_request1.valor
 		sueldo1.cobrado=sueldo_update_request1.cobrado
	}
	
	static setSueldos(sueldo_update_requests: Array<SueldoUpdateRequest>,sueldos: Array<Sueldo>) {
		let sueldo1:Sueldo;
				
		for(let sueldo_update_request1 of sueldo_update_requests) {
			sueldo1 = new Sueldo();

			SueldoUpdateRequest.setSueldo(sueldo_update_request1,sueldo1);

			sueldos.push(sueldo1);
		}
	}
}

export {SueldoUpdateRequest};