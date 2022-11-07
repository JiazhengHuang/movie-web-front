import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.scss'],
})
export class RegisterPageComponent implements OnInit {
  logoPath =
    'https://fontmeme.com/permalink/221024/8dd7dd6338ff924ec714e650deda65dc.png';

  inputemail: string = '';
  inputpw: string = '';
  inputrpw: string = '';

  emailInputErrorStyle: string = '';
  psInputErrorStyle: string = '';
  rpsInputErrorStyle: string = '';

  constructor(
    private activatedRouter: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.inputemail =
      this.activatedRouter.snapshot.queryParamMap.get('inputEmail') || '';
  }

  onSubmit(ngForm: NgForm) {
    if (!ngForm.form.valid) {
      this.emailInputErrorStyle = !ngForm.form.controls['email'].valid
        ? 'block'
        : 'none';
      this.psInputErrorStyle = !ngForm.form.controls['password'].valid
        ? 'block'
        : 'none';
      this.rpsInputErrorStyle = !ngForm.form.controls['reenterpassword'].valid
        ? 'block'
        : 'none';
    } else {
      this.inputemail = ngForm.form.controls['email'].value;
      this.inputpw = ngForm.form.controls['password'].value;
      this.inputrpw = ngForm.form.controls['reenterpassword'].value;
      // console.log(this.inputemail);
      // console.log(this.inputpw);
      // console.log(this.inputrpw);
      this.emailInputErrorStyle = 'none';
      this.psInputErrorStyle = 'none';
      if (this.inputpw === this.inputrpw) {
        this.rpsInputErrorStyle = 'none';
        this.router.navigateByUrl('/signin');
      } else {
        this.rpsInputErrorStyle = 'block';
      }
    }
  }
}
