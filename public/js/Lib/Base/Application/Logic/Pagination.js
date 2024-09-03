import {Constantes} from "../../Util/Constantes.js";

class Pagination {
	
	skip;
    limit;

    constructor() {
        this.skip=0;
        this.limit=Constantes.LIMIT;
    }
}

export {Pagination};