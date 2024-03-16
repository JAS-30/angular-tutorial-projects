import { Component } from '@angular/core';
import { CartService } from '../../cart.service'; 
import { FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
  
  items = this.cartService.getItems();

  checkoutForm = this.formBuilder.group({
    name: '',
    address: ''
  });

constructor(private cartService: CartService,
            private formBuilder: FormBuilder){}


            onSubmit(): void {
              console.warn('Your order has been submitted', this.checkoutForm.value);
              this.items = this.cartService.clearCart();
              
              this.checkoutForm.reset();
            }

}