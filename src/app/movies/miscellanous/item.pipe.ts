import { Pipe, PipeTransform } from '@angular/core';
import { ImdbMovie } from './interface';

@Pipe({
  name: 'XitemX'
})

/**
 * Custom pipe to reformat object received to custom object
 * See use in list.page.html
 */
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
