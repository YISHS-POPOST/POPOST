import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
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

  @Post()
  async test() {
    return this.UsersService.find(); 
  }

  @Post("/register")
  async register(@Body() userData: CreateUserDto) {
    return this.UsersService.create(userData);
  }


  @Post("/login")
  async login(@Body() body: any)  {
    const {id} = body;
    const findUser = await this.UsersService.findOne(id);
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
