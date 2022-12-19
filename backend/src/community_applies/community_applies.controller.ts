import { Controller, Get, Post, Body, Patch, Param, Delete, Res } from '@nestjs/common';
import HttpError from 'asset/HttpError';
import { CommunityAppliesService } from './community_applies.service';
import { CreateCommunityApplyDto } from './dto/create-community_apply.dto';
import { UpdateCommunityApplyDto } from './dto/update-community_apply.dto';

@Controller('community-applies')
export class CommunityAppliesController {
  constructor(private readonly communityAppliesService: CommunityAppliesService) {}

  @Post('/applyAdd')
  async ApplyCreate(@Body() body: any, @Res() res: any) {
    const ApplyCreate = await this.communityAppliesService.ApplyCreate(body);

    if(!ApplyCreate)
      throw new HttpError(404, "누락된 값이 있습니다.");

    return res.status(201).send({message: "댓글 작성에 성공하였습니다."});
  }

  @Post('/getList')
  async GetApplyList(@Body() targetId:number, @Res() res: any) {
    const ApplyList = await this.communityAppliesService.ApplyList(targetId);

    if(!ApplyList)
      throw new HttpError(404, "누락된 값이 있습니다.");

      console.log(ApplyList);
      res.status(201).send(ApplyList);
  }

  // @Post()
  // create(@Body() createCommunityApplyDto: CreateCommunityApplyDto) {
  //   return this.communityAppliesService.create(createCommunityApplyDto);
  // }

  // @Get()
  // findAll() {
  //   return this.communityAppliesService.findAll();
  // }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.communityAppliesService.findOne(+id);
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateCommunityApplyDto: UpdateCommunityApplyDto) {
  //   return this.communityAppliesService.update(+id, updateCommunityApplyDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.communityAppliesService.remove(+id);
  // }
}
