import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCommunityLikeDto } from './dto/create-community_like.dto';
import { UpdateCommunityLikeDto } from './dto/update-community_like.dto';
import { CommunityLike } from './entities/community_like.entity';

@Injectable()
export class CommunityLikesService {
  constructor(
    @InjectRepository(CommunityLike)
    private readonly Community_likeRepository: Repository<CommunityLike>
  ) {}

  async likeCheck(idData: any) {
    const {user_id, community_id} = idData;

    if(!user_id || !community_id) return false;

    return true;
  }

  async likeAction(idData: any) {
    const {user_id, community_id} = idData;

    const hasCheck = await this.Community_likeRepository.findOne({where: {user_id, community_id}});
    
    if(hasCheck === null) {
      const like = new CommunityLike();
      like.user_id = user_id;
      like.community_id = community_id; 

      await this.Community_likeRepository.save(like);
      return true;
    }else{
      await this.Community_likeRepository.delete(hasCheck.id);
      return false;
    }
  }

  // create(createCommunityLikeDto: CreateCommunityLikeDto) {
  //   return 'This action adds a new communityLike';
  // }

  // findAll() {
  //   return `This action returns all communityLikes`;
  // }

  // findOne(id: number) {
  //   return `This action returns a #${id} communityLike`;
  // }

  // update(id: number, updateCommunityLikeDto: UpdateCommunityLikeDto) {
  //   return `This action updates a #${id} communityLike`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} communityLike`;
  // }
}
