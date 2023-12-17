import { Component } from '@angular/core';
import { UserService } from '../service/user.service';
import { User } from '../model/user';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
  providers:[UserService]
})
export class UsersComponent {

    users!:User[];
    constructor(private cityService: UserService,private router: Router,private route: ActivatedRoute) {
      this.cityService.getUsers().then((users : User[])=>{
        this.users = users;
        console.log(users);
      })
  
    }
    onClick(user:User){
     
      this.router.navigate([user.id], { relativeTo: this.route });

    }
}
