import {Pagination} from '../../../../base/application/logic/pagination';

import {Pension} from '../../domain/model/pension';

interface PensionLogicI {    
    
    getTodos(pagination1:Pagination,relations1:any): Promise<Pension[]>;
    getBuscar(builder_object_pension1:any,pagination1:Pagination,relations1:any): Promise<Pension[]>;
    getBuscarGeneral(builder_object_pension1:any,pagination1:Pagination,relations1:any): Promise<Pension[]>;
    getBuscarUno(builder_object_pension1:any,relations1:any): Promise<Pension>;
    
    nuevo(pension1:Pension): Promise<any>;
    actualizar(pension1:Pension): Promise<any>;
    eliminar(id:number): Promise<any>;
    
    nuevos(pensions:Array<Pension>);
    eliminars(ids:Array<number>);
    actualizars(updates_pensions:Array<Pension>,updates_columnas:Array<string>);
    
    getBuilderFunctionObjectParametroSeleccionar(id:number):any;
    getBuilderFunctionObjectParametroBuscar(req:any):any;
}

export {PensionLogicI};
