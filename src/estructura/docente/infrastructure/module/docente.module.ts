import {Module} from '@nestjs/common';
import {TypeOrmModule} from '@nestjs/typeorm';

import {DocenteController} from '../controller/docente.controller';
import {DocenteLogic} from '../../application/logic/docente.logic';
import {DocenteData} from '../../infrastructure/data/docente.data';
import {Docente} from '../../domain/model/docente';


@Module({
	imports: [TypeOrmModule.forFeature([Docente])],
    controllers: [DocenteController],
    providers: [DocenteLogic,DocenteData],
	exports: [DocenteLogic,DocenteData]
})
class DocenteModule {

}

export {DocenteModule}