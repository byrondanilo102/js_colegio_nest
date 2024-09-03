import {DocenteMateria} from '../../../domain/model/docente_materia';
import {TipoAccionEnum} from '../../../../../base/util/tipo_accion_enum';

class DocenteMateriaReturnView {	
	title : string; 
	docente_materia1 : DocenteMateria;	
	docente_materias : Array<DocenteMateria>;
	action : string;
	action_title : string;
	
	constructor() {
		this.title = '';
		this.docente_materia1 = new DocenteMateria();		
		this.docente_materias = new Array<DocenteMateria>();
		this.action = '';
		this.action_title = '';
	}
	
	setReturnView(tipo_accion_enum1:string,docente_materia1 : DocenteMateria,docente_materias : Array<DocenteMateria>) {				
		let pre_titulo="Datos";
		let post_titulo="Ejecutada";
		let action_form="";
		//let docente_materia_return_view_dto:DocenteMateriaReturnViewDto;
		
        switch(tipo_accion_enum1) {
			
			case TipoAccionEnum.SELECCIONAR: {
                pre_titulo="Datos";
				post_titulo="Seleccionar";
				break;
            }
            case TipoAccionEnum.BUSCAR_TODOS: {
                pre_titulo="Datos";
				post_titulo="Buscar_Todos";
				break;
            }
			case TipoAccionEnum.BUSCAR: {
                pre_titulo="Datos";
				post_titulo="Buscar";
				break;
            }
			case TipoAccionEnum.NUEVO: {
				pre_titulo="";
                post_titulo="Nuevo";
				action_form="nuevo";
				break;
            }
			case TipoAccionEnum.ACTUALIZAR: {
				pre_titulo="";
                post_titulo="Actualizar";
				action_form="actualizar";
				break;
            }
			case TipoAccionEnum.ELIMINAR: {
				pre_titulo="";
                post_titulo="Eliminar";
				action_form="eliminar";
				break;
            }
			case TipoAccionEnum.GUARDAR_CAMBIOS: {
				pre_titulo="";
                post_titulo="Guardar Cambios";
				action_form="guardar_cambios";
				break;
            }
            default: {
                break;
            }
        }
		
		 
		this.title = pre_titulo + " Docente Materia " + post_titulo;
		this.docente_materias = docente_materias;
		this.docente_materia1 = docente_materia1;
		this.action = action_form;
		this.action_title = post_titulo;
	}		
}

export {DocenteMateriaReturnView};