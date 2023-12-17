import { Injectable } from '@angular/core';
import { City } from '../model/city';

@Injectable({
  providedIn: 'root',
})
export class CityService {
  private apiUrl = 'http://localhost:3000/cities';

  constructor() {}

  async getCities(): Promise<City[]> {
    const data =await fetch(this.apiUrl);

    return await data.json() ?? [];
  }
  async getCityById(cityId: number=0): Promise<City> {
    const url = `${this.apiUrl}/${cityId}`;
    const data = await fetch(url);
    return await data.json()??[];
  }
  

  
}