import { PartialType } from '@nestjs/mapped-types';
import { CreateCommunityApplyDto } from './create-community_apply.dto';

export class UpdateCommunityApplyDto extends PartialType(CreateCommunityApplyDto) {}
