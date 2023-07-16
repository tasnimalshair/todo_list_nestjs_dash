import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Task } from './task.model';
import { TaskController } from './task.controller';
import { TaskService } from './task.service';

@Module({
  imports: [SequelizeModule.forFeature([Task])],
  exports: [SequelizeModule],
  controllers: [TaskController],
  providers: [TaskService],
})
export class TaskModule {}
