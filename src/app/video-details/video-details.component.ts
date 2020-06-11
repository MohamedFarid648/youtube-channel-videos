import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Snippet } from '../custom-models/getVideoChannelResponse';

@Component({
  selector: 'app-video-details',
  templateUrl: './video-details.component.html',
  styleUrls: ['./video-details.component.scss']
})
export class VideoDetailsComponent implements OnInit {

  videoDetails: Snippet;
  constructor(public router: Router, public activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.getParameters();
  }


  getParameters() {
    this.activatedRoute.queryParams.subscribe(params => {
      console.log(params);
      console.log(this.router.getCurrentNavigation());
      console.log(this.router.getCurrentNavigation()?.extras);
      console.log(this.router.getCurrentNavigation()?.extras?.state);


      if (this.router.getCurrentNavigation()?.extras?.state?.videoDetails) {
        this.videoDetails = JSON.parse(JSON.stringify(this.router.getCurrentNavigation().extras.state.videoDetails));
      }else{
        console.log('no state')
      }
      console.log('videoDetails:', this.videoDetails);

    });
  }
}
