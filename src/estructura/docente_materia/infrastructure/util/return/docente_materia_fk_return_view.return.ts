/*FKs*/
import {Docente} from '../../../../../estructura/docente/domain/model/docente';
import {Materia} from '../../../../../estructura/materia/domain/model/materia';
		

class DocenteMateriaFKReturnView {		
	
	docentesFK : Array<Docente>;

	materiasFK : Array<Materia>;

	
	constructor() {
		
		this.docentesFK = new Array<Docente>();
		this.materiasFK = new Array<Materia>();
	}
}

export {DocenteMateriaFKReturnView};
