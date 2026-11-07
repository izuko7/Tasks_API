import {
	Body,
	Controller,
	Delete,
	Get,
	HttpCode,
	HttpStatus,
	Param,
	Patch,
	Post,
	UseGuards,
} from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { Session, type UserSession } from '@thallesp/nestjs-better-auth';
import { SessionGuard } from '../../common/guards/session.guard.js';
import { CreateProjectDto } from './dto/create-project.dto.js';
import { UpdateProjectDto } from './dto/update-project.dto.js';
import { ProjectsService } from './projects.service.js';

@ApiTags('projects')
@ApiBearerAuth()
@UseGuards(SessionGuard)
@Controller('projects')
export class ProjectsController {
	constructor(private readonly projectsService: ProjectsService) {}

	@Post()
	@HttpCode(HttpStatus.CREATED)
	create(@Session() session: UserSession, @Body() dto: CreateProjectDto) {
		return this.projectsService.create(session.user.id, dto);
	}

	@Get()
	@HttpCode(HttpStatus.OK)
	findAll(@Session() session: UserSession) {
		return this.projectsService.findAll(session.user.id);
	}

	@Get(':id')
	@HttpCode(HttpStatus.OK)
	findOne(@Session() session: UserSession, @Param('id') id: string) {
		return this.projectsService.findOne(session.user.id, id);
	}

	@Patch(':id')
	@HttpCode(HttpStatus.OK)
	update(
		@Session() session: UserSession,
		@Param('id') id: string,
		@Body() dto: UpdateProjectDto,
	) {
		return this.projectsService.update(session.user.id, id, dto);
	}

	@Delete(':id')
	@HttpCode(HttpStatus.NO_CONTENT)
	remove(@Session() session: UserSession, @Param('id') id: string) {
		return this.projectsService.remove(session.user.id, id);
	}
}