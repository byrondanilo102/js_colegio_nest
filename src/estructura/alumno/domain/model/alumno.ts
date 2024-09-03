import {Entity, Column, PrimaryGeneratedColumn,
		CreateDateColumn, UpdateDateColumn
		,OneToOne,OneToMany,ManyToMany,JoinTable,JoinColumn} from 'typeorm';

/*import {general_entity} from "../../../base/business/entity/general_entity";*/
/*JSON: Exclude,Expose*/
/*import {Exclude,Expose} from 'class-transformer';*/

/*FKs*/


/*RELACIONES*/
import {Matricula} from '../../../../proceso/matricula/domain/model/matricula';
import {AlumnoMateria} from '../../../../estructura/alumno_materia/domain/model/alumno_materia';
import {Materia} from '../../../../estructura/materia/domain/model/materia';
import {Pension} from '../../../../financiero/pension/domain/model/pension';
import {Nota} from '../../../../proceso/nota/domain/model/nota';


@Entity({name: 'alumno'})
class Alumno {
	/*extends general_entity*/
	
	static ALUMNO:string="alumno";
	
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
	
	constructor() {
		
		/*super();*/
		
		this.id = 0;
		this.created_at = new Date();
		this.updated_at = new Date();
		
		/*CAMPOS*/
 		this.nombre='';
 		this.apellido='';
 		this.fecha_nacimiento=new Date();
	}
	
	/*JSON: Exclude,Expose*/
	/*
	constructor(alumno1:Partial<Alumno>) {
		Object.assign(this,alumno1);
	}
	*/
		
	/*FKs*/
	
	
	/*RELACIONES*/
	
	@OneToOne(() => Matricula,(matricula) => matricula.alumno)
	@JoinColumn({name:'id'})
	matricula: Matricula;

	@OneToMany(() => AlumnoMateria,(alumno_materia) => alumno_materia.alumno)
	alumno_materias: AlumnoMateria[];

	@ManyToMany(() => Materia)
	@JoinTable({
		name:'alumno_materia'
		,joinColumn:{name:'id_alumno',referencedColumnName:'id'}
		,inverseJoinColumn:{name:'id_materia',referencedColumnName:'id'}
	})
	materias: Materia[];

	@OneToMany(() => Pension,(pension) => pension.alumno)
	pensions: Pension[];

	@OneToMany(() => Nota,(nota) => nota.alumno)
	notas: Nota[];

}

export {Alumno};