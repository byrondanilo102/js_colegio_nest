import {Entity, Column, PrimaryGeneratedColumn,
		CreateDateColumn, UpdateDateColumn
		,ManyToOne,JoinColumn} from 'typeorm';

/*import {general_entity} from "../../../base/business/entity/general_entity";*/
/*JSON: Exclude,Expose*/
/*import {Exclude,Expose} from 'class-transformer';*/

/*FKs*/
import {Docente} from '../../../../estructura/docente/domain/model/docente';


/*RELACIONES*/


@Entity({name: 'sueldo'})
class Sueldo {
	/*extends general_entity*/
	
	static SUELDO:string="sueldo";
	
	@PrimaryGeneratedColumn( { name: "id" } )
	id: number;
	
	@CreateDateColumn( { name: "created_at" } )
	/*@Exclude()*/
	created_at: Date;
	
	@UpdateDateColumn( { name: "updated_at" } )
	/*@Exclude()*/
	updated_at: Date;
	
	/*CAMPOS*/
	
	@Column( { name: "id_docente", default: -1 } )
	id_docente: number;
	id_docente_descripcion: string;	
	
	@Column( { name: "anio", default: 0 } )
	anio: number;	
	
	@Column( { name: "mes", default: 0 } )
	mes: number;	
	
	@Column( { name: "valor", default: 0.0 } )
	valor: number;	
	
	@Column( { name: "cobrado", default: false } )
	cobrado: boolean;	
	
	constructor() {
		
		/*super();*/
		
		this.id = 0;
		this.created_at = new Date();
		this.updated_at = new Date();
		
		/*CAMPOS*/
 		this.id_docente=-1;
		this.id_docente_descripcion='';
 		this.anio=0;
 		this.mes=0;
 		this.valor=0.0;
 		this.cobrado=false;
	}
	
	/*JSON: Exclude,Expose*/
	/*
	constructor(sueldo1:Partial<Sueldo>) {
		Object.assign(this,sueldo1);
	}
	*/
		
	/*FKs*/
	

	@ManyToOne(() => Docente,docente => docente.sueldos)
	@JoinColumn({name:'id_docente'})
	docente: Docente;

	
	/*RELACIONES*/
	
}

export {Sueldo};