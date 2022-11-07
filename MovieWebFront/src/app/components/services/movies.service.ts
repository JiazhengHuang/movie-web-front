import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Result, RootObject } from '../interface/movie.interface';
import { DetailRootObject } from '../interface/movie-detail.interface';
import { BehaviorSubject, filter, map, Observable, tap } from 'rxjs';
import {
  VideoResult,
  VideoRootObject,
} from '../interface/detail-video.interface';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  private readonly movieApi = 'https://api.themoviedb.org/3/movie/';
  private readonly apiKey =
    '?api_key=b158dc09a7dab27d77b49313df6b60fb&language=en-US';

  // private movies: any = [];
  // private movies$ = new BehaviorSubject<any>(this.movies);
  // movielist$ = this.movies$.asObservable();

  constructor(private readonly http: HttpClient) {}

  getMovieList(page: number): Observable<Result[]> {
    return this.http
      .get<RootObject>(
        this.movieApi + 'popular' + this.apiKey + '&page=' + page
      )
      .pipe(
        filter((res: RootObject) => {
          return res.total_results !== 0;
        }),
        map((item: RootObject) => {
          return item.results.map((movies: Result) => {
            const movie: any = {
              movieId: movies.id,
              movieName: movies.title,
              moviePosterPath: movies.poster_path,
              movieRate: movies.vote_average,
            };
            return movie;
          });
        }),
        tap((movies: any) => {
          console.log(movies);
        })
      ) as Observable<Result[]>;
  }

  getMovieDetailById(id: any): Observable<DetailRootObject> {
    return this.http
      .get<DetailRootObject>(this.movieApi + id + this.apiKey)
      .pipe(
        map((detail: DetailRootObject) => {
          const details: any = {
            detailId: detail.id,
            detailPosterPath: detail.poster_path,
            detailTitle: detail.original_title,
            detailLanguage: detail.original_language,
            detailBudget: detail.budget,
            detailOverview: detail.overview,
            detailRating: detail.vote_average,
            detailYear: detail.release_date.substring(0, 4),
            datailDate: detail.release_date,
            detailTagLine: detail.tagline,
          };
          return details;
        }),
        tap((detail: any) => {
          console.log(detail);
        })
      );
  }

  getVideosById(id: any): Observable<VideoResult[]> {
    return this.http
      .get<VideoRootObject>(this.movieApi + id + '/videos' + this.apiKey)
      .pipe(
        filter((res: VideoRootObject) => {
          return res.results.length !== 0;
        }),
        map((item: VideoRootObject) => {
          return item.results
            .filter((videos: VideoResult) => {
              return videos.site === 'YouTube';
            })
            .map((videos: VideoResult) => {
              const video: any = {
                videoKey: videos.key,
              };
              return video;
            });
        }),
        tap((movies: any) => {
          console.log(movies);
        })
      ) as Observable<VideoResult[]>;
  }
}
