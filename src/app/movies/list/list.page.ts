import { Component, OnInit } from '@angular/core';
import { ImdbMovie, Iget, filmEnFrancais } from '../miscellanous/interface';
import { MovieServiceService } from '../miscellanous/movie-service.service';

import { map } from 'rxjs/operators';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
  providers: [MovieServiceService]
})

export class ListPage implements OnInit {

  movies: ImdbMovie[];
  // movies: filmEnFrancais[];
  expression: string;

  constructor(private movieService: MovieServiceService) {
  }

  ngOnInit() {
    /**
     * promise
     */
    // this.movieService.getMovies()
    //   .then((data: Iget) => {
    //     this.movies = data.results;
    //     this.expression = data.expression;
    //   });

    /**
     * observable -> pipe
     */
    // const afterPipe = this.movieService.getMovie$().pipe(map((m: Iget) => m.results.map(n => ({
    // idx: n.id,
    // titre: n.title,
    // plot: n.description,
    // photo: n.image
    // }))));
    // afterPipe.subscribe((x: filmEnFrancais[]) => { this.movies = x });

    /**
     * observable -> custom pipe
     */
    this.movieService.getMovie$().subscribe((data: Iget) => this.movies = data.results)
  }

}
