import { Component } from '@angular/core';
import { Item } from 'src/app/models/item';
import { ITEMS } from 'src/app/models/sampleitems';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent {
  items = ITEMS;
}
