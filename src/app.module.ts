import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
// import { PrismaModule } from './prisma/prisma.module';
import { NotesModule } from './notes/notes.module';
import { PrismaModule } from 'nestjs-prisma';

@Module({
  imports: [PrismaModule.forRoot({ isGlobal: true }), NotesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
