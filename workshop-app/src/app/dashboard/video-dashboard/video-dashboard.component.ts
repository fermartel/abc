import { Component, OnInit } from '@angular/core';
import { Video } from '../../models/video';

import { HttpClient } from '@angular/common/http';

const apiUrl = 'https://api.angularbootcamp.com';

@Component({
  selector: 'app-video-dashboard',
  templateUrl: './video-dashboard.component.html',
  styleUrls: ['./video-dashboard.component.css']
})
export class VideoDashboardComponent implements OnInit {
  selectedVideo?: Video | undefined;
  videos?: Video[];

  constructor(http: HttpClient) {
    http
      .get<Video[]>(apiUrl + '/videos')
      .subscribe(videos => (this.videos = videos));
  }

  ngOnInit() {}

  selectVideo(video: Video) {
    if (this.selectedVideo === video) {
      this.selectedVideo = undefined;
    } else {
      this.selectedVideo = video;
    }
  }
}
