/*FKs*/
import {Alumno} from '../../../../../estructura/alumno/domain/model/alumno';
import {Materia} from '../../../../../estructura/materia/domain/model/materia';
		

class AlumnoMateriaFKReturnView {		
	
	alumnosFK : Array<Alumno>;

	materiasFK : Array<Materia>;

	
	constructor() {
		
		this.alumnosFK = new Array<Alumno>();
		this.materiasFK = new Array<Materia>();
	}
}

export {AlumnoMateriaFKReturnView};
