/*<script type="text/javascript" language="javascript">*/

import {Constantes} from '../../../Lib/Base/Util/Constantes.js';
import {FuncionGeneral} from '../../../Lib/Base/Util/FuncionGeneral.js';
import {Pagination} from '../../../Lib/Base/Application/Logic/Pagination.js';

class MateriaWebControl {
	
	MATERIA="materia";
	accion_busqueda;
	pagination1;
	
	constructor() {	
		this.accion_busqueda = 'todos';
		this.getPaginationInicializar();
	}
	
	onLoadWindow() {
		console.log('Loading...');
	}
	
	getPaginationInicializar() {			
		this.pagination1 = new Pagination();
		
		this.pagination1.skip = 0;
		this.pagination1.limit = Constantes.LIMIT;
	}
	
	getPagination(con_inicializar) {
		
		if(con_inicializar==true) {
			this.getPaginationInicializar();
		}
		
		return this.pagination1;
	}
	
	getTodosDatosBefore() { 			
				
		this.getPaginationInicializar();
		
		this.accion_busqueda = 'todos';
	}
	
	anterioresBefore() {
		
		if(this.pagination1.skip - this.pagination1.limit < 0) {
			this.pagination1.skip = 0;
		} else {
			this.pagination1.skip = this.pagination1.skip - this.pagination1.limit;
		}		
	}
	
	siguientesBefore() {
		
		let materia_tabla_general = document.getElementById("materia_tabla_general");
		let totalRowsCount = materia_tabla_general.rows.length;
	
		if(totalRowsCount > 1) {
			this.pagination1.skip = this.pagination1.skip + this.pagination1.limit;					
		}
	}
	
	seleccionarBefore() {
		FuncionGeneral.OpenModalBootstrap('divModal_materia_form_general');
	}
	
	nuevoPrepararBefore() { 			
		FuncionGeneral.OpenModalBootstrap('divModal_materia_form_general');		
	}
	
	updateDatosActualizar() {		
		this.updateDatosProcesar();		
		FuncionGeneral.SetMessageAlert('Datos Actualizados Correctamente');			
	}
	
	updateDatosGuardar() {		
		this.updateDatosProcesar();		
		FuncionGeneral.SetMessageAlert('Datos Guardados Correctamente');			
	}
	
	updateDatosEliminar() {		
		this.updateDatosProcesar();		
		FuncionGeneral.SetMessageAlert('Datos Eliminados Correctamente');			
	}
	
	updateDatosProcesar() {
		
		if(this.accion_busqueda == 'todos') {
			FuncionGeneral.executeButton('traer_todos');
	
		} else if(this.accion_busqueda == 'buscar') {
			
		}
	}
	
	/*
	getToken() {
		return  document.querySelector('meta[name="csrf-token"]').content;
	}
	*/
}	

var materiaWebControl1 = new MateriaWebControl();

export {MateriaWebControl,materiaWebControl1};

window.materiaWebControl1 = materiaWebControl1;

window.onload = materiaWebControl1.onLoadWindow; 

/*</script>*/

