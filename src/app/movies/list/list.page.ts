import { Component, OnInit } from '@angular/core';
import { ImdbMovie, Iget } from '../miscellanous/interface';
import { MovieServiceService } from '../miscellanous/movie-service.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
  providers: [MovieServiceService]
})

export class ListPage implements OnInit {

  movies: ImdbMovie[];
  expression: string;

  constructor(private movieService: MovieServiceService) {
  }

  ngOnInit() {
    this.movieService.getMovies()
      .then((data: Iget) => {
        this.movies = data.results;
        this.expression = data.expression;
      });
  }

}
