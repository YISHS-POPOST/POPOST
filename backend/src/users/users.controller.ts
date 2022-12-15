import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Req,
  Res,
} from "@nestjs/common";
import { UsersService } from "./users.service";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";
import { User } from "./entities/user.entity";
import { Repository } from "typeorm";
import { ConfigService } from "@nestjs/config";
import HttpError from "asset/HttpError";
import { ConnectableObservable } from "rxjs";

@Controller("users")
export class UsersController {
  constructor(
    private readonly UsersService: UsersService,
    private configService: ConfigService
  ) {}

  @Post("/register")
  async register(@Body() userData: any, @Res() res: any) {
    const findUserId = await this.UsersService.findUserId(userData.id);

    if(findUserId !== null) throw new HttpError(404, "이미 가입한 아이디입니다.")
    
    await this.UsersService.create(userData);
    return res.status(201).send({ message : "회원가입에 성공하셨습니다." });
    
  }

  @Post("/login")
  async login(@Body() body: any) {
    const { id, password } = body;
    const findUser = await this.UsersService.findUser(id, password);
    throw new HttpError(404, "아이디 혹은 비밀번호가 잘못되었습니다.");
    
    // return findUser;
  }

  // @Post()
  // create(@Body() createUserDto: CreateUserDto) {
  //   return this.usersService.create(createUserDto);
  // }

  // @Get()
  // findAll() {
  //   return this.usersService.findAll();
  // }

  // @Get(":id")
  // findOne(@Param("id") id: string) {
  //   return this.usersService.findOne(+id);
  // }

  // @Patch(":id")
  // update(@Param("id") id: string, @Body() updateUserDto: UpdateUserDto) {
  //   return this.usersService.update(+id, updateUserDto);
  // }

  // @Delete(":id")
  // remove(@Param("id") id: string) {
  //   return this.usersService.remove(+id);
  // }
}
