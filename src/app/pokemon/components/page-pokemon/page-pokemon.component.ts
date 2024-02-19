import { Component, OnInit } from '@angular/core';
import { ServicePokeapiService } from '../../services/service-pokeapi.service';
import { ActivatedRoute, Router } from '@angular/router';
import { OnlyPokemon } from '../../Interfaces/only-pokemon';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-page-pokemon',
  templateUrl: './page-pokemon.component.html',
  styleUrl: './page-pokemon.component.css'
})
export class PagePokemonComponent implements OnInit {

  pokemon!: OnlyPokemon

  constructor(private servicio: ServicePokeapiService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.pipe(
      switchMap(({ id }) => this.servicio.hacerPeticionPokemon(id))
    ).subscribe(data => {
      if (!data) {
        return this.router.navigateByUrl("pokemon");
      }
      return this.pokemon = data;
    })
  }
}