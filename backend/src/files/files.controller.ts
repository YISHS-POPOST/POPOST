import {
  StreamableFile,
  Controller,
  Get,
  Res,
  Header,
  Param,
} from "@nestjs/common";
import { FilesService } from "./files.service";
import { createReadStream } from "fs";
import { join } from "path";
import { Response } from "express";
import { of } from "rxjs";

@Controller("files")
export class FilesController {
  constructor(private readonly filesService: FilesService) {}

  @Get("profile/:imagename")
  @Header("Content-Type", "image/png")
  getStaticFile(@Param("imagename") imagename: string): StreamableFile {
    const file = createReadStream(join(process.cwd(), "/upload/" + imagename));
    return new StreamableFile(file);
  }
}
