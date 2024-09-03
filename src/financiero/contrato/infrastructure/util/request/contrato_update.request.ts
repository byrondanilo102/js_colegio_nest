import {IsNotEmpty,IsInt,IsString,IsBoolean,IsBooleanString,IsDate} from 'class-validator';

import {Contrato} from '../../../domain/model/contrato';
class ContratoUpdateRequest {
		
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
	valor: number;
	
	@IsString()
	@IsNotEmpty()
	fecha: Date;
	
	@IsBoolean()
	@IsNotEmpty()
	firmado: boolean;
	
	constructor() {
		this.id=-1;
		/*CAMPOS*/
 		this.updated_at=new Date();
 		this.anio=0;
 		this.valor=0.0;
 		this.fecha=new Date();
 		this.firmado=false;
	}
	
	static setContrato(contrato_update_request1:ContratoUpdateRequest,contrato1:Contrato) {
		contrato1.id=contrato_update_request1.id;
		/*CAMPOS*/
 		contrato1.updated_at=contrato_update_request1.updated_at
 		contrato1.anio=contrato_update_request1.anio
 		contrato1.valor=contrato_update_request1.valor
 		contrato1.fecha=contrato_update_request1.fecha
 		contrato1.firmado=contrato_update_request1.firmado
	}
	
	static setContratos(contrato_update_requests: Array<ContratoUpdateRequest>,contratos: Array<Contrato>) {
		let contrato1:Contrato;
				
		for(let contrato_update_request1 of contrato_update_requests) {
			contrato1 = new Contrato();

			ContratoUpdateRequest.setContrato(contrato_update_request1,contrato1);

			contratos.push(contrato1);
		}
	}
}

export {ContratoUpdateRequest};