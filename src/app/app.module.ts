import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { episodeReducer } from './modules/episode/store/episode.reducer';
import { characterReducer } from './modules/characters/store/characters.reducer';
import { EpisodeModule } from './modules/episode/episode.module';
import { EffectsModule } from '@ngrx/effects';
import { EpisodeEffects } from './modules/episode/store/episode.effects';
import { HttpClientModule } from '@angular/common/http';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { CharacterEffects } from './modules/characters/store/characters.effects';
import { LocationEffects } from './modules/location/store/location.effects';
import { locationReducer } from './modules/location/store/location.reducer';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SharedModule } from './modules/shared/shared.module';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SharedModule,
    StoreModule.forRoot({episodes: episodeReducer, characters: characterReducer, locations: locationReducer}, {}),
    StoreDevtoolsModule.instrument(),
    EffectsModule.forRoot([EpisodeEffects, CharacterEffects, LocationEffects])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
