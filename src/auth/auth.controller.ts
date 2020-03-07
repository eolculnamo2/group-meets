import { Controller, Post, Body } from "@nestjs/common";
import LoginDto from "./dto/login.dto";
import RegisterDto from "./dto/register.dto";
import AuthService from "./auth.service";

@Controller("/auth")
export default class AuthController {

  constructor(private readonly authService: AuthService) {}

  @Post()
  login(@Body() loginDto: LoginDto) {
    this.authService.login();
  }

  @Post("/register")
  register(@Body() registerDto: RegisterDto) {
    this.authService.register();
  }
}