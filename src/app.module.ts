import { Module } from '@nestjs/common';

import { TypeOrmModule } from '@nestjs/typeorm';

import { VehiclesModule } from './vehicles/vehicles.module';

@Module({
  imports: [

    TypeOrmModule.forRoot({

      type: 'postgres',

      host: 'localhost',

      port: 5432,

      username: 'postgres',

      password: '1234',

      database: 'db_vehicle_aeq',

      autoLoadEntities: true,

      synchronize: true,

    }),

    VehiclesModule,

  ],
})
export class AppModule {}
