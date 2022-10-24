import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { RegisterPageComponent } from './register-page/register-page.component';
import { SigninPageComponent } from './signin-page/signin-page.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'signin', component: SigninPageComponent },
  {
    path: 'register',
    component: RegisterPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
