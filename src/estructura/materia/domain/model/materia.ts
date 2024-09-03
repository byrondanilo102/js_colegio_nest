import {Entity, Column, PrimaryGeneratedColumn,
		CreateDateColumn, UpdateDateColumn
		,OneToOne,OneToMany,ManyToMany,JoinTable,JoinColumn} from 'typeorm';

/*import {general_entity} from "../../../base/business/entity/general_entity";*/
/*JSON: Exclude,Expose*/
/*import {Exclude,Expose} from 'class-transformer';*/

/*FKs*/


/*RELACIONES*/
import {Alumno} from '../../../../estructura/alumno/domain/model/alumno';
import {AlumnoMateria} from '../../../../estructura/alumno_materia/domain/model/alumno_materia';
import {Docente} from '../../../../estructura/docente/domain/model/docente';
import {Nota} from '../../../../proceso/nota/domain/model/nota';
import {DocenteMateria} from '../../../../estructura/docente_materia/domain/model/docente_materia';


@Entity({name: 'materia'})
class Materia {
	/*extends general_entity*/
	
	static MATERIA:string="materia";
	
	@PrimaryGeneratedColumn( { name: "id" } )
	id: number;
	
	@CreateDateColumn( { name: "created_at" } )
	/*@Exclude()*/
	created_at: Date;
	
	@UpdateDateColumn( { name: "updated_at" } )
	/*@Exclude()*/
	updated_at: Date;
	
	/*CAMPOS*/
	
	@Column( { name: "codigo", default: '' } )
	codigo: string;	
	
	@Column( { name: "nombre", default: '' } )
	nombre: string;	
	
	@Column( { name: "activo", default: false } )
	activo: boolean;	
	
	constructor() {
		
		/*super();*/
		
		this.id = 0;
		this.created_at = new Date();
		this.updated_at = new Date();
		
		/*CAMPOS*/
 		this.codigo='';
 		this.nombre='';
 		this.activo=false;
	}
	
	/*JSON: Exclude,Expose*/
	/*
	constructor(materia1:Partial<Materia>) {
		Object.assign(this,materia1);
	}
	*/
		
	/*FKs*/
	
	
	/*RELACIONES*/
	
	@ManyToMany(() => Alumno)
	@JoinTable({
		name:'alumno_materia'
		,joinColumn:{name:'id_materia',referencedColumnName:'id'}
		,inverseJoinColumn:{name:'id_alumno',referencedColumnName:'id'}
	})
	alumnos: Alumno[];

	@OneToMany(() => AlumnoMateria,(alumno_materia) => alumno_materia.materia)
	alumno_materias: AlumnoMateria[];

	@ManyToMany(() => Docente)
	@JoinTable({
		name:'docente_materia'
		,joinColumn:{name:'id_materia',referencedColumnName:'id'}
		,inverseJoinColumn:{name:'id_docente',referencedColumnName:'id'}
	})
	docentes: Docente[];

	@OneToMany(() => Nota,(nota) => nota.materia)
	notas: Nota[];

	@OneToMany(() => DocenteMateria,(docente_materia) => docente_materia.materia)
	docente_materias: DocenteMateria[];

}

export {Materia};