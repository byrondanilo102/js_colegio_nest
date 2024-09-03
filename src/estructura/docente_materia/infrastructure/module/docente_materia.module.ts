import {Module} from '@nestjs/common';
import {TypeOrmModule} from '@nestjs/typeorm';

import {DocenteMateriaController} from '../controller/docente_materia.controller';
import {DocenteMateriaLogic} from '../../application/logic/docente_materia.logic';
import {DocenteMateriaData} from '../../infrastructure/data/docente_materia.data';
import {DocenteMateria} from '../../domain/model/docente_materia';

/*FKs*/
import {DocenteModule} from '../../../../estructura/docente/infrastructure/module/docente.module';
import {MateriaModule} from '../../../../estructura/materia/infrastructure/module/materia.module';
		

@Module({
	imports: [TypeOrmModule.forFeature([DocenteMateria]),DocenteModule,MateriaModule],
    controllers: [DocenteMateriaController],
    providers: [DocenteMateriaLogic,DocenteMateriaData],
	exports: [DocenteMateriaLogic,DocenteMateriaData]
})
class DocenteMateriaModule {

}

export {DocenteMateriaModule}