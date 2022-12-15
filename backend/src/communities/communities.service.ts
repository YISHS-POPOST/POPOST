import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCommunityDto } from './dto/create-community.dto';
import { UpdateCommunityDto } from './dto/update-community.dto';
import { Community } from "./entities/community.entity";

@Injectable()
export class CommunitiesService {
  constructor(
    @InjectRepository(Community)
    private readonly CommunitiesRepository: Repository<Community>
  ){}

  async writing(writeData: CreateCommunityDto) {
    return writeData;
    // const {id, user_id, title, content, link} = writeData;

    // const write = new Community();
    // write.id = id;
    // write.user_id = user_id;
    // write.title = title;
    // write.content = content;
    // write.link = link;

    // return await this.CommunitiesRepository.save(write);
  }

  // findAll() {
  //   return `This action returns all communities`;
  // }

  // findOne(id: number) {
  //   return `This action returns a #${id} community`;
  // }

  // update(id: number, updateCommunityDto: UpdateCommunityDto) {
  //   return `This action updates a #${id} community`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} community`;
  // }
}
