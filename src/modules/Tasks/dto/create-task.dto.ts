import { createZodDto } from 'nestjs-zod';
import { z } from 'zod';

export const prioritySchema = z.enum(['low', 'medium', 'high', 'urgent']);
export const taskStatusSchema = z.enum(['todo', 'in_progress', 'done']);

export const createTaskSchema = z.object({
	title: z.string().trim().min(1).max(120),
	description: z.string().trim().max(1000).optional(),
	priority: prioritySchema,
	completed: z.boolean().optional(),
	status: taskStatusSchema.optional(),
	dueDate: z.iso.datetime().transform((value) => new Date(value)).nullable().optional(),
	projectId: z.string().min(1).nullable().optional(),
});

export class CreateTaskDto extends createZodDto(createTaskSchema) {}
