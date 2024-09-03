import {Entity, Column, PrimaryGeneratedColumn,
		CreateDateColumn, UpdateDateColumn
		,ManyToOne,JoinColumn} from 'typeorm';

/*import {general_entity} from "../../../base/business/entity/general_entity";*/
/*JSON: Exclude,Expose*/
/*import {Exclude,Expose} from 'class-transformer';*/

/*FKs*/
import {Alumno} from '../../../../estructura/alumno/domain/model/alumno';


/*RELACIONES*/


@Entity({name: 'matricula'})
class Matricula {
	/*extends general_entity*/
	
	static MATRICULA:string="matricula";
	
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
	
	@Column( { name: "costo", default: 0.0 } )
	costo: number;	
	
	@Column( { name: "fecha", default: new Date() } )
	fecha: Date;	
	
	@Column( { name: "pagado", default: false } )
	pagado: boolean;	
	
	constructor() {
		
		/*super();*/
		
		this.id = 0;
		this.created_at = new Date();
		this.updated_at = new Date();
		
		/*CAMPOS*/
 		this.anio=0;
 		this.costo=0.0;
 		this.fecha=new Date();
 		this.pagado=false;
	}
	
	/*JSON: Exclude,Expose*/
	/*
	constructor(matricula1:Partial<Matricula>) {
		Object.assign(this,matricula1);
	}
	*/
		
	/*FKs*/
	

	@ManyToOne(() => Alumno,alumno => alumno.matricula)
	@JoinColumn({name:'id'})
	alumno: Alumno;

	
	/*RELACIONES*/
	
}

export {Matricula};