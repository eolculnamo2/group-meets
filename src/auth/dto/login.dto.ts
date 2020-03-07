import { IsNotEmpty } from "class-validator";

export default class LoginDto {
  @IsNotEmpty()
  readonly username: string;

  @IsNotEmpty()
  readonly password: string;
}