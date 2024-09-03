/*FKs*/
import {Docente} from '../../../../../estructura/docente/domain/model/docente';
		

class SueldoFKReturnView {		
	
	docentesFK : Array<Docente>;

	
	constructor() {
		
		this.docentesFK = new Array<Docente>();
	}
}

export {SueldoFKReturnView};
