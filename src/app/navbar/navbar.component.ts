import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  obj=[{
    name:"users",
    path:"users"
  },
  {
    name:'cities',
    path:'cities'
  },
  {
    name:'products',
    path:'products'
  }
]
}
