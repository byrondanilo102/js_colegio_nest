import {Constantes} from "../../util/constantes";
import {IsNumberString,IsInt} from 'class-validator';

class Pagination {
	
    @IsInt()
	skip:number=0;

    @IsInt()
    limit:number=0;

    constructor() {
        this.skip=0;
        this.limit=Constantes.LIMIT;
    }
}

export {Pagination};