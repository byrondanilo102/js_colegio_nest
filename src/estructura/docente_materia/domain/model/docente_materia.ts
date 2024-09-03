import {Entity, Column, PrimaryGeneratedColumn,
		CreateDateColumn, UpdateDateColumn
		,ManyToOne,JoinColumn} from 'typeorm';

/*import {general_entity} from "../../../base/business/entity/general_entity";*/
/*JSON: Exclude,Expose*/
/*import {Exclude,Expose} from 'class-transformer';*/

/*FKs*/
import {Docente} from '../../../../estructura/docente/domain/model/docente';
import {Materia} from '../../../../estructura/materia/domain/model/materia';


/*RELACIONES*/


@Entity({name: 'docente_materia'})
class DocenteMateria {
	/*extends general_entity*/
	
	static DOCENTE_MATERIA:string="docente_materia";
	
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
	
	@Column( { name: "id_materia", default: -1 } )
	id_materia: number;
	id_materia_descripcion: string;	
	
	constructor() {
		
		/*super();*/
		
		this.id = 0;
		this.created_at = new Date();
		this.updated_at = new Date();
		
		/*CAMPOS*/
 		this.id_docente=-1;
		this.id_docente_descripcion='';
 		this.id_materia=-1;
		this.id_materia_descripcion='';
	}
	
	/*JSON: Exclude,Expose*/
	/*
	constructor(docente_materia1:Partial<DocenteMateria>) {
		Object.assign(this,docente_materia1);
	}
	*/
		
	/*FKs*/
	

	@ManyToOne(() => Docente,docente => docente.docente_materias)
	@JoinColumn({name:'id_docente'})
	docente: Docente;


	@ManyToOne(() => Materia,materia => materia.docente_materias)
	@JoinColumn({name:'id_materia'})
	materia: Materia;

	
	/*RELACIONES*/
	
}

export {DocenteMateria};