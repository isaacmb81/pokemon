import { Component, OnInit } from '@angular/core';
import { ServicePokeapiService } from '../../services/service-pokeapi.service';
import { Pokemon, Result } from '../../Interfaces/pokemon';

@Component({
  selector: 'app-page-initial',
  templateUrl: './page-initial.component.html',
  styleUrl: './page-initial.component.css'
})
export class PageInitialComponent implements OnInit {

  constructor(private servicio: ServicePokeapiService) { }

  pokemons: Result[] = []
  arrayFiltrado: Result[] = []
  filteredIndexes: number[] = [];
  isFiltered: boolean = false;

  onChange(inputText: string) {
    if (inputText.trim() !== "") {
      this.arrayFiltrado = this.pokemons.filter((pokemon) =>
        pokemon.name.toLowerCase().includes(inputText.toLowerCase())
      );
      this.filteredIndexes = this.arrayFiltrado.map((pokemon, index) => this.pokemons.indexOf(pokemon));
      this.isFiltered = true;
    } else {
      this.arrayFiltrado = this.pokemons;
      this.isFiltered = false;
    }
  }

  ngOnInit() {
    this.servicio.hacerPeticionTodosPokemons().subscribe(
      (response) => {
        this.pokemons = response.results;
        this.arrayFiltrado = response.results;
      }
    );
  }
}
