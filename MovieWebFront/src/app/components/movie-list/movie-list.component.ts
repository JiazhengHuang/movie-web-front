import { Component, OnInit } from '@angular/core';
import { Result } from '../interface/movie.interface';
import { MoviesService } from '../services/movies.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss'],
})
export class MovieListComponent implements OnInit {
  page: number = 1;
  movies: any[] = [];

  constructor(private movieService: MoviesService) {}

  ngOnInit(): void {
    this.movieService.getMovieList(this.page).subscribe((res: Result[]) => {
      this.movies = res;
    });
  }

  onScroll(): void {
    this.movieService.getMovieList(++this.page).subscribe((res: Result[]) => {
      this.movies.push(...res);
    });
  }
}
