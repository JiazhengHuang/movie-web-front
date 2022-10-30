import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
// import { HomeContentSectionComponent } from './home-content-section/home-content-section.component';
// import { FooterComponent } from './footer/footer.component';
// import { HeaderComponent } from './header/header.component';
// import { SigninPageComponent } from './signin-page/signin-page.component';
// import { RegisterPageComponent } from './register-page/register-page.component';
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
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
