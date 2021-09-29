import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, ParamMap } from '@angular/router';

import { Observable, Subject, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';

import { Iget, ImdbMovie, IMovieDetail } from './interface';

@Injectable({
  providedIn: 'root'
})

export class MovieServiceService {

  private API_KEY: string = "k_hnydj5ck";
  private URL: string = "https://imdb-api.com/en/API/";
  private subject$: Subject<ImdbMovie[]>;


  constructor(private http: HttpClient, private route: ActivatedRoute) {
    this.subject$ = new Subject();
  }


  /**
   * @returns a promise (movie list)
   */
  getMovies(): Promise<ImdbMovie[]> {
    return this.http
      .get<ImdbMovie[]>(this.URL + "SearchMovie/" + this.API_KEY + "/leon the professional")
      .toPromise();
  }

  /**
   * getMovie$ observable version
   * @returns an observable (movie list)
   */
  // getMovie$() {
  //   return this.http
  //     .get(this.URL + "SearchMovie/" + this.API_KEY + "/leon the professional");
  // }

  /**
   * getMovie$ subject version
   * get movie list, pipe to have only the list as data then subscribes (first emit)
   */
  getMovie$() {
    this.http
      .get<Iget>(this.URL + "SearchMovie/" + this.API_KEY + "/leon the professional")
      .pipe(map((data: Iget) => data.results))
      .subscribe((data: ImdbMovie[]) => this.subject$.next(data));
  }

  /**
   * the observable that we can work with in the component
   * @returns an observable
   */
  getObservable(): Observable<ImdbMovie[]> {
    return this.subject$.asObservable();
  }

  /**
   * @returns an observable of one movie
   */
  getMovie(): Observable<IMovieDetail> {
    const routeParam: ParamMap = this.route.snapshot.paramMap;
    const movieId: string = routeParam.get("movieId");

    return this.http
      .get<IMovieDetail>(this.URL + "Title/" + this.API_KEY + "/" + movieId);
  }

}
