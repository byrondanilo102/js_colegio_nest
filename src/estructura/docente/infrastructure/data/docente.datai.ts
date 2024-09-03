import {Pagination} from '../../../../base/application/logic/pagination';

import {Docente} from '../../domain/model/docente';

interface DocenteDataI {    
    
    getTodos(pagination1:Pagination,relations1:any): Promise<Docente[]>;
    getBuscar(builder_object_docente1:any,pagination1:Pagination,relations1:any): Promise<Docente[]>;
    getBuscarGeneral(builder_object_docente1:any,pagination1:Pagination,relations1:any): Promise<Docente[]>;
    getBuscarUno(builder_object_docente1:any,relations1:any): Promise<Docente>;
    
    nuevo(docente1:Docente): Promise<any>;
    actualizar(docente1:Docente): Promise<any>;
    eliminar(id:number): Promise<any>;
    
    nuevos(docentes:Array<Docente>);
    eliminars(ids:Array<number>);
    actualizars(updates_docentes:Array<Docente>,updates_columnas:Array<string>);
    
	getEntitiesFromModels(result:any): Docente[];
	getEntityFromModel(result:any): Docente;
	
    getBuilderFunctionObjectParametroSeleccionar(id:number):any;
    getBuilderFunctionObjectParametroBuscar(req:any):any;
}

export {DocenteDataI};
