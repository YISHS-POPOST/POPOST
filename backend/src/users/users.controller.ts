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
  HttpCode,
  HttpStatus,
} from "@nestjs/common";
import { UsersService } from "./users.service";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";
import { User } from "./entities/user.entity";
import { Repository } from "typeorm";

@Controller("users")
export class UsersController {
  constructor(
    private readonly UsersService: UsersService,
  ) {}

  @Post("/register")
  @HttpCode(HttpStatus.CREATED)
  async register(@Res() res: any, @Body() userData: CreateUserDto) {
    const registerUser = this.UsersService.create(userData);
    return registerUser;
  }

  @Post("/login")
  async login(@Body() body: any)  {
    const {id , password} = body;
    const findUser = await this.UsersService.findUser(id , password);
    return findUser;
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
