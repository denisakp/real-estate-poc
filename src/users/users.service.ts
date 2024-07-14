import { Injectable } from '@nestjs/common';

export type User = {
  id: number;
  name: string;
  username: string;
  password: string;
};

@Injectable()
export class UsersService {
  private users: User[] = [
    {
      id: 1,
      name: 'John Doe',
      username: 'john.doe@mail.tld',
      password: 'strong-password',
    },
  ];

  findOne(username: string): User {
    return this.users.find((user) => user.username === username);
  }
}
