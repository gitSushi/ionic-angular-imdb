import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IMovieDetail } from '../miscellanous/interface';
import { MovieServiceService } from '../miscellanous/movie-service.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
  providers: [MovieServiceService]
})
export class DetailPage implements OnInit {
  // private movie: IMovieDetail;
  // movie: Observable<IMovieDetail>;
  movie: IMovieDetail;

  constructor(private movieService: MovieServiceService) {

  }

  ngOnInit() {
    // this.movie = this.movieService.getMovie();

    // this.movieService.getMovie()
    // .then((data: IMovieDetail) => {
    //   this.movie = data;
    //   console.log("this.movie : ", this.movie)
    // });

    this.movieService.getMovie().subscribe((data: IMovieDetail) => {
      this.movie = data;
      console.log("this.movie : ", this.movie)
    });
  }

}
