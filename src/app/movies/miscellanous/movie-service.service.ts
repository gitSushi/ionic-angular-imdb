import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { IMovieDetail } from './interface';

@Injectable({
  providedIn: 'root'
})

export class MovieServiceService {

  private API_KEY = "k_hnydj5ck";
  private URL = "https://imdb-api.com/en/API/";

  constructor(private http: HttpClient, private route: ActivatedRoute) { }

  getMovies() {
    return this.http
      .get(this.URL + "SearchMovie/" + this.API_KEY + "/leon the professional")
      .toPromise();
  }

  getMovie$() {
    return this.http
      .get(this.URL + "SearchMovie/" + this.API_KEY + "/leon the professional");
  }

  getMovie() {
    const routeParam = this.route.snapshot.paramMap;
    const movieId = routeParam.get("movieId");

    return this.http
      .get<IMovieDetail>(this.URL + "Title/" + this.API_KEY + "/" + movieId);
  }
}
