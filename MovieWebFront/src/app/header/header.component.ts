import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  logoPath =
    'https://fontmeme.com/temporary/8dd7dd6338ff924ec714e650deda65dc.png';

  constructor() {}

  ngOnInit(): void {}
}
