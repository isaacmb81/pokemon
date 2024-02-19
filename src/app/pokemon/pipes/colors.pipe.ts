import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'colors'
})
export class ColorsPipe implements PipeTransform {

  transform(value: string): unknown {
    switch (value) {
      case "grass":
        return "green"
      case "fire":
        return "red"
      case "water":
        return "blue"
      case "bug":
        return "white"
      case "ground":
        return "rgb(98, 39, 39)"
      case "normal":
        return "rgb(249, 200, 47)"
      default:
        return "rgb(249, 200, 47)"
    }

  }

}
