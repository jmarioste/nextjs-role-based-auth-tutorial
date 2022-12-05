import { User } from "next-auth";

export interface IUserService {
  signInCredentials(email: string, password: string): Promise<User> | User;
}
