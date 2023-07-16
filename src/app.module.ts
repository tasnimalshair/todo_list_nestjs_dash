import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { TaskModule } from './task/task.module';
// import configuration from './database/configuration';
import { Task } from './task/task.model';
@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'tasks',
      models: [Task],
      // autoLoadModels: true,
    }),
    TaskModule,
  ],
})
export class AppModule {}
