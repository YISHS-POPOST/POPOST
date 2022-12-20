import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';
import {IsNumber , IsString , IsEmail   } from "class-validator";

export class UpdateUserDto extends PartialType(CreateUserDto) {
    // 이름 , 전화번호 , 이메일 , 이름 , 사진 , 별명 , 소개 
    @IsString()
    readonly email : string;
    
    @IsString()
    readonly phone : string;
    
    @IsString()
    readonly name : string;

    readonly image ?: string | undefined | null;
    
    @IsString()
    readonly introduce : string;

    @IsString()
    readonly nickname : string;
}
