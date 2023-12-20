import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(private router: Router) {}
  onclick(temp:string) {
    if(temp==='0') {
      this.router.navigate(['cities']);
    }
    else if(temp==='1') {
      this.router.navigate(['users']);
    }
    else {
      this.router.navigate(['products']);
    }
  }

  obj=[{
    name:"users",
    src:" ../../assets/img/user.svg"
  },
  {
    name:'cities',
    src:'../../assets/img/city.svg'
  },
  {
    name:'products',
    src:'../../assets/img/product.svg'
  }


]
}
