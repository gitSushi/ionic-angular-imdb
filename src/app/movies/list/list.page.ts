import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ImdbMovie } from '../miscellanous/interface';
import { MovieServiceService } from '../miscellanous/movie-service.service';

// import { map } from 'rxjs/operators';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
  providers: [MovieServiceService]
})

/**
 * Different ways of requesting and using the data :
 *  • promise
 *  • observable then pipe
 *  • observable, pipe has been refactored to custom pipe
 *  • subject
 */
export class ListPage implements OnInit {

  movies: ImdbMovie[];
  // movies: filmEnFrancais[];
  expression: string;

  subscriber: Subscription;

  constructor(private movieService: MovieServiceService) {
  }

  ngOnInit() {
    /**
     * The promise
     */
    // this.movieService.getMovies()
    //   .then((data: Iget) => {
    //     this.movies = data.results;
    //     this.expression = data.expression;
    //   });

    /**
     * /!\ /!\ /!\ /!\ /!\ /!\ /!\ /!\
     * The wrong way of using pipes
     * /!\ /!\ /!\ /!\ /!\ /!\ /!\ /!\
     */
    // const afterPipe = this.movieService
    //   .getMovie$()
    //   .pipe(map((m: Iget) => m.results.map(n => ({
    //     idx: n.id,
    //     titre: n.title,
    //     plot: n.description,
    //     photo: n.image
    //   }))));

    // afterPipe.subscribe((x: filmEnFrancais[]) => { this.movies = x });

    /**
     * invokes the getMovie$ method which returns an observable
     * subcription to it
     * Retrieves only the results (movie list)
     */
    // this.subscriber = this.movieService.getMovie$()
    //   .subscribe((data: Iget) => this.movies = data.results)


    /**
     * subject
     * invokes the getMovie$ method
     * then
     * subscription to observable via getObservable method
     */
    this.movieService.getMovie$();
    this.subscriber = this.movieService.getObservable()
      .subscribe((data: ImdbMovie[]) => this.movies = data);
  }

  ngOnDestroy() {
    this.subscriber.unsubscribe();
  }
}
