import { z } from "zod";
import { createZodDto } from "nestjs-zod";
import { prioritySchema } from "./create-task.dto.js";

export class ListTasksQueryDto extends createZodDto(
    z.object({
        completed: z.enum(['true', 'flase'])
            .transform((v) => v === 'true')
            .optional(),
        priority: prioritySchema.optional(),
    }),
) {}


