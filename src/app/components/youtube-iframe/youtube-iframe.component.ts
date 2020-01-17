import { Component, OnInit, Input } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from "@angular/platform-browser";

@Component({
  selector: 'app-youtube-iframe',
  templateUrl: './youtube-iframe.component.html',
  styleUrls: ['./youtube-iframe.component.css']
})
export class YoutubeIframeComponent implements OnInit {

  @Input() videoUrl: string;

  constructor(
    private _sanitizer: DomSanitizer
  ) {
  }

  ngOnInit() {
  }

  getVideoIframe(url) {
    var video;
    var results;

    video
    if (url === null) {
      return '';
    }

    results = url.match('[\\?&]v=([^&#]*)');
    video = (results === null) ? url : results[1];

    return this._sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/' + video);
  }

}
