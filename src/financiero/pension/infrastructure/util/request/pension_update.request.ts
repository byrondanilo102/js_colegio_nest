import {IsNotEmpty,IsInt,IsString,IsBoolean,IsBooleanString,IsDate} from 'class-validator';

import {Pension} from '../../../domain/model/pension';
class PensionUpdateRequest {
		
	@IsInt()
	@IsNotEmpty()
	id: number;	
	/*CAMPOS*/
	
	
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
		this.id=-1;
		/*CAMPOS*/
 		this.updated_at=new Date();
 		this.id_alumno=-1;
		this.id_alumno_descripcion='';
 		this.anio=0;
 		this.mes=0;
 		this.valor=0.0;
 		this.cobrado=false;
	}
	
	static setPension(pension_update_request1:PensionUpdateRequest,pension1:Pension) {
		pension1.id=pension_update_request1.id;
		/*CAMPOS*/
 		pension1.updated_at=pension_update_request1.updated_at
 		pension1.id_alumno=pension_update_request1.id_alumno
 		pension1.anio=pension_update_request1.anio
 		pension1.mes=pension_update_request1.mes
 		pension1.valor=pension_update_request1.valor
 		pension1.cobrado=pension_update_request1.cobrado
	}
	
	static setPensions(pension_update_requests: Array<PensionUpdateRequest>,pensions: Array<Pension>) {
		let pension1:Pension;
				
		for(let pension_update_request1 of pension_update_requests) {
			pension1 = new Pension();

			PensionUpdateRequest.setPension(pension_update_request1,pension1);

			pensions.push(pension1);
		}
	}
}

export {PensionUpdateRequest};