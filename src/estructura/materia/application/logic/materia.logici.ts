import {Pagination} from '../../../../base/application/logic/pagination';

import {Materia} from '../../domain/model/materia';

interface MateriaLogicI {    
    
    getTodos(pagination1:Pagination,relations1:any): Promise<Materia[]>;
    getBuscar(builder_object_materia1:any,pagination1:Pagination,relations1:any): Promise<Materia[]>;
    getBuscarGeneral(builder_object_materia1:any,pagination1:Pagination,relations1:any): Promise<Materia[]>;
    getBuscarUno(builder_object_materia1:any,relations1:any): Promise<Materia>;
    
    nuevo(materia1:Materia): Promise<any>;
    actualizar(materia1:Materia): Promise<any>;
    eliminar(id:number): Promise<any>;
    
    nuevos(materias:Array<Materia>);
    eliminars(ids:Array<number>);
    actualizars(updates_materias:Array<Materia>,updates_columnas:Array<string>);
    
    getBuilderFunctionObjectParametroSeleccionar(id:number):any;
    getBuilderFunctionObjectParametroBuscar(req:any):any;
}

export {MateriaLogicI};
