import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ServicePokeapiService } from '../../services/service-pokeapi.service';
import { Ball, Result } from '../../Interfaces/ball';

@Component({
  selector: 'app-balls',
  templateUrl: './balls.component.html',
  styleUrl: './balls.component.css'
})
export class BallsComponent {

  constructor(private servicio: ServicePokeapiService) { }

  balls: Result[] = []
  imgBalls: string[] = [];

  ngOnInit() {
    this.servicio.hacerPeticionBolas().subscribe(
      (response) => {
        this.balls = response.results;
        this.onlyBall()
      }
    );
  }

  onlyBall() {
    this.balls.forEach(ball => {
      this.servicio.hacerPeticionBola(ball.url).subscribe(
        (response) => {
          this.imgBalls.push(response.sprites.default)
          
        }
      )
    });
  }

}
