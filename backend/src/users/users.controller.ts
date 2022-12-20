import { Controller, Post, Body, Res, UseInterceptors } from "@nestjs/common";
import { UsersService } from "./users.service";
import { User } from "./entities/user.entity";
import { ConfigService } from "@nestjs/config";
import HttpError from "asset/HttpError";
import { FileInterceptor } from "@nestjs/platform-express";
import { UploadedFile } from "@nestjs/common/decorators";
import { FilesInterceptor } from "@nestjs/platform-express/multer";

@Controller("users")
export class UsersController {
  constructor(
    private readonly UsersService: UsersService,
    private configService: ConfigService
  ) {}

  @Post("/register")
  async register(@Body() userData: any, @Res() res: any) {
    const findUserId = await this.UsersService.findUserId(userData.id);

    if (findUserId !== null)
      throw new HttpError(404, "이미 가입한 아이디입니다.");

    await this.UsersService.create(userData);
    return res.status(201).send({ message: "회원가입에 성공하셨습니다." });
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
        const users = findUser;
        return res.status(200).send({
          message: "로그인이 완료되었습니다.",
          id: findUser.id,
          password: findUser.password,
          users: users,
        });
      }
    }
  }

  @Post("/update")
  @UseInterceptors(FileInterceptor("image"))
  async update(@Body() body: any, @UploadedFile() file: Express.Multer.File) {
    const { name, email, phone, nickname, introduce } = JSON.parse(body.data);
    console.log(file);
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
