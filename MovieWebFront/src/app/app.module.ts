import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeContentSectionComponent } from './components/home-content-section/home-content-section.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { SigninPageComponent } from './pages/signin-page/signin-page.component';
import { RegisterPageComponent } from './pages/register-page/register-page.component';
import { MovieItemComponent } from './components/movie-item/movie-item.component';
import { MovieListComponent } from './components/movie-list/movie-list.component';
import { MoviePageComponent } from './pages/movie-page/movie-page.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { MovieDetailPageComponent } from './pages/movie-detail-page/movie-detail-page.component';
import { MovieDetailComponent } from './components/movie-detail/movie-detail.component';
import { YoutubePlayerComponent } from './components/youtube-player/youtube-player.component';
import { YouTubePlayerModule } from '@angular/youtube-player';
import { MatDialogModule, MAT_DIALOG_DATA } from '@angular/material/dialog';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    HomeContentSectionComponent,
    FooterComponent,
    HeaderComponent,
    SigninPageComponent,
    RegisterPageComponent,
    MovieItemComponent,
    MovieListComponent,
    MoviePageComponent,
    MovieDetailPageComponent,
    MovieDetailComponent,
    YoutubePlayerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    InfiniteScrollModule,
    YouTubePlayerModule,
    MatDialogModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
