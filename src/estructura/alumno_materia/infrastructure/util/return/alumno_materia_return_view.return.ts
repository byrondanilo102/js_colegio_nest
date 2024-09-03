import {AlumnoMateria} from '../../../domain/model/alumno_materia';
import {TipoAccionEnum} from '../../../../../base/util/tipo_accion_enum';

class AlumnoMateriaReturnView {	
	title : string; 
	alumno_materia1 : AlumnoMateria;	
	alumno_materias : Array<AlumnoMateria>;
	action : string;
	action_title : string;
	
	constructor() {
		this.title = '';
		this.alumno_materia1 = new AlumnoMateria();		
		this.alumno_materias = new Array<AlumnoMateria>();
		this.action = '';
		this.action_title = '';
	}
	
	setReturnView(tipo_accion_enum1:string,alumno_materia1 : AlumnoMateria,alumno_materias : Array<AlumnoMateria>) {				
		let pre_titulo="Datos";
		let post_titulo="Ejecutada";
		let action_form="";
		//let alumno_materia_return_view_dto:AlumnoMateriaReturnViewDto;
		
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
		
		 
		this.title = pre_titulo + " Alumno Materia " + post_titulo;
		this.alumno_materias = alumno_materias;
		this.alumno_materia1 = alumno_materia1;
		this.action = action_form;
		this.action_title = post_titulo;
	}		
}

export {AlumnoMateriaReturnView};