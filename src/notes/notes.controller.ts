import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { NotesService } from './notes.service';
import { CreateNoteDto } from './dto/create-note.dto';
import { UpdateNoteDto } from './dto/update-note.dto';
import { ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { Note } from './entities/note.entity';

@Controller('notes')
@ApiTags('notes') // Gouping in Swagger
export class NotesController {
  constructor(private readonly notesService: NotesService) {}

  @Post()
  @ApiCreatedResponse({ type: Note })
  create(@Body() createNoteDto: CreateNoteDto) {
    return this.notesService.create(createNoteDto);
  }

  @Get()
  @ApiOkResponse({ type: Note, isArray: true })
  findAll() {
    return this.notesService.findAll();
  }

  @Get('drafts')
  @ApiOkResponse({ type: Note, isArray: true })
  findAllDrafts() {
    return this.notesService.findAllDrafts();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.notesService.findOne(+id);
  }

  @Patch(':id')
  @ApiOkResponse({ type: Note })
  update(@Param('id') id: string, @Body() updateNoteDto: UpdateNoteDto) {
    return this.notesService.update(+id, updateNoteDto);
  }

  @Delete(':id')
  @ApiOkResponse({ type: Note })
  remove(@Param('id') id: string) {
    return this.notesService.remove(+id);
  }
}
