import { Injectable } from '@angular/core';
import { Product } from '../model/product';
@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private apiUrl = 'http://localhost:3000/products' ;

  constructor() {}

  async getProducts(): Promise<Product[]> {
    const data =await fetch(this.apiUrl);

    return await data.json() ?? [];
  }

  async getProductByID(productId: number=0): Promise<Product> {
    const url = `${this.apiUrl}/${productId}`;
    const data = await fetch(url);
    return await data.json()??[];
  }
}