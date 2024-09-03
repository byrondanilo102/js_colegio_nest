import {Nota} from '../../../domain/model/nota';
import {TipoAccionEnum} from '../../../../../base/util/tipo_accion_enum';

class NotaReturnView {	
	title : string; 
	nota1 : Nota;	
	notas : Array<Nota>;
	action : string;
	action_title : string;
	
	constructor() {
		this.title = '';
		this.nota1 = new Nota();		
		this.notas = new Array<Nota>();
		this.action = '';
		this.action_title = '';
	}
	
	setReturnView(tipo_accion_enum1:string,nota1 : Nota,notas : Array<Nota>) {				
		let pre_titulo="Datos";
		let post_titulo="Ejecutada";
		let action_form="";
		//let nota_return_view_dto:NotaReturnViewDto;
		
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
		
		 
		this.title = pre_titulo + " Nota " + post_titulo;
		this.notas = notas;
		this.nota1 = nota1;
		this.action = action_form;
		this.action_title = post_titulo;
	}		
}

export {NotaReturnView};