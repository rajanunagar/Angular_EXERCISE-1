import { Component } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Product } from 'src/app/model/product';
import { ProductService } from 'src/app/service/product.service';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {

  productId?:number;
  productData?:Product;
  constructor(
    private route: ActivatedRoute,
    private productService: ProductService // Your user service
  ) {
        this.route.params.subscribe((params:Params)=>{
          this.productId=params['id'];

        });
        this.productService.getProductByID(this.productId).then((productData?:Product)=>{
           this.productData=productData;
           console.log(this.productData);
        })
}
   



}
