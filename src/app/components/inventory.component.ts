import { Component, Input, Output } from '@angular/core';
import { INVENTORY } from '../constants';
import { Item, UpdateItemEvent } from '../models';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-inventory',
  standalone: false,
  templateUrl: './inventory.component.html',
  styleUrl: './inventory.component.css'
})
export class InventoryComponent {
  @Input()
  inventories : Item[] = []
  
  @Output()
  whenItemUpdate = new Subject<UpdateItemEvent>();

  protected updateCart(delta:number, key:string) {
    console.log('delta: ', delta, ',key: ', key)
    const event: UpdateItemEvent = {
      key: key,
      delta: delta
    }
    this.whenItemUpdate.next(event)
  }
}
