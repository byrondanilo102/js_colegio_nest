import {Pagination} from '../../../../base/application/logic/pagination';

import {Contrato} from '../../domain/model/contrato';

interface ContratoLogicI {    
    
    getTodos(pagination1:Pagination,relations1:any): Promise<Contrato[]>;
    getBuscar(builder_object_contrato1:any,pagination1:Pagination,relations1:any): Promise<Contrato[]>;
    getBuscarGeneral(builder_object_contrato1:any,pagination1:Pagination,relations1:any): Promise<Contrato[]>;
    getBuscarUno(builder_object_contrato1:any,relations1:any): Promise<Contrato>;
    
    nuevo(contrato1:Contrato): Promise<any>;
    actualizar(contrato1:Contrato): Promise<any>;
    eliminar(id:number): Promise<any>;
    
    nuevos(contratos:Array<Contrato>);
    eliminars(ids:Array<number>);
    actualizars(updates_contratos:Array<Contrato>,updates_columnas:Array<string>);
    
    getBuilderFunctionObjectParametroSeleccionar(id:number):any;
    getBuilderFunctionObjectParametroBuscar(req:any):any;
}

export {ContratoLogicI};
