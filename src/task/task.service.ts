import { Injectable, NotFoundException } from '@nestjs/common';
import { Task } from './task.model';
import { InjectModel } from '@nestjs/sequelize';
import { CreateTaskDto } from './dtos/create-task.dto';

@Injectable()
export class TaskService {
  constructor(
    @InjectModel(Task)
    private taskModel: typeof Task,
  ) {}
  async getTasks() {
    return await this.taskModel.findAll();
  }

  async getTask(id: number) {
    return await this.taskModel.findByPk(id);
  }

  async addTask(task: CreateTaskDto) {
    return await this.taskModel.create(task);
  }

  async deleteTask(id: number) {
    this.taskModel.destroy({ where: { id } });
  }

  async updateTask(id: number, task: CreateTaskDto) {
    const [updatedRows] = await this.taskModel.update(task, { where: { id } });
    if (updatedRows === 0) {
      throw new NotFoundException(`Task with ID ${id} not found.`);
    }
    return await this.taskModel.findByPk(id);
  }
}
