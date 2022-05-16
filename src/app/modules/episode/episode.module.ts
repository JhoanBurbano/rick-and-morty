import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EpisodeRoutingModule } from './episode-routing.module';
import { EpisodeComponent } from './episode.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    EpisodeComponent
  ],
  imports: [
    CommonModule,
    EpisodeRoutingModule,
    SharedModule
  ]
})
export class EpisodeModule { }
