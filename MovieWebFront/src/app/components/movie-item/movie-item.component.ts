import { Component, Input, OnInit } from '@angular/core';
import { Result } from '../interface/movie.interface';
import { MoviesService } from '../services/movies.service';

@Component({
  selector: 'app-movie-item',
  templateUrl: './movie-item.component.html',
  styleUrls: ['./movie-item.component.scss'],
})
export class MovieItemComponent implements OnInit {
  @Input() movie!: any;

  constructor() {}

  ngOnInit(): void {}
}
