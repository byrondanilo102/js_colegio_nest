import {Module} from '@nestjs/common';
import {TypeOrmModule} from '@nestjs/typeorm';

import {PensionController} from '../controller/pension.controller';
import {PensionLogic} from '../../application/logic/pension.logic';
import {PensionData} from '../../infrastructure/data/pension.data';
import {Pension} from '../../domain/model/pension';

/*FKs*/
import {AlumnoModule} from '../../../../estructura/alumno/infrastructure/module/alumno.module';
		

@Module({
	imports: [TypeOrmModule.forFeature([Pension]),AlumnoModule],
    controllers: [PensionController],
    providers: [PensionLogic,PensionData],
	exports: [PensionLogic,PensionData]
})
class PensionModule {

}

export {PensionModule}