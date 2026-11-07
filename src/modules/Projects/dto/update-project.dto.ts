import { createZodDto } from 'nestjs-zod';
import { createProjectSchema } from './create-project.dto.js';

export class UpdateProjectDto extends createZodDto(createProjectSchema.partial()) {}