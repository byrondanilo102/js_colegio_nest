/*FKs*/
import {Alumno} from '../../../../../estructura/alumno/domain/model/alumno';
		

class MatriculaFKReturnView {		
	
	alumnosFK : Array<Alumno>;

	
	constructor() {
		
		this.alumnosFK = new Array<Alumno>();
	}
}

export {MatriculaFKReturnView};
