import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokemonModule } from './pokemon.module';
import { PageInitialComponent } from './components/page-initial/page-initial.component';
import { BallsComponent } from './components/balls/balls.component';
import { PagePokemonComponent } from './components/page-pokemon/page-pokemon.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { guardGuard } from './guard.guard';

const routes: Routes = [
  {
    path: "",
    redirectTo: "pokemons",
    pathMatch: "full"
  },
  {path:"",children:[
    {path:"pokemons",component:PageInitialComponent, canActivate:[guardGuard]},
    {path:"balls",component:BallsComponent},
    {path:"notfound",component:NotFoundComponent},
    {path:"pokemon/:id",component:PagePokemonComponent},
    {path:"**",redirectTo:"notfound"}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PokemonRoutingModule { }
