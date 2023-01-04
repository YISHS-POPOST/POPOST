import {
  Controller,
  Post,
  Body,
  Res,
  UseInterceptors,
  Get,
  Param,
} from "@nestjs/common";
import { UsersService } from "./users.service";
import { User } from "./entities/user.entity";
import { ConfigService } from "@nestjs/config";
import HttpError from "asset/HttpError";
import { FileInterceptor } from "@nestjs/platform-express";
import { UploadedFile } from "@nestjs/common/decorators";
import { diskStorage } from "multer";
import { extname } from "path";
import * as fs from "fs";

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

  // use multer image save code
  @Post("/update")
  @UseInterceptors(
    FileInterceptor("image", {
      storage: diskStorage({
        destination: "./upload",
        filename: (req, file, callBack) => {
          const uniqueSuffix =
            Date.now() + "-" + Math.round(Math.random() * 1e9);
          const ext = extname(file.originalname);
          const filename = `${uniqueSuffix}${ext}`;
          callBack(null, filename);
        },
      }),
    })
  )
  async update(
    @Body() body: any,
    @UploadedFile() file: Express.Multer.File,
    @Res() res
  ) {
    const { name, email, phone, nickname, introduce, userId } = JSON.parse(
      body.data
    );
    const user = await this.UsersService.findUserId(userId);
    if (file && user.profile) fs.unlinkSync("./upload/" + user.profile);
    await this.UsersService.updateUser(userId, {
      name,
      email,
      phone,
      nickname,
      introduce,
      profile: !file ? user.profile : file.filename,
    }).catch(err => {
      throw new HttpError(500, "Server Error");
    });
    return res.status(200).send({ message: "프로필 편집이 완료되었습니다." });
  }

  @Get("/profile/:id")
  async findProfile(@Param("id") id: string) {
    return await this.UsersService.findProfile(id);
  }

  @Get("/home/:id")
  async findHomeItems(@Param("id") id: string) {
    const profileItems = await this.UsersService.findProfile(id);
    const getHomeItem = await this.UsersService.getHomeItems(id);
    return { ...profileItems, ...getHomeItem };
  }
  // @Patch(":id")
  // update(@Param("id") id: string, @Body() updateUserDto: UpdateUserDto) {
  //   return this.usersService.update(+id, updateUserDto);
  // }

  // @Delete(":id")
  // remove(@Param("id") id: string) {
  //   return this.usersService.remove(+id);
  // }
}
