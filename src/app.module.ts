import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
//import { DataSource } from 'typeorm';

import { AppController } from './app.controller';
import { AppService } from './app.service';

/*----------------------------------- MODULES ---------------------------------*/

import {AlumnoModule} from './estructura/alumno/infrastructure/module/alumno.module';	
import {AlumnoMateriaModule} from './estructura/alumno_materia/infrastructure/module/alumno_materia.module';	
import {ContratoModule} from './financiero/contrato/infrastructure/module/contrato.module';	
import {DocenteModule} from './estructura/docente/infrastructure/module/docente.module';	
import {DocenteMateriaModule} from './estructura/docente_materia/infrastructure/module/docente_materia.module';	
import {MateriaModule} from './estructura/materia/infrastructure/module/materia.module';	
import {MatriculaModule} from './proceso/matricula/infrastructure/module/matricula.module';	
import {NotaModule} from './proceso/nota/infrastructure/module/nota.module';	
import {PensionModule} from './financiero/pension/infrastructure/module/pension.module';	
import {SueldoModule} from './financiero/sueldo/infrastructure/module/sueldo.module';	
		

/*----------------------------------- MODELS ---------------------------------*/

import {Alumno} from './estructura/alumno/domain/model/alumno';	
import {AlumnoMateria} from './estructura/alumno_materia/domain/model/alumno_materia';	
import {Contrato} from './financiero/contrato/domain/model/contrato';	
import {Docente} from './estructura/docente/domain/model/docente';	
import {DocenteMateria} from './estructura/docente_materia/domain/model/docente_materia';	
import {Materia} from './estructura/materia/domain/model/materia';	
import {Matricula} from './proceso/matricula/domain/model/matricula';	
import {Nota} from './proceso/nota/domain/model/nota';	
import {Pension} from './financiero/pension/domain/model/pension';	
import {Sueldo} from './financiero/sueldo/domain/model/sueldo';	


@Module({
  imports: [
    AlumnoModule,
    AlumnoMateriaModule,
    ContratoModule,
    DocenteModule,
    DocenteMateriaModule,
    MateriaModule,
    MatriculaModule,
    NotaModule,
    PensionModule,
    SueldoModule,

    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: '2015_colegio_relaciones',      
      synchronize: false,
      
      entities: [
        Alumno,
        AlumnoMateria,
        Contrato,
        Docente,
        DocenteMateria,
        Materia,
        Matricula,
        Nota,
        Pension,
        Sueldo],
    })],

  controllers: [AppController],

  providers: [AppService],
})

export class AppModule {
  //constructor(private dataSource: DataSource) {}
}

// DOCKER
// host: 'me_colegio_mariadb_c01',

// LOCAL
//host: 'localhost',
