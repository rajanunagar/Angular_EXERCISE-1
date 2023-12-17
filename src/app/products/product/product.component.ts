import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
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
           this.form.setValue({
            productid: this.productData?.id,
            name:this.productData?.name,
            price:this.productData?.price,
            category:this.productData?.category,
            stock:this.productData?.stock
      
          })
        })
}
   

@ViewChild('registrationForm') form !: NgForm;
onformSubmitted() {
  console.log(this.form.value.productid);
  console.log(this.form.value.name);
  console.log(this.form.value.price);
  console.log(this.form.value.category);
  console.log(this.form.value.stock);
}


}
