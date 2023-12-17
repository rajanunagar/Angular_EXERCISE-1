import { Component } from '@angular/core';
import { CityService } from 'src/app/service/city.service';
import { City } from 'src/app/model/city';
import { ActivatedRoute, Params } from '@angular/router';
@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.css']
})
export class CityComponent {

  cityId?:number;
  cityData?:City;
  constructor(
    private route: ActivatedRoute,
    private cityService: CityService// Your user service
  ) {
        this.route.params.subscribe((params:Params)=>{
          this.cityId=params['id'];

        });
        this.cityService.getCityById(this.cityId).then((cityData?:City)=>{
           this.cityData=cityData;
           console.log(this.cityData);
        })
}


}
