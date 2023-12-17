import { Injectable } from '@angular/core';
import { User } from '../model/user';
@Injectable({
  providedIn: 'root',
})
export class UserService {
  private apiUrl = 'http://localhost:3000/users' ;

  constructor() {}

  async getUsers(): Promise<User[]> {
    const data =await fetch(this.apiUrl);

    return await data.json() ?? [];
  }

 async getUsersById(userId: number=0): Promise<User> {
    const url = `${this.apiUrl}/${userId}`;
    const data = await fetch(url);
    return await data.json()??[];
  }

}







