import {Module} from '@nestjs/common';
import {TypeOrmModule} from '@nestjs/typeorm';

import {SueldoController} from '../controller/sueldo.controller';
import {SueldoLogic} from '../../application/logic/sueldo.logic';
import {SueldoData} from '../../infrastructure/data/sueldo.data';
import {Sueldo} from '../../domain/model/sueldo';

/*FKs*/
import {DocenteModule} from '../../../../estructura/docente/infrastructure/module/docente.module';
		

@Module({
	imports: [TypeOrmModule.forFeature([Sueldo]),DocenteModule],
    controllers: [SueldoController],
    providers: [SueldoLogic,SueldoData],
	exports: [SueldoLogic,SueldoData]
})
class SueldoModule {

}

export {SueldoModule}