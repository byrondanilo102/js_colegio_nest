import {IsNotEmpty,IsInt,IsString,IsBoolean,IsBooleanString,IsDate} from 'class-validator';

import {Contrato} from '../../../domain/model/contrato';

class ContratoCreateRequest {
	
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
	valor: number;
	
	@IsString()
	@IsNotEmpty()
	fecha: Date;
	
	@IsBoolean()
	@IsNotEmpty()
	firmado: boolean;
	
	constructor() {
		/*CAMPOS*/
 		this.created_at=new Date();
 		this.updated_at=new Date();
 		this.anio=0;
 		this.valor=0.0;
 		this.fecha=new Date();
 		this.firmado=false;
	}
	
	static setContrato(contrato_create_request1:ContratoCreateRequest,contrato1:Contrato) {
		contrato1.created_at=contrato_create_request1.created_at
		contrato1.updated_at=contrato_create_request1.updated_at
		contrato1.anio=contrato_create_request1.anio
		contrato1.valor=contrato_create_request1.valor
		contrato1.fecha=contrato_create_request1.fecha
		contrato1.firmado=contrato_create_request1.firmado
	}
	
	static setContratos(contrato_create_requests: Array<ContratoCreateRequest>,contratos: Array<Contrato>) {
		let contrato1:Contrato;		
		
		for(let contrato_create_request1 of contrato_create_requests) {
			contrato1 = new Contrato();

			ContratoCreateRequest.setContrato(contrato_create_request1,contrato1);

			contratos.push(contrato1);
		}
	}
}

export {ContratoCreateRequest};