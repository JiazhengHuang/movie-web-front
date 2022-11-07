import { MoviesResolverService } from './components/services/movies-resolver.service';
import { MovieDetailPageComponent } from './pages/movie-detail-page/movie-detail-page.component';
import { MoviePageComponent } from './pages/movie-page/movie-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { RegisterPageComponent } from './pages/register-page/register-page.component';
import { SigninPageComponent } from './pages/signin-page/signin-page.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'signin', component: SigninPageComponent },
  {
    path: 'register',
    component: RegisterPageComponent,
  },
  { path: 'moviepage', component: MoviePageComponent },
  {
    path: 'moviepage/:id',
    component: MovieDetailPageComponent,
    resolve: { movieDetail: MoviesResolverService },
    // data: { resolvedata: 'movieId' },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
