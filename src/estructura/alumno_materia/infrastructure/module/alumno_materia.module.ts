import {Module} from '@nestjs/common';
import {TypeOrmModule} from '@nestjs/typeorm';

import {AlumnoMateriaController} from '../controller/alumno_materia.controller';
import {AlumnoMateriaLogic} from '../../application/logic/alumno_materia.logic';
import {AlumnoMateriaData} from '../../infrastructure/data/alumno_materia.data';
import {AlumnoMateria} from '../../domain/model/alumno_materia';

/*FKs*/
import {AlumnoModule} from '../../../../estructura/alumno/infrastructure/module/alumno.module';
import {MateriaModule} from '../../../../estructura/materia/infrastructure/module/materia.module';
		

@Module({
	imports: [TypeOrmModule.forFeature([AlumnoMateria]),AlumnoModule,MateriaModule],
    controllers: [AlumnoMateriaController],
    providers: [AlumnoMateriaLogic,AlumnoMateriaData],
	exports: [AlumnoMateriaLogic,AlumnoMateriaData]
})
class AlumnoMateriaModule {

}

export {AlumnoMateriaModule}