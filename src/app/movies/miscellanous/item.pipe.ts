import { Pipe, PipeTransform } from '@angular/core';
import { filmEnFrancais, ImdbMovie } from './interface';

@Pipe({
  name: 'XitemX'
})
export class ItemPipe implements PipeTransform {

  transform(n: ImdbMovie) {
    return {
      idx: n.id,
      titre: n.title,
      plot: n.description,
      photo: n.image
    };
  }

}
