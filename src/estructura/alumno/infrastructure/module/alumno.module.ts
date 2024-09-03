import {Module} from '@nestjs/common';
import {TypeOrmModule} from '@nestjs/typeorm';

import {AlumnoController} from '../controller/alumno.controller';
import {AlumnoLogic} from '../../application/logic/alumno.logic';
import {AlumnoData} from '../../infrastructure/data/alumno.data';
import {Alumno} from '../../domain/model/alumno';


@Module({
	imports: [TypeOrmModule.forFeature([Alumno])],
    controllers: [AlumnoController],
    providers: [AlumnoLogic,AlumnoData],
	exports: [AlumnoLogic,AlumnoData]
})
class AlumnoModule {

}

export {AlumnoModule}