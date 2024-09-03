import {Entity, Column, PrimaryGeneratedColumn,
		CreateDateColumn, UpdateDateColumn
		,ManyToOne,JoinColumn} from 'typeorm';

/*import {general_entity} from "../../../base/business/entity/general_entity";*/
/*JSON: Exclude,Expose*/
/*import {Exclude,Expose} from 'class-transformer';*/

/*FKs*/
import {Alumno} from '../../../../estructura/alumno/domain/model/alumno';
import {Materia} from '../../../../estructura/materia/domain/model/materia';


/*RELACIONES*/


@Entity({name: 'alumno_materia'})
class AlumnoMateria {
	/*extends general_entity*/
	
	static ALUMNO_MATERIA:string="alumno_materia";
	
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
	
	@Column( { name: "id_materia", default: -1 } )
	id_materia: number;
	id_materia_descripcion: string;	
	
	constructor() {
		
		/*super();*/
		
		this.id = 0;
		this.created_at = new Date();
		this.updated_at = new Date();
		
		/*CAMPOS*/
 		this.id_alumno=-1;
		this.id_alumno_descripcion='';
 		this.id_materia=-1;
		this.id_materia_descripcion='';
	}
	
	/*JSON: Exclude,Expose*/
	/*
	constructor(alumno_materia1:Partial<AlumnoMateria>) {
		Object.assign(this,alumno_materia1);
	}
	*/
		
	/*FKs*/
	

	@ManyToOne(() => Alumno,alumno => alumno.alumno_materias)
	@JoinColumn({name:'id_alumno'})
	alumno: Alumno;


	@ManyToOne(() => Materia,materia => materia.alumno_materias)
	@JoinColumn({name:'id_materia'})
	materia: Materia;

	
	/*RELACIONES*/
	
}

export {AlumnoMateria};