import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Res,
  Delete,
} from '@nestjs/common';
import { TaskService } from './task.service';
import { CreateTaskDto } from './dtos/create-task.dto';
import { returnRes } from 'shared/commons';

@Controller('task')
export class TaskController {
  constructor(private taskService: TaskService) {}
  @Get()
  async getAllTasks(@Res() res) {
    const tasks = await this.taskService.getTasks();
    returnRes(res, 200, true, '', tasks);
  }

  @Get(':id')
  async getTask(@Res() res, @Param('id') id: number) {
    const task = await this.taskService.getTask(id);
    returnRes(res, 200, true, '', task);
  }

  @Post()
  async addTask(@Res() res, @Body() body: CreateTaskDto) {
    await this.taskService.addTask(body);
    returnRes(res, 200, true, 'Task Added Successfully.', []);
  }

  @Delete(':id')
  async deleteTask(@Res() res, @Param('id') id: number) {
    await this.taskService.deleteTask(id);
    returnRes(
      res,
      200,
      true,
      `Task with id ${id} was Deleted Successfully`,
      [],
    );
  }

  @Post(':id')
  async updateTask(
    @Res() res,
    @Param('id') id: number,
    @Body() body: CreateTaskDto,
  ) {
    const task = await this.taskService.updateTask(id, body);
    returnRes(
      res,
      200,
      true,
      `Task with id ${id} was Updated Successfully`,
      task,
    );
  }
}
