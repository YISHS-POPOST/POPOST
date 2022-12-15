import { Injectable, Options, Res } from "@nestjs/common";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";
import { User } from "./entities/user.entity";
import { Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { ForbiddenException, HttpException } from "@nestjs/common/exceptions";
import { HttpStatus } from "@nestjs/common/enums";

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly UsersRepository: Repository<User>
  ) {}

  async create(userData: CreateUserDto) {
    const { id, password, email, name, phone } = userData;

    const idCheck = await this.UsersRepository.findOne({where : {id}});

    if(idCheck) {
      throw new ForbiddenException({
        statusCode: HttpStatus.FORBIDDEN,
        message: [`이미 등록된 사용자입니다.`],
        error: 'Forbidden',
      });
    }
    try {
      const user = new User();
      user.id = id;
      user.password = password;
      user.email = email;
      user.name = name;
      user.phone = phone;

      return await this.UsersRepository.save(user);
    } catch(error) {
        return {
          ...error,
        }
    }
  }

  async findUser(id : string , password : string){
    return await this.UsersRepository.findOneBy({id , password});
  }

  // create(createUserDto: CreateUserDto) {
  //   return 'This action adds a new user';
  // }

  // findAll() {
  //   return `This action returns all users`;
  // }

  // findOne(id: number) {
  //   return `This action returns a #${id} user`;
  // }

  // update(id: number, updateUserDto: UpdateUserDto) {
  //   return `This action updates a #${id} user`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} user`;
  // }
}
