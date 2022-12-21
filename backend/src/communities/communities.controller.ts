import { Controller, Get, Post, Body, Patch, Param, Delete, Res } from '@nestjs/common';
import HttpError from 'asset/HttpError';
import { CommunitiesService } from './communities.service';
import { CreateCommunityDto } from './dto/create-community.dto';
import { UpdateCommunityDto } from './dto/update-community.dto';

@Controller('communities')
export class CommunitiesController {
  constructor(
    private readonly communitiesService: CommunitiesService,
  ) {}

    //  status type
    // 201 = 요청이 성공적이었으며 그 결과로 새로운 리소스가 생성을 경우.
    // 200 = 요청이 성공적으로 되었습니다. 정보는 요청에 따른 응답으로 반환되는 경우
    // 400 = 이 응답은 잘못된 문법으로 인하여 서버가 요청하여 이해할 수 없음을 의미하는 경우.

  @Get()
  async getCommunityList(@Res() res:any) {
      const getList = await this.communitiesService.getList();
      return res.send(getList);
  }

  @Post("/writing")
  async writeAdd(@Body() body: any, @Res() res: any) {
    const writing = await this.communitiesService.writing(body);

    if(!writing)
      throw new HttpError(404, "누락된 값이 있습니다.");

      return res.status(201).send({message: "글 작성에 성공하였습니다."});
  }

  // @Post()
  // create(@Body() createCommunityDto: CreateCommunityDto) {
  //   return this.communitiesService.create(createCommunityDto);
  // }

  // @Get()
  // findAll() {
  //   return this.communitiesService.findAll();
  // }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.communitiesService.findOne(+id);
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateCommunityDto: UpdateCommunityDto) {
  //   return this.communitiesService.update(+id, updateCommunityDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.communitiesService.remove(+id);
  // }
}
