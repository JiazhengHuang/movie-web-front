import { YoutubePlayerComponent } from './../youtube-player/youtube-player.component';
import { DetailRootObject } from './../interface/movie-detail.interface';
import { Component, Input, OnInit } from '@angular/core';
import { MoviesService } from '../services/movies.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { VideoResult } from '../interface/detail-video.interface';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss'],
})
export class MovieDetailComponent implements OnInit {
  detail!: any;
  videosKey!: any;
  id: any;

  constructor(
    private movieService: MoviesService,
    private route: ActivatedRoute,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.route.data.subscribe((res: any) => (this.detail = res.movieDetail));

    this.route.paramMap
      .pipe(
        switchMap((params: ParamMap) =>
          this.movieService.getVideosById(params.get('id')!)
        )
      )
      .subscribe((res: any) => (this.videosKey = res[0].videoKey));

    // console.log('Youtube keys: ' + this.videos);
  }

  openDialog() {
    this.dialog.open(YoutubePlayerComponent, {
      maxWidth: '70%',
      data: { videosKey: this.videosKey },
    });
  }
}
