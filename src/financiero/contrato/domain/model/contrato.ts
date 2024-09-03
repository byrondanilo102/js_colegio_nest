import {Entity, Column, PrimaryGeneratedColumn,
		CreateDateColumn, UpdateDateColumn
		,ManyToOne,JoinColumn} from 'typeorm';

/*import {general_entity} from "../../../base/business/entity/general_entity";*/
/*JSON: Exclude,Expose*/
/*import {Exclude,Expose} from 'class-transformer';*/

/*FKs*/
import {Docente} from '../../../../estructura/docente/domain/model/docente';


/*RELACIONES*/


@Entity({name: 'contrato'})
class Contrato {
	/*extends general_entity*/
	
	static CONTRATO:string="contrato";
	
	@PrimaryGeneratedColumn( { name: "id" } )
	id: number;
	
	@CreateDateColumn( { name: "created_at" } )
	/*@Exclude()*/
	created_at: Date;
	
	@UpdateDateColumn( { name: "updated_at" } )
	/*@Exclude()*/
	updated_at: Date;
	
	/*CAMPOS*/
	
	@Column( { name: "anio", default: 0 } )
	anio: number;	
	
	@Column( { name: "valor", default: 0.0 } )
	valor: number;	
	
	@Column( { name: "fecha", default: new Date() } )
	fecha: Date;	
	
	@Column( { name: "firmado", default: false } )
	firmado: boolean;	
	
	constructor() {
		
		/*super();*/
		
		this.id = 0;
		this.created_at = new Date();
		this.updated_at = new Date();
		
		/*CAMPOS*/
 		this.anio=0;
 		this.valor=0.0;
 		this.fecha=new Date();
 		this.firmado=false;
	}
	
	/*JSON: Exclude,Expose*/
	/*
	constructor(contrato1:Partial<Contrato>) {
		Object.assign(this,contrato1);
	}
	*/
		
	/*FKs*/
	

	@ManyToOne(() => Docente,docente => docente.contrato)
	@JoinColumn({name:'id'})
	docente: Docente;

	
	/*RELACIONES*/
	
}

export {Contrato};