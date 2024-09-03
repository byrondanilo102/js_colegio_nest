import {Pagination} from '../../../../base/application/logic/pagination';

import {Alumno} from '../../domain/model/alumno';

interface AlumnoDataI {    
    
    getTodos(pagination1:Pagination,relations1:any): Promise<Alumno[]>;
    getBuscar(builder_object_alumno1:any,pagination1:Pagination,relations1:any): Promise<Alumno[]>;
    getBuscarGeneral(builder_object_alumno1:any,pagination1:Pagination,relations1:any): Promise<Alumno[]>;
    getBuscarUno(builder_object_alumno1:any,relations1:any): Promise<Alumno>;
    
    nuevo(alumno1:Alumno): Promise<any>;
    actualizar(alumno1:Alumno): Promise<any>;
    eliminar(id:number): Promise<any>;
    
    nuevos(alumnos:Array<Alumno>);
    eliminars(ids:Array<number>);
    actualizars(updates_alumnos:Array<Alumno>,updates_columnas:Array<string>);
    
	getEntitiesFromModels(result:any): Alumno[];
	getEntityFromModel(result:any): Alumno;
	
    getBuilderFunctionObjectParametroSeleccionar(id:number):any;
    getBuilderFunctionObjectParametroBuscar(req:any):any;
}

export {AlumnoDataI};
