import { Component ,OnInit} from '@angular/core';
import { CityService } from '../service/city.service';
import { City } from '../model/city';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-cities',
  templateUrl: './cities.component.html',
  styleUrls: ['./cities.component.css'],
  providers: [CityService]
})
export class CitiesComponent {

  cities! : City[];



  constructor(private cityService: CityService,private router: Router,private route: ActivatedRoute) {
    this.cityService.getCities().then((cities : City[])=>{
      this.cities = cities;
      console.log(cities);
    })

  }
  onClick(city:City){
     
    this.router.navigate([city.id], { relativeTo: this.route });

  }
  


  searchText:string='';
  onChange(searchText:string){
    console.log(searchText);
    this.searchText=searchText;
  }

}
