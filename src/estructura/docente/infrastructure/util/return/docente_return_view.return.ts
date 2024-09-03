import {Docente} from '../../../domain/model/docente';
import {TipoAccionEnum} from '../../../../../base/util/tipo_accion_enum';

class DocenteReturnView {	
	title : string; 
	docente1 : Docente;	
	docentes : Array<Docente>;
	action : string;
	action_title : string;
	
	constructor() {
		this.title = '';
		this.docente1 = new Docente();		
		this.docentes = new Array<Docente>();
		this.action = '';
		this.action_title = '';
	}
	
	setReturnView(tipo_accion_enum1:string,docente1 : Docente,docentes : Array<Docente>) {				
		let pre_titulo="Datos";
		let post_titulo="Ejecutada";
		let action_form="";
		//let docente_return_view_dto:DocenteReturnViewDto;
		
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
		
		 
		this.title = pre_titulo + " Docente " + post_titulo;
		this.docentes = docentes;
		this.docente1 = docente1;
		this.action = action_form;
		this.action_title = post_titulo;
	}		
}

export {DocenteReturnView};