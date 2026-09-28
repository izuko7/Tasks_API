import { z } from 'zod';
import { createZodDto } from 'nestjs-zod';
import { createTaskSchema } from './create-task.dto.js';

export class UpdatetaskDto extends createZodDto(
    createTaskSchema.partial()
) {}