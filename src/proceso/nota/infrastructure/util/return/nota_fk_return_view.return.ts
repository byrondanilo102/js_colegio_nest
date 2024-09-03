/*FKs*/
import {Alumno} from '../../../../../estructura/alumno/domain/model/alumno';
import {Materia} from '../../../../../estructura/materia/domain/model/materia';
import {Docente} from '../../../../../estructura/docente/domain/model/docente';
		

class NotaFKReturnView {		
	
	alumnosFK : Array<Alumno>;

	materiasFK : Array<Materia>;

	docentesFK : Array<Docente>;

	
	constructor() {
		
		this.alumnosFK = new Array<Alumno>();
		this.materiasFK = new Array<Materia>();
		this.docentesFK = new Array<Docente>();
	}
}

export {NotaFKReturnView};
