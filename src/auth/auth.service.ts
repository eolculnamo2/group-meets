import cookieParser from 'cookie-parser';
import { AuthServiceInt } from "./auth.interface";
import AuthConstants from './auth.constants';
import { Injectable } from '@nestjs/common';

@Injectable()
export default class AuthService implements AuthServiceInt {
  login() {
    const jwt: string = 'jwt will go here';
    cookieParser.set(AuthConstants.authCookie, jwt);
  }

  register() {
    const jwt: string = 'jwt will go here';
    cookieParser.set(AuthConstants.authCookie, jwt);
  }

}