import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service.js';
import { CreateProjectDto } from './dto/create-project.dto.js';
import { UpdateProjectDto } from './dto/update-project.dto.js';

const projectInclude = {
	tasks: { select: { status: true } },
} as const;

// Calcule la progression à partir des tâches, puis retire la liste des tâches de la réponse
function withProgress<T extends { tasks: { status: string }[] }>(project: T) {
	const { tasks, ...rest } = project;
	const tasksTotal = tasks.length;
	const tasksDone = tasks.filter((task) => task.status === 'done').length;
	const progress = tasksTotal === 0 ? 0 : Math.round((tasksDone / tasksTotal) * 100);
	return { ...rest, tasksTotal, tasksDone, progress };
}

@Injectable()
export class ProjectsService {
	constructor(private readonly prisma: PrismaService) {}

	async create(userId: string, dto: CreateProjectDto) {
		const project = await this.prisma.project.create({
			data: { ...dto, userId },
			include: projectInclude,
		});
		return withProgress(project);
	}

	async findAll(userId: string) {
		const projects = await this.prisma.project.findMany({
			where: { userId },
			orderBy: { createdAt: 'desc' },
			include: projectInclude,
		});
		return projects.map((project) => withProgress(project));
	}

	async findOne(userId: string, id: string) {
		const project = await this.prisma.project.findFirst({
			where: { id, userId },
			include: projectInclude,
		});
		if (!project) throw new NotFoundException(`Le projet ${id} n'existe pas`);
		return withProgress(project);
	}

	async update(userId: string, id: string, dto: UpdateProjectDto) {
		await this.findOne(userId, id); // Vérification
		const project = await this.prisma.project.update({
			where: { id },
			data: dto,
			include: projectInclude,
		});
		return withProgress(project);
	}

	async remove(userId: string, id: string) {
		await this.findOne(userId, id);
		await this.prisma.project.delete({ where: { id } });
	}
}