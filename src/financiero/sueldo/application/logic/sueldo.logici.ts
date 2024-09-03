import {Pagination} from '../../../../base/application/logic/pagination';

import {Sueldo} from '../../domain/model/sueldo';

interface SueldoLogicI {    
    
    getTodos(pagination1:Pagination,relations1:any): Promise<Sueldo[]>;
    getBuscar(builder_object_sueldo1:any,pagination1:Pagination,relations1:any): Promise<Sueldo[]>;
    getBuscarGeneral(builder_object_sueldo1:any,pagination1:Pagination,relations1:any): Promise<Sueldo[]>;
    getBuscarUno(builder_object_sueldo1:any,relations1:any): Promise<Sueldo>;
    
    nuevo(sueldo1:Sueldo): Promise<any>;
    actualizar(sueldo1:Sueldo): Promise<any>;
    eliminar(id:number): Promise<any>;
    
    nuevos(sueldos:Array<Sueldo>);
    eliminars(ids:Array<number>);
    actualizars(updates_sueldos:Array<Sueldo>,updates_columnas:Array<string>);
    
    getBuilderFunctionObjectParametroSeleccionar(id:number):any;
    getBuilderFunctionObjectParametroBuscar(req:any):any;
}

export {SueldoLogicI};
