import {Module} from '@nestjs/common';
import {TypeOrmModule} from '@nestjs/typeorm';

import {ContratoController} from '../controller/contrato.controller';
import {ContratoLogic} from '../../application/logic/contrato.logic';
import {ContratoData} from '../../infrastructure/data/contrato.data';
import {Contrato} from '../../domain/model/contrato';

/*FKs*/
import {DocenteModule} from '../../../../estructura/docente/infrastructure/module/docente.module';
		

@Module({
	imports: [TypeOrmModule.forFeature([Contrato]),DocenteModule],
    controllers: [ContratoController],
    providers: [ContratoLogic,ContratoData],
	exports: [ContratoLogic,ContratoData]
})
class ContratoModule {

}

export {ContratoModule}