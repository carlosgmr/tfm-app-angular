import { AppUser } from './app-user';

export class LoginResponse {
  constructor(
    public user: AppUser,
    public token: string
  ) {}
}
