import { createZodDto } from "nestjs-zod";
import { z } from "zod";

export const createProjectSchema = z.object({
	name: z.string().trim().min(1).max(80),
	description: z.string().trim().max(500).nullable().optional(),
	dueDate: z.iso.datetime().transform((value) => new Date(value)).nullable().optional(),
});

export class CreateProjectDto extends createZodDto(createProjectSchema) {}