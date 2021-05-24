import { Component, OnInit } from '@angular/core';
import { faTwitter, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  twitter = faTwitter;
  facebook = faFacebook;
  insta = faInstagram;

  constructor() { }

  ngOnInit(): void {
  }

}
