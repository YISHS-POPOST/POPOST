import { Controller, Get, Post, Body, Patch, Param, Delete, Res } from '@nestjs/common';
import HttpError from 'asset/HttpError';
import { NotesService } from './notes.service';
import { CreateNoteDto } from './dto/create-note.dto';
import { UpdateNoteDto } from './dto/update-note.dto';

@Controller('notes')
export class NotesController {
  constructor(private readonly notesService: NotesService) {}

  @Get()
  async getNoteList() {
    const getNoteList = await this.notesService.getNoteList();
    return getNoteList;
  }

  @Post('/add')
  async noteAddAction(@Body() noteData: any, @Res() res: any) {
    const addAction = await this.notesService.addAction(noteData);

    if(!addAction) 
      throw new HttpError(404, "누락된 값이 있습니다.");
    
    return res.status(201).send({message: "쪽지를 성공적으로 생성하였습니다."});
  }

  @Post("/find")
  async noteFindAction(@Body() id: any, @Res() res: any) {
    const findNoteData = await this.notesService.findNoteData(id);
    
    if(findNoteData === false) throw new HttpError(404, "누락 된 값이 있습니다.");
    if(findNoteData === null) throw new HttpError(404, "존재하지 않는 값입니다.");
    
    return res.status(200).send(findNoteData);
  }

  // @Post()
  // create(@Body() createNoteDto: CreateNoteDto) {
  //   return this.notesService.create(createNoteDto);
  // }

  // @Get()
  // findAll() {
  //   return this.notesService.findAll();
  // }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.notesService.findOne(+id);
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateNoteDto: UpdateNoteDto) {
  //   return this.notesService.update(+id, updateNoteDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.notesService.remove(+id);
  // }
}
