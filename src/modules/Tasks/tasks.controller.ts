import { Body,Controller,Delete,Get,HttpCode,HttpStatus,
    Param, Patch, Post, Query, UseGuards} from '@nestjs/common';
import { Session, type UserSession } from '@thallesp/nestjs-better-auth';
import { CreateTaskDto } from './dto/create-task.dto.js';
import { UpdatetaskDto } from './dto/update-task.dto.js';
import { ListTasksQueryDto } from './dto/list-task.dto.js';
import { TasksService } from './tasks.service.js';
import { SessionGuard } from '../../common/guards/session.guard.js';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';


@ApiTags('tasks')
@ApiBearerAuth()
@UseGuards(SessionGuard)
@Controller('tasks')
export class TasksController {
    constructor(private readonly tasksService: TasksService) {}

    @Post()
    @HttpCode(HttpStatus.CREATED)
    create(@Session() session : UserSession, @Body() dto: CreateTaskDto) {
        return this.tasksService.create(session.user.id, dto);
    }

    @Get()
    @HttpCode(HttpStatus.OK)
    findAll(@Session() session: UserSession, @Query() query: ListTasksQueryDto) {
        return this.tasksService.findAll(session.user.id, query);
    }

    @Get(':id')
    @HttpCode(HttpStatus.OK)
    findOne(@Session() session : UserSession, @Param("id") id : string) {
        return this.tasksService.findOne(session.user.id, id)
    }


    @Patch(':id')
    @HttpCode(HttpStatus.OK)
    update(
        @Session() session : UserSession,
        @Param('id') id : string,
        @Body() dto : UpdatetaskDto,
    ) {
        return this.tasksService.update(session.user.id, id, dto)
    }

    @Patch(':id/complete')
    @HttpCode(HttpStatus.OK)
    complete(
        @Session() session: UserSession, 
        @Param('id') id: string
    ) {
        return this.tasksService.complete(session.user.id, id);
    }

    @Delete(':id')
    @HttpCode(HttpStatus.NO_CONTENT)
    remove(@Session() session : UserSession, @Param('id') id: string) {
        return this.tasksService.remove(session.user.id, id)
    }
}
