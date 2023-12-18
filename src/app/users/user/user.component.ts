import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { User } from 'src/app/model/user';
import { UserService } from 'src/app/service/user.service';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  userId?: number;
  userData?: User;
  constructor(
    private route: ActivatedRoute,
    private userService: UserService // Your user service
  ) {
    this.route.params.subscribe((params: Params) => {
      this.userId = params['id'];

    });
    this.userService.getUsersById(this.userId).then((userdata?: User) => {
      this.userData = userdata;
      //  console.log(this.userData)
      this.form.setValue({
        userid: this.userData?.id,
        name: this.userData?.name,
        age: this.userData?.age,
        email: this.userData?.email,
        city: this.userData?.city

      })
    })


  }



  @ViewChild('registrationForm') form !: NgForm;
  onformSubmitted() {
    console.log(this.form);
    console.log(this.form.value.userid);
    console.log(this.form.value.name);
    console.log(this.form.value.age);
    console.log(this.form.value.email);
    console.log(this.form.value.city);
  }



}



