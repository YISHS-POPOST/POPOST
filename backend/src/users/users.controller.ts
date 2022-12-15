import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Res,
  Delete,
  Response,
  HttpException,
} from "@nestjs/common";
import { UsersService } from "./users.service";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";
import { User } from "./entities/user.entity";
import { Repository } from "typeorm";
import { ConfigService } from "@nestjs/config";
import HttpError from "asset/HttpError";

@Controller("users")
export class UsersController {
  constructor(
    private readonly UsersService: UsersService,
    private configService: ConfigService
  ) {}

  @Post("/register")
  async register(@Body() userData: any) {
    const registerUser = await this.UsersService.create(userData);
    if (registerUser === "fail") {
      return {
        success: false,
        message: "이미 사용중인 ID입니다.",
        status: 403,
      };
    } else {
      return {
        success: true,
        message: "성공적으로 하였습니다.",
        status: 201,
      };
    }
  }

  @Post("/login")
  async login(@Body() body: any, @Res() res: any) {
    const { id, password } = body;
    const findUser: Error | User = await this.UsersService.findUser(
      id,
      password
    );

    switch (!findUser) {
      // 유저를 찾을 수 없을때
      case true: {
        throw new HttpError(404, "아이디 혹은 비밀번호가 잘못되었습니다.");
      }

      // 유저 로그인을 완료 할 수 있을때
      case false: {
        return res
          .status(200)
          .send({ message: "로그인이 완료되었습니다.", id: findUser.id });
      }
    }
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
