import { PartialType } from '@nestjs/mapped-types';
import { CreateCommunityLikeDto } from './create-community_like.dto';

export class UpdateCommunityLikeDto extends PartialType(CreateCommunityLikeDto) {}
