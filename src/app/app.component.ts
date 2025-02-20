import { Component } from '@angular/core';
import { INVENTORY } from './constants';
import { Cart, CartLineItem, Item, UpdateItemEvent } from './models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {

  inventories:Item[] = INVENTORY

  cart:Cart = {lineItems:[], totalPrice: 0}

  itemUpdated($event: UpdateItemEvent) {
    console.info('>>> Event: ', $event)

    const key = $event.key
    const delta = $event.delta

    // If the item in cart, add it in
    let idx = this.cart.lineItems.findIndex(li => li.key == key)

    // Means that it exist
    if (idx >= 0) {
      this.cart.lineItems[idx].quantity += delta
      this.cart.lineItems[idx].totalPrice = this.cart.lineItems[idx].quantity * this.cart.lineItems[idx].unitPrice
    }

    else if (delta > 0) {
      const item = this.inventories.find(item => item.key === key)!
      console.info('>>> Item retrieved: ', item)
      const lineItem: CartLineItem = {
        key: key,
        name: item.name,
        quantity: 1,
        unitPrice: item.unitPrice,
        totalPrice: item.unitPrice
      }  
      this.cart.lineItems.push(lineItem)
    }

    // Remove 0 items
    this.cart.lineItems = this.cart.lineItems.filter(li => li.quantity > 0)
    let total = 0
    for (let li of this.cart.lineItems) {
      total += li.quantity * li.unitPrice
    }
    this.cart.totalPrice = total
  }

  onCartChange($event: Cart) {
    console.info(">>> Process cart", $event)
    this.cart = {lineItems:[], totalPrice: 0}
  }
}
