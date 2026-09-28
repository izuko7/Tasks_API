import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto.js';
import { UpdatetaskDto } from './dto/update-task.dto.js';
import { ListTasksQueryDto } from './dto/list-task.dto.js';
import { PrismaService } from '../../prisma/prisma.service.js';

@Injectable()
export class TasksService {
    constructor (private readonly prisma: PrismaService) {}

    // Créer une nouvelle tâche
    create(userId: string, dto: CreateTaskDto) {
        return this.prisma.task.create({ data: {...dto, userId}});
    }

    findAll(userId: string, filters: ListTasksQueryDto) {
        return this.prisma.task.findMany({
            where: {userId, ...filters},
            orderBy: {createdAt: 'desc'},
        });
    }

    async findOne(userId: string, id: string){
        const task = await this.prisma.task.findFirst({
            where: {id, userId}
        });
        if(!task) throw new NotFoundException(`La tâche ${id} n'existe pas`);
        return task;
    }

    async update(userId: string, id: string, dto: UpdatetaskDto){
        await this.findOne(userId, id) //Vérification
        return this.prisma.task.update({
            where: {id},
            data: dto
        })
    }

    async complete(userId: string, id: string){
        await this.findOne(userId, id);
        return this.prisma.task.update({
            where: {id},
            data: { completed: true},
        });
    }

    async remove(userId: string, id:string){
        await this.findOne(userId, id);
        await this.prisma.task.delete({
            where: {id}
        });
    }
}
