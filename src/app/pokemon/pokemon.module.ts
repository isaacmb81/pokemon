import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PokemonRoutingModule } from './pokemon-routing.module';
import { PageInitialComponent } from './components/page-initial/page-initial.component';
import { BallsComponent } from './components/balls/balls.component';
import { HttpClientModule } from '@angular/common/http';
import { PagePokemonComponent } from './components/page-pokemon/page-pokemon.component';
import { RouterModule } from '@angular/router';
import { ColorsPipe } from './pipes/colors.pipe';
import { NotFoundComponent } from './components/not-found/not-found.component';


@NgModule({
  declarations: [
    PageInitialComponent,
    BallsComponent,
    PagePokemonComponent,
    ColorsPipe,
    NotFoundComponent
  ],
  imports: [
    CommonModule,
    PokemonRoutingModule,
    HttpClientModule,
    RouterModule
  ],
  exports:[
    PageInitialComponent,
    BallsComponent
  ]
})
export class PokemonModule { }
