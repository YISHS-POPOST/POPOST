import { PartialType } from '@nestjs/mapped-types';
import { CreateFollowDto } from './create-follow.dto';

export class UpdateFollowDto extends PartialType(CreateFollowDto) {}
