import { Component ,OnInit} from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { User } from 'src/app/model/user';
import { UserService } from 'src/app/service/user.service';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  userId?:number;
  userData?:User;
  constructor(
    private route: ActivatedRoute,
    private userService: UserService // Your user service
  ) {
        this.route.params.subscribe((params:Params)=>{
          this.userId=params['id'];

        });
        this.userService.getUsersById(this.userId).then((userdata?:User)=>{
           this.userData=userdata;
           console.log(this.userData)
        })
}
}



