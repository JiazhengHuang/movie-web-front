import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-content-section',
  templateUrl: './home-content-section.component.html',
  styleUrls: ['./home-content-section.component.scss'],
})
export class HomeContentSectionComponent implements OnInit {
  backgroundPath =
    'https://assets.nflxext.com/ffe/siteui/vlv3/28b69a57-cadf-43d9-8a95-e5f2e11199de/c86afdf7-1b44-4911-80fd-f97d0130fcd8/US-en-20221010-popsignuptwoweeks-perspective_alpha_website_small.jpg';

  constructor() {}

  ngOnInit(): void {}
}
