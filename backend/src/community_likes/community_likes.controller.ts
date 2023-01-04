import { Controller, Get, Post, Body, Patch, Param, Delete, Res } from '@nestjs/common';
import HttpError from 'asset/HttpError';
import { CommunityLikesService } from './community_likes.service';
import { CreateCommunityLikeDto } from './dto/create-community_like.dto';
import { UpdateCommunityLikeDto } from './dto/update-community_like.dto';

@Controller('community-likes')
export class CommunityLikesController {
  constructor(private readonly communityLikesService: CommunityLikesService) {}

  @Post("/getLike")
  async getLike(@Body() idData: any, @Res() res: any) {
    const likeCheck = await this.communityLikesService.likeCheck(idData);
    if(!likeCheck) throw new HttpError(404, "누락된 값이 있습니다.");

    const likeAction = await this.communityLikesService.likeAction(idData);
    
    res.status(!likeAction ? 200 : 201).send({message: !likeAction ? "좋아요 취소" : "좋아요"});
  }

  // @Post()
  // create(@Body() createCommunityLikeDto: CreateCommunityLikeDto) {
  //   return this.communityLikesService.create(createCommunityLikeDto);
  // }

  // @Get()
  // findAll() {
  //   return this.communityLikesService.findAll();
  // }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.communityLikesService.findOne(+id);
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateCommunityLikeDto: UpdateCommunityLikeDto) {
  //   return this.communityLikesService.update(+id, updateCommunityLikeDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.communityLikesService.remove(+id);
  // }
}
