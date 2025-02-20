import { Component, Input, Output } from '@angular/core';
import { Cart } from '../models';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-cart',
  standalone: false,
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {

  @Input({ required:true })
  cart!:Cart

  @Output()
  whenCheckout = new Subject<Cart>();

  protected checkout() {
    this.whenCheckout.next(this.cart);
  }
}
