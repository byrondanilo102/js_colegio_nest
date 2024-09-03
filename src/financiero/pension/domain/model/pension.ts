import {Entity, Column, PrimaryGeneratedColumn,
		CreateDateColumn, UpdateDateColumn
		,ManyToOne,JoinColumn} from 'typeorm';

/*import {general_entity} from "../../../base/business/entity/general_entity";*/
/*JSON: Exclude,Expose*/
/*import {Exclude,Expose} from 'class-transformer';*/

/*FKs*/
import {Alumno} from '../../../../estructura/alumno/domain/model/alumno';


/*RELACIONES*/


@Entity({name: 'pension'})
class Pension {
	/*extends general_entity*/
	
	static PENSION:string="pension";
	
	@PrimaryGeneratedColumn( { name: "id" } )
	id: number;
	
	@CreateDateColumn( { name: "created_at" } )
	/*@Exclude()*/
	created_at: Date;
	
	@UpdateDateColumn( { name: "updated_at" } )
	/*@Exclude()*/
	updated_at: Date;
	
	/*CAMPOS*/
	
	@Column( { name: "id_alumno", default: -1 } )
	id_alumno: number;
	id_alumno_descripcion: string;	
	
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
 		this.id_alumno=-1;
		this.id_alumno_descripcion='';
 		this.anio=0;
 		this.mes=0;
 		this.valor=0.0;
 		this.cobrado=false;
	}
	
	/*JSON: Exclude,Expose*/
	/*
	constructor(pension1:Partial<Pension>) {
		Object.assign(this,pension1);
	}
	*/
		
	/*FKs*/
	

	@ManyToOne(() => Alumno,alumno => alumno.pensions)
	@JoinColumn({name:'id_alumno'})
	alumno: Alumno;

	
	/*RELACIONES*/
	
}

export {Pension};