import {Module} from '@nestjs/common';
import {TypeOrmModule} from '@nestjs/typeorm';

import {MatriculaController} from '../controller/matricula.controller';
import {MatriculaLogic} from '../../application/logic/matricula.logic';
import {MatriculaData} from '../../infrastructure/data/matricula.data';
import {Matricula} from '../../domain/model/matricula';

/*FKs*/
import {AlumnoModule} from '../../../../estructura/alumno/infrastructure/module/alumno.module';
		

@Module({
	imports: [TypeOrmModule.forFeature([Matricula]),AlumnoModule],
    controllers: [MatriculaController],
    providers: [MatriculaLogic,MatriculaData],
	exports: [MatriculaLogic,MatriculaData]
})
class MatriculaModule {

}

export {MatriculaModule}