import { Injectable, Options, Res } from "@nestjs/common";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";
import { User } from "./entities/user.entity";
import { Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { Follow } from "src/follows/entities/follow.entity";
import { Community } from "src/communities/entities/community.entity";
import { CommunityApply } from "src/community_applies/entities/community_apply.entity";
import { Note } from "src/notes/entities/note.entity";
import { CommunityLike } from "src/community_likes/entities/community_like.entity";
import { MessageRoom } from "src/message_rooms/entities/message_room.entity";

// follow repository
// community repository
// community likes repository

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly UsersRepository: Repository<User>,

    @InjectRepository(Follow)
    private readonly FollowRepository: Repository<Follow>,

    @InjectRepository(Community)
    private readonly CommunityRepository: Repository<Community>,

    @InjectRepository(CommunityApply)
    private readonly CommunityApplyRepository: Repository<CommunityApply>,

    @InjectRepository(Note)
    private readonly NoteRepository: Repository<Note>,

    @InjectRepository(CommunityLike)
    private readonly CommunityLikeRepository: Repository<CommunityLike>,

    @InjectRepository(MessageRoom)
    private readonly MessageRoomRepository: Repository<MessageRoom>
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

  // 팔로워 , 팔로잉 , 커뮤니티 글 , 커뮤니티 댓글 , 좋아요 카운트
  async findProfile(userId: string) {
    const followerCnt = await this.FollowRepository.count({
      where: {
        follow_id: userId,
      },
    });
    const followingCnt = await this.FollowRepository.count({
      where: {
        follower_id: userId,
      },
    });
    const communityCnt = await this.CommunityRepository.count({
      where: {
        user_id: userId,
      },
    });
    const communityApplyCnt = await this.CommunityApplyRepository.count({
      where: {
        user_id: userId,
      },
    });
    const communityLikeCnt = await this.CommunityLikeRepository.count({
      where: {
        user_id: userId,
      },
    });

    return {
      followerCnt,
      followingCnt,
      communityCnt,
      communityApplyCnt,
      communityLikeCnt,
    };
  }

  async getHomeItems(userId: string) {
    const NoteCnt = await this.NoteRepository.count({
      where: {
        user_id: userId,
      },
    });
    const inviteUser = await this.MessageRoomRepository.find({
      relations: ["inviteUser", "message"],
      where: {
        create_user: userId,
      },
      take: 3,
    });

    const createUser = await this.MessageRoomRepository.find({
      relations: ["createUser", "message"],
      where: {
        invite_user: userId,
      },
      take: 3,
    });

    const MessengerRooms = [...inviteUser, ...createUser];
    return { NoteCnt, MessengerRooms };
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
