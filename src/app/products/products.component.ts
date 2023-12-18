import { Component } from '@angular/core';
import { Product } from '../model/product';
import { ProductService } from '../service/product.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
  providers: [ProductService]
})
export class ProductsComponent {

  products!: Product[];




  constructor(private cityService: ProductService, private router: Router, private route: ActivatedRoute) {
    this.cityService.getProducts().then((products: Product[]) => {
      this.products = products;
      console.log(products);
    })

  }

  onClick(product: Product) {

    this.router.navigate([product.id], { relativeTo: this.route });

  }

  searchText: string = '';
  onChange(searchText: string) {
    console.log(searchText);
    this.searchText = searchText;
  }

}
