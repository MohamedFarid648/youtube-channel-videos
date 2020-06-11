import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Snippet } from '../custom-models/channelVideosResponse';
import { TransferVideoDetailsService } from '../custom-services/transfer-video-details.service';
import { StarRatingComponent } from 'ng-starrating';
import { GetChannelVideosService } from '../custom-services/get-channel-videos.service';

@Component({
  selector: 'app-video-details',
  templateUrl: './video-details.component.html',
  styleUrls: ['./video-details.component.scss']
})
export class VideoDetailsComponent implements OnInit {

  videoDetails: Snippet;
  constructor(public router: Router, public activatedRoute: ActivatedRoute,
    private getChannelVideosService: GetChannelVideosService,
    private transferVideoDetailsService: TransferVideoDetailsService) { }

  ngOnInit(): void {
    this.getParameters();
  }


  getVideoDetails() {
    this.getChannelVideosService.getSpecificVideoDetails(this.videoDetails.videoId, localStorage.getItem('userKey')).subscribe(res => {
      console.log(res);
      //res.items[0].statistics.
      this.videoDetails.statistics = JSON.parse(JSON.stringify(res.items[0].statistics));
      this.videoDetails.ContentDetails = JSON.parse(JSON.stringify(res.items[0].contentDetails));
      localStorage.setItem('videoDetails',JSON.stringify(this.videoDetails));
    });
  }
  getParameters() {
    this.videoDetails = JSON.parse(localStorage.getItem('videoDetails'));
    this.getVideoDetails();
    console.log(this.videoDetails);
  }
  onRate(event) {
    console.log(event);
  }
}

