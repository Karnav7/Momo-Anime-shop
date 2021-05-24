import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-new-release',
  templateUrl: './new-release.component.html',
  styleUrls: ['./new-release.component.scss']
})
export class NewReleaseComponent implements OnInit {

  url: string = "https://www.youtube.com/embed/2MKkj1DQ0NU";
  urlSafe: SafeResourceUrl;
  // urlSafe: string = '';

  constructor(public sanitizer: DomSanitizer) {
    this.urlSafe = this.sanitizer.bypassSecurityTrustResourceUrl(this.url);
   }

  ngOnInit(): void {
    this.urlSafe = this.sanitizer.bypassSecurityTrustResourceUrl(this.url);
    // this.urlSafe = this.url;
  }

}
