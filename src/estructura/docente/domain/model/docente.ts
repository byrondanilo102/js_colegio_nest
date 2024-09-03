import {Entity, Column, PrimaryGeneratedColumn,
		CreateDateColumn, UpdateDateColumn
		,OneToOne,OneToMany,ManyToMany,JoinTable,JoinColumn} from 'typeorm';

/*import {general_entity} from "../../../base/business/entity/general_entity";*/
/*JSON: Exclude,Expose*/
/*import {Exclude,Expose} from 'class-transformer';*/

/*FKs*/


/*RELACIONES*/
import {Sueldo} from '../../../../financiero/sueldo/domain/model/sueldo';
import {Contrato} from '../../../../financiero/contrato/domain/model/contrato';
import {Materia} from '../../../../estructura/materia/domain/model/materia';
import {Nota} from '../../../../proceso/nota/domain/model/nota';
import {DocenteMateria} from '../../../../estructura/docente_materia/domain/model/docente_materia';


@Entity({name: 'docente'})
class Docente {
	/*extends general_entity*/
	
	static DOCENTE:string="docente";
	
	@PrimaryGeneratedColumn( { name: "id" } )
	id: number;
	
	@CreateDateColumn( { name: "created_at" } )
	/*@Exclude()*/
	created_at: Date;
	
	@UpdateDateColumn( { name: "updated_at" } )
	/*@Exclude()*/
	updated_at: Date;
	
	/*CAMPOS*/
	
	@Column( { name: "nombre", default: '' } )
	nombre: string;	
	
	@Column( { name: "apellido", default: '' } )
	apellido: string;	
	
	@Column( { name: "fecha_nacimiento", default: new Date() } )
	fecha_nacimiento: Date;	
	
	@Column( { name: "anios_experiencia", default: 0 } )
	anios_experiencia: number;	
	
	@Column( { name: "nota_evaluacion", default: 0.0 } )
	nota_evaluacion: number;	
	
	constructor() {
		
		/*super();*/
		
		this.id = 0;
		this.created_at = new Date();
		this.updated_at = new Date();
		
		/*CAMPOS*/
 		this.nombre='';
 		this.apellido='';
 		this.fecha_nacimiento=new Date();
 		this.anios_experiencia=0;
 		this.nota_evaluacion=0.0;
	}
	
	/*JSON: Exclude,Expose*/
	/*
	constructor(docente1:Partial<Docente>) {
		Object.assign(this,docente1);
	}
	*/
		
	/*FKs*/
	
	
	/*RELACIONES*/
	
	@OneToMany(() => Sueldo,(sueldo) => sueldo.docente)
	sueldos: Sueldo[];

	@OneToOne(() => Contrato,(contrato) => contrato.docente)
	@JoinColumn({name:'id'})
	contrato: Contrato;

	@ManyToMany(() => Materia)
	@JoinTable({
		name:'docente_materia'
		,joinColumn:{name:'id_docente',referencedColumnName:'id'}
		,inverseJoinColumn:{name:'id_materia',referencedColumnName:'id'}
	})
	materias: Materia[];

	@OneToMany(() => Nota,(nota) => nota.docente)
	notas: Nota[];

	@OneToMany(() => DocenteMateria,(docente_materia) => docente_materia.docente)
	docente_materias: DocenteMateria[];

}

export {Docente};