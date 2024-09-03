/*FKs*/
import {Docente} from '../../../../../estructura/docente/domain/model/docente';
		

class ContratoFKReturnView {		
	
	docentesFK : Array<Docente>;

	
	constructor() {
		
		this.docentesFK = new Array<Docente>();
	}
}

export {ContratoFKReturnView};
