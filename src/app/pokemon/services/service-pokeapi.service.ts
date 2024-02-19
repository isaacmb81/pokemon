import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pokemon } from '../Interfaces/pokemon';
import { Observable } from 'rxjs';
import { Ball } from '../Interfaces/ball';
import { OnlyBall } from '../Interfaces/only-ball';
import { OnlyPokemon } from '../Interfaces/only-pokemon';

@Injectable({
  providedIn: 'root'
})
export class ServicePokeapiService {

  constructor(private http: HttpClient) { }

  private endpointPokemons = "https://pokeapi.co/api/v2/pokemon";
  private endpointBolas = "https://pokeapi.co/api/v2/item";

  hacerPeticionTodosPokemons():Observable <Pokemon> {
    return this.http.get<Pokemon>(this.endpointPokemons+"?limit=1302")
  }

  hacerPeticionPokemon(id: number):Observable <OnlyPokemon>{
    return this.http.get<OnlyPokemon>(this.endpointPokemons+"/"+id);
  }

  hacerPeticionBolas():Observable <Ball> {
    return this.http.get<Ball>(this.endpointBolas+"?limit=66")
  }

  hacerPeticionBola(endpoint:string):Observable<OnlyBall>{
    return this.http.get<OnlyBall>(endpoint)
  }
}
