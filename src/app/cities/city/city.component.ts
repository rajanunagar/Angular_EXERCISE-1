import { Component, ViewChild } from '@angular/core';
import { CityService } from 'src/app/service/city.service';
import { City } from 'src/app/model/city';
import { ActivatedRoute, Params } from '@angular/router';
import { NgForm } from '@angular/forms';
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
          //  console.log(this.cityData);
          this.form.setValue({
            cityid: this.cityData?.id,
            name:this.cityData?.name,
            country:this.cityData?.country,
            population:this.cityData?.population,
            timezone:this.cityData?.timezone
      
          })
        })
}
@ViewChild('registrationForm') form !: NgForm;
onformSubmitted() {
  console.log(this.form.value.cityid);
  console.log(this.form.value.name);
  console.log(this.form.value.country);
  console.log(this.form.value.population);
  console.log(this.form.value.timezone);
}


}
