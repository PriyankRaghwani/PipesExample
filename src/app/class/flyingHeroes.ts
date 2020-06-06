import { PipeTransform, Pipe } from '@angular/core';
import { Flyer } from './heroes';


@Pipe({ 
    name: 'flyingHeroes' 
})

export class flyingHeroes implements PipeTransform {
  transform(allHeroes: Flyer[]) {
    return allHeroes.filter(hero => hero.canFly);
  }
}