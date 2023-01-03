import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateNoteDto } from './dto/create-note.dto';
import { UpdateNoteDto } from './dto/update-note.dto';
import { Note } from './entities/note.entity';

@Injectable()
export class NotesService {
  constructor(
    @InjectRepository(Note)
    private readonly NoteRepository: Repository<Note>
  ) {}

  async getNoteList() {
    const list = await this.NoteRepository.find();
    return list;
  }
  
  async addAction(noteData: CreateNoteDto) {
    const {latitude, longitude, content, user_id} = noteData;

    if(!latitude || !longitude || !content || !user_id) return false; 

    const note = new Note();
    note.latitude = latitude;
    note.longitude = longitude;
    note.content = content;
    note.user_id = user_id;
    
    return await this.NoteRepository.save(note);
  } 

  // create(createNoteDto: CreateNoteDto) {
  //   return 'This action adds a new note';
  // }

  // findAll() {
  //   return `This action returns all notes`;
  // }

  // findOne(id: number) {
  //   return `This action returns a #${id} note`;
  // }

  // update(id: number, updateNoteDto: UpdateNoteDto) {
  //   return `This action updates a #${id} note`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} note`;
  // }
}
