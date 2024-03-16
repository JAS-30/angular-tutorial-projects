import { Component } from '@angular/core';
import {  products } from '../../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
products = [...products];

share(){
  alert("Product shared.");
}

onNotify(){
  alert("You will be notified when the product goes on sale.")
}
}
