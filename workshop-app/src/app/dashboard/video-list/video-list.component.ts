import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter
} from '@angular/core';
import { Video } from '../../models/video';

@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.css']
})
export class VideoListComponent {
  @Input() videos?: Video[];
  @Input() selectedVideo: Video | undefined;
  @Output() videoSelected = new EventEmitter<Video>();

  constructor() {}
}
