import {IsNotEmpty,IsInt,IsString,IsBoolean,IsBooleanString,IsDate} from 'class-validator';

import {Pension} from '../../../domain/model/pension';

class PensionCreateRequest {
	
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
 		this.id_alumno=-1;
		this.id_alumno_descripcion='';
 		this.anio=0;
 		this.mes=0;
 		this.valor=0.0;
 		this.cobrado=false;
	}
	
	static setPension(pension_create_request1:PensionCreateRequest,pension1:Pension) {
		pension1.created_at=pension_create_request1.created_at
		pension1.updated_at=pension_create_request1.updated_at
		pension1.id_alumno=pension_create_request1.id_alumno
		pension1.anio=pension_create_request1.anio
		pension1.mes=pension_create_request1.mes
		pension1.valor=pension_create_request1.valor
		pension1.cobrado=pension_create_request1.cobrado
	}
	
	static setPensions(pension_create_requests: Array<PensionCreateRequest>,pensions: Array<Pension>) {
		let pension1:Pension;		
		
		for(let pension_create_request1 of pension_create_requests) {
			pension1 = new Pension();

			PensionCreateRequest.setPension(pension_create_request1,pension1);

			pensions.push(pension1);
		}
	}
}

export {PensionCreateRequest};