import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin-page',
  templateUrl: './signin-page.component.html',
  styleUrls: ['./signin-page.component.scss'],
})
export class SigninPageComponent implements OnInit {
  logoPath =
    'https://fontmeme.com/permalink/221024/8dd7dd6338ff924ec714e650deda65dc.png';

  tempEmail: string = 'abc@email.com';
  tempPw: string = 'abc123456';

  inputemail: string = '';
  inputpw: string = '';
  notmatchErrorStyle: string = '';
  emailInputErrorStyle: string = '';
  psInputErrorStyle: string = '';

  constructor(private router: Router) {}

  ngOnInit(): void {}

  onSubmit(ngForm: NgForm) {
    if (!ngForm.form.valid) {
      this.emailInputErrorStyle = !ngForm.form.controls['email'].valid
        ? 'block'
        : 'none';
      this.psInputErrorStyle = !ngForm.form.controls['password'].valid
        ? 'block'
        : 'none';
    } else {
      this.inputemail = ngForm.form.controls['email'].value;
      this.inputpw = ngForm.form.controls['password'].value;
      if (this.tempEmail === this.inputemail && this.tempPw === this.inputpw) {
        this.router.navigateByUrl('/movielist');
      } else {
        this.notmatchErrorStyle = 'block';
      }
    }
  }
}
