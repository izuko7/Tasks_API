import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service.js';
import { CreateTaskDto } from './dto/create-task.dto.js';
import { ListTasksQueryDto } from './dto/list-task.dto.js';
import { UpdatetaskDto } from './dto/update-task.dto.js';

const taskInclude = {
	project: { select: { id: true, name: true } },
} as const;

@Injectable()
export class TasksService {
	constructor(private readonly prisma: PrismaService) {}

	// Vérifie que le projet existe ET appartient à l'utilisateur connecté
	private async assertProjectOwned(userId: string, projectId?: string | null) {
		if (!projectId) return;
		const project = await this.prisma.project.findFirst({
			where: { id: projectId, userId },
			select: { id: true },
		});
		if (!project) throw new NotFoundException(`Le projet ${projectId} n'existe pas`);
	}

	// Créer une nouvelle tâche
	async create(userId: string, dto: CreateTaskDto) {
		await this.assertProjectOwned(userId, dto.projectId);
		return this.prisma.task.create({
			data: { ...dto, userId },
			include: taskInclude,
		});
	}

	findAll(userId: string, filters: ListTasksQueryDto) {
		return this.prisma.task.findMany({
			where: { userId, ...filters },
			orderBy: { createdAt: 'desc' },
			include: taskInclude,
		});
	}

	async findOne(userId: string, id: string) {
		const task = await this.prisma.task.findFirst({
			where: { id, userId },
			include: taskInclude,
		});
		if (!task) throw new NotFoundException(`La tâche ${id} n'existe pas`);
		return task;
	}

	async update(userId: string, id: string, dto: UpdatetaskDto) {
		await this.findOne(userId, id); // Vérification
		await this.assertProjectOwned(userId, dto.projectId);
		return this.prisma.task.update({
			where: { id },
			data: dto,
			include: taskInclude,
		});
	}

	async complete(userId: string, id: string) {
		await this.findOne(userId, id);
		return this.prisma.task.update({
			where: { id },
			data: { status: 'done' },
			include: taskInclude,
		});
	}

	async remove(userId: string, id: string) {
		await this.findOne(userId, id);
		await this.prisma.task.delete({
			where: { id },
		});
	}
}