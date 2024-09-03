import {Materia} from '../../../domain/model/materia';
import {TipoAccionEnum} from '../../../../../base/util/tipo_accion_enum';

class MateriaReturnView {	
	title : string; 
	materia1 : Materia;	
	materias : Array<Materia>;
	action : string;
	action_title : string;
	
	constructor() {
		this.title = '';
		this.materia1 = new Materia();		
		this.materias = new Array<Materia>();
		this.action = '';
		this.action_title = '';
	}
	
	setReturnView(tipo_accion_enum1:string,materia1 : Materia,materias : Array<Materia>) {				
		let pre_titulo="Datos";
		let post_titulo="Ejecutada";
		let action_form="";
		//let materia_return_view_dto:MateriaReturnViewDto;
		
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
		
		 
		this.title = pre_titulo + " Materia " + post_titulo;
		this.materias = materias;
		this.materia1 = materia1;
		this.action = action_form;
		this.action_title = post_titulo;
	}		
}

export {MateriaReturnView};