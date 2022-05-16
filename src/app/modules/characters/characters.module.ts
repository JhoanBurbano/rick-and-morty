import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CharactersRoutingModule } from './characters-routing.module';
import { CharactersComponent } from './characters.component';
import { AppModule } from 'src/app/app.module';
import { SharedModule } from '../shared/shared.module';
import { DetailsComponent } from './components/details/details.component';


@NgModule({
  declarations: [
    CharactersComponent,
    DetailsComponent,
  ],
  imports: [
    CommonModule,
    CharactersRoutingModule,
    SharedModule
  ],
  exports: [
  ]
})
export class CharactersModule { }
