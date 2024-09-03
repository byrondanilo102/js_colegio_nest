import {Pagination} from '../../../../base/application/logic/pagination';

import {DocenteMateria} from '../../domain/model/docente_materia';

interface DocenteMateriaDataI {    
    
    getTodos(pagination1:Pagination,relations1:any): Promise<DocenteMateria[]>;
    getBuscar(builder_object_docente_materia1:any,pagination1:Pagination,relations1:any): Promise<DocenteMateria[]>;
    getBuscarGeneral(builder_object_docente_materia1:any,pagination1:Pagination,relations1:any): Promise<DocenteMateria[]>;
    getBuscarUno(builder_object_docente_materia1:any,relations1:any): Promise<DocenteMateria>;
    
    nuevo(docente_materia1:DocenteMateria): Promise<any>;
    actualizar(docente_materia1:DocenteMateria): Promise<any>;
    eliminar(id:number): Promise<any>;
    
    nuevos(docente_materias:Array<DocenteMateria>);
    eliminars(ids:Array<number>);
    actualizars(updates_docente_materias:Array<DocenteMateria>,updates_columnas:Array<string>);
    
	getEntitiesFromModels(result:any): DocenteMateria[];
	getEntityFromModel(result:any): DocenteMateria;
	
    getBuilderFunctionObjectParametroSeleccionar(id:number):any;
    getBuilderFunctionObjectParametroBuscar(req:any):any;
}

export {DocenteMateriaDataI};
