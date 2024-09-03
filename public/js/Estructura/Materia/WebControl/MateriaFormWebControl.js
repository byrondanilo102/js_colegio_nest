/*<script type="text/javascript" language="javascript">*/

import {Constantes} from '../../../Lib/Base/Util/Constantes.js';

class MateriaFormWebControl {
	
	MATERIA="materia";
	
	tipo_accion;
	materia;
	
	constructor() {		
		this.tipo_accion = Constantes.CANCELAR;
		
		/*this.materia = new Materia();*/
	}
	
	/*
	onLoadWindow() {
		
	}
	*/
	
	nuevoPreparar() {
	
		this.tipo_accion=Constantes.NUEVO;	
						
		materia.value.id=-1;
		
	}
	
	cancelar() {			
		this.tipo_accion = Constantes.CANCELAR;
	}
	
	getMateria() {
		
		this.updateMateria();
		
		return this.materia;
	}
	
	updateMateria() {			
		
		this.materia = {
			id : parseInt(document.getElementById('id').value),	
			created_at : document.getElementById('created_at').value,
			updated_at : document.getElementById('updated_at').value,
			codigo : document.getElementById('codigo').value,
			nombre : document.getElementById('nombre').value,
			activo : document.getElementById('activo').value ? true : false,
		};
	}
}	

var materiaFormWebControl1 = new MateriaFormWebControl();

export {MateriaFormWebControl,materiaFormWebControl1};

window.materiaFormWebControl1 = materiaFormWebControl1;

/* window.onload = materiaFormWebControl1.onLoadWindow; */

/*</script>*/

