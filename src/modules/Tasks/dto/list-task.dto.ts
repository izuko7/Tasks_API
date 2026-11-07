import { createZodDto } from 'nestjs-zod';
import { z } from 'zod';
import { prioritySchema, taskStatusSchema } from './create-task.dto.js';

export class ListTasksQueryDto extends createZodDto(
	z.object({
		completed: z
			.enum(['true', 'false'])
			.transform((v) => v === 'true')
			.optional(),
		priority: prioritySchema.optional(),
		status: taskStatusSchema.optional(),
		projectId: z.string().min(1).optional()
	}),
) {}
