import {Entity, Column, PrimaryGeneratedColumn,
		CreateDateColumn, UpdateDateColumn
		,ManyToOne,JoinColumn} from 'typeorm';

/*import {general_entity} from "../../../base/business/entity/general_entity";*/
/*JSON: Exclude,Expose*/
/*import {Exclude,Expose} from 'class-transformer';*/

/*FKs*/
import {Alumno} from '../../../../estructura/alumno/domain/model/alumno';
import {Materia} from '../../../../estructura/materia/domain/model/materia';
import {Docente} from '../../../../estructura/docente/domain/model/docente';


/*RELACIONES*/


@Entity({name: 'nota'})
class Nota {
	/*extends general_entity*/
	
	static NOTA:string="nota";
	
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
	
	@Column( { name: "id_docente", default: -1 } )
	id_docente: number;
	id_docente_descripcion: string;	
	
	@Column( { name: "nota_prueba", default: 0.0 } )
	nota_prueba: number;	
	
	@Column( { name: "nota_trabajo", default: 0.0 } )
	nota_trabajo: number;	
	
	@Column( { name: "nota_examen", default: 0.0 } )
	nota_examen: number;	
	
	@Column( { name: "nota_final", default: 0.0 } )
	nota_final: number;	
	
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
 		this.id_docente=-1;
		this.id_docente_descripcion='';
 		this.nota_prueba=0.0;
 		this.nota_trabajo=0.0;
 		this.nota_examen=0.0;
 		this.nota_final=0.0;
	}
	
	/*JSON: Exclude,Expose*/
	/*
	constructor(nota1:Partial<Nota>) {
		Object.assign(this,nota1);
	}
	*/
		
	/*FKs*/
	

	@ManyToOne(() => Alumno,alumno => alumno.notas)
	@JoinColumn({name:'id_alumno'})
	alumno: Alumno;


	@ManyToOne(() => Materia,materia => materia.notas)
	@JoinColumn({name:'id_materia'})
	materia: Materia;


	@ManyToOne(() => Docente,docente => docente.notas)
	@JoinColumn({name:'id_docente'})
	docente: Docente;

	
	/*RELACIONES*/
	
}

export {Nota};