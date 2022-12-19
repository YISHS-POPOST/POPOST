import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCommunityApplyDto } from './dto/create-community_apply.dto';
import { UpdateCommunityApplyDto } from './dto/update-community_apply.dto';
import { CommunityApply } from './entities/community_apply.entity';

@Injectable()
export class CommunityAppliesService {
  constructor(
    @InjectRepository(CommunityApply)
    private readonly Community_appliesRepository: Repository<CommunityApply>,
  ) {}

  async ApplyCreate(applyData: CommunityApply) {
    const { user_id, content, id } = applyData;
    const community_id = id;

    if(!user_id || !content || !community_id) return false;

    const apply = new CommunityApply();
    apply.user_id = user_id;
    apply.content = content;
    apply.community_id = id;

    return await this.Community_appliesRepository.save(apply);
  }

  async ApplyList(targetId: any) {
    const {id} = targetId;

    if(!id) return false;

    return await this.Community_appliesRepository.;
  }

  // create(createCommunityApplyDto: CreateCommunityApplyDto) {
  //   return 'This action adds a new communityApply';
  // }

  // findAll() {
  //   return `This action returns all communityApplies`;
  // }

  // findOne(id: number) {
  //   return `This action returns a #${id} communityApply`;
  // }

  // update(id: number, updateCommunityApplyDto: UpdateCommunityApplyDto) {
  //   return `This action updates a #${id} communityApply`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} communityApply`;
  // }
}
