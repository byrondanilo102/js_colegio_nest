/*FKs*/
import {Alumno} from '../../../../../estructura/alumno/domain/model/alumno';
		

class PensionFKReturnView {		
	
	alumnosFK : Array<Alumno>;

	
	constructor() {
		
		this.alumnosFK = new Array<Alumno>();
	}
}

export {PensionFKReturnView};
