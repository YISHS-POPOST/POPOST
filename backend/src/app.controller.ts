import { Controller, Get, Render } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";

@Controller()
export class AppController {
  constructor(private readonly configService: ConfigService) {}
  
  @Get()
  @Render("index")
  root() {
    const API_URL = this.configService.get<string>("API_URL");
    return { API_URL };
  }
}
