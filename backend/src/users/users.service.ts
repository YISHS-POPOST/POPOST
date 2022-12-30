import { Injectable, Options, Res } from "@nestjs/common";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";
import { User } from "./entities/user.entity";
import { Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { ForbiddenException, HttpException } from "@nestjs/common/exceptions";
import HttpError from "asset/HttpError";
import { from, switchMap } from "rxjs";

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly UsersRepository: Repository<User>
  ) {}

  async findUserId(id: string) {
    return await this.UsersRepository.findOne({ where: { id } });
  }

  async create(userData: CreateUserDto) {
    const { id, password, email, name, phone } = userData;

    const user = new User();
    user.id = id;
    user.password = password;
    user.email = email;
    user.name = name;
    user.phone = phone;
    
    return await this.UsersRepository.save(user);
  }

  async findUser(id: string, password: string) {
    return await this.UsersRepository.findOneBy({ id, password });
  }

  async updateUser(userId: string, updateUserDto: UpdateUserDto) {
    return this.UsersRepository.update(userId, updateUserDto);
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

  // remove(id: number) {
  //   return `This action removes a #${id} user`;
  // }
}
