import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { catchError, of } from 'rxjs';
import { MoviesService } from './movies.service';

@Injectable({
  providedIn: 'root',
})
export class MoviesResolverService implements Resolve<any> {
  constructor(private moviesService: MoviesService, private router: Router) {}
  resolve(route: ActivatedRouteSnapshot) {
    console.log('Called Get Movie Detail in resolver...', route);
    return this.moviesService.getMovieDetailById(route.params['id']).pipe(
      catchError((error) => {
        return of('No data');
      })
    );
  }
}
