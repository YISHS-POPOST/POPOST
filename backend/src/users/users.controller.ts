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

@Controller("users")
export class UsersController {
  constructor(
    private readonly UsersService: UsersService,
  ) {}

  @Post("/register")
  async register(@Body() userData: CreateUserDto) {
    const registerUser = await this.UsersService.create(userData);
    if(registerUser === "fail") {
      return {
        success: false,
        message: "이미 사용중인 ID입니다.",
        status: 403,
      }
    }else{
      return {
        success: true,
        message: "성공적으로 하였습니다.",
        status: 201,
      }
    }
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
