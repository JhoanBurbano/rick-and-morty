import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListItemsComponent } from './components/list-items/list-items.component';
import { ItemComponent } from './components/item/item.component';



@NgModule({
  declarations: [
    ListItemsComponent,
    ItemComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    ListItemsComponent
  ]
})
export class SharedModule { }
