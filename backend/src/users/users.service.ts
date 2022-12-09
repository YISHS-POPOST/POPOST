import { Injectable, Options } from "@nestjs/common";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";
import { User } from "./entities/user.entity";
import { Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly UsersRepository: Repository<User>
  ) {}

  async find() {
    return this.UsersRepository.find();
  }

  async create(userData: CreateUserDto) {
    const { id, password, email, name, phone } = userData;

    const user = new User();
    user.id = id;
    user.password = password;
    user.email = email;
    user.name = name;
    user.phone = phone;

    await this.UsersRepository.save(user);
  }

  async findOne(id : string){
    return await this.UsersRepository.findOneBy({id});
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
