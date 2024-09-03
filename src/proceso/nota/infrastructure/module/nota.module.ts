import {Module} from '@nestjs/common';
import {TypeOrmModule} from '@nestjs/typeorm';

import {NotaController} from '../controller/nota.controller';
import {NotaLogic} from '../../application/logic/nota.logic';
import {NotaData} from '../../infrastructure/data/nota.data';
import {Nota} from '../../domain/model/nota';

/*FKs*/
import {AlumnoModule} from '../../../../estructura/alumno/infrastructure/module/alumno.module';
import {MateriaModule} from '../../../../estructura/materia/infrastructure/module/materia.module';
import {DocenteModule} from '../../../../estructura/docente/infrastructure/module/docente.module';
		

@Module({
	imports: [TypeOrmModule.forFeature([Nota]),AlumnoModule,MateriaModule,DocenteModule],
    controllers: [NotaController],
    providers: [NotaLogic,NotaData],
	exports: [NotaLogic,NotaData]
})
class NotaModule {

}

export {NotaModule}