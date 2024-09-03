import {Pagination} from '../../../../base/application/logic/pagination';

import {Nota} from '../../domain/model/nota';

interface NotaDataI {    
    
    getTodos(pagination1:Pagination,relations1:any): Promise<Nota[]>;
    getBuscar(builder_object_nota1:any,pagination1:Pagination,relations1:any): Promise<Nota[]>;
    getBuscarGeneral(builder_object_nota1:any,pagination1:Pagination,relations1:any): Promise<Nota[]>;
    getBuscarUno(builder_object_nota1:any,relations1:any): Promise<Nota>;
    
    nuevo(nota1:Nota): Promise<any>;
    actualizar(nota1:Nota): Promise<any>;
    eliminar(id:number): Promise<any>;
    
    nuevos(notas:Array<Nota>);
    eliminars(ids:Array<number>);
    actualizars(updates_notas:Array<Nota>,updates_columnas:Array<string>);
    
	getEntitiesFromModels(result:any): Nota[];
	getEntityFromModel(result:any): Nota;
	
    getBuilderFunctionObjectParametroSeleccionar(id:number):any;
    getBuilderFunctionObjectParametroBuscar(req:any):any;
}

export {NotaDataI};
