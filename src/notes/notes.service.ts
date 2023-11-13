import { Injectable } from '@nestjs/common';
import { CreateNoteDto } from './dto/create-note.dto';
import { UpdateNoteDto } from './dto/update-note.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class NotesService {
  constructor(private _prisma: PrismaService) {}

  create(createNoteDto: CreateNoteDto) {
    return this._prisma.notes.create({ data: createNoteDto });
  }

  findAll() {
    return this._prisma.notes.findMany({ where: { status: true } });
  }

  findAllDrafts() {
    return this._prisma.notes.findMany({ where: { status: false } });
  }

  findOne(id: number) {
    return this._prisma.notes.findUnique({ where: { id } });
  }

  update(id: number, updateNoteDto: UpdateNoteDto) {
    return this._prisma.notes.update({ where: { id }, data: updateNoteDto });
  }

  remove(id: number) {
    return this._prisma.notes.delete({ where: { id } });
  }
}
