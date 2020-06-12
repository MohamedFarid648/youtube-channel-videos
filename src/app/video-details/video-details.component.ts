import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Snippet } from '../custom-models/channelVideosResponse';
import { TransferVideoDetailsService } from '../custom-services/transfer-video-details.service';
import { GetChannelVideosService } from '../custom-services/get-channel-videos.service';

@Component({
  selector: 'app-video-details',
  templateUrl: './video-details.component.html',
  styleUrls: ['./video-details.component.scss']
})
export class VideoDetailsComponent implements OnInit {

  videoDetails: Snippet;
  currentRate: number;
  videoIndex: number = -1;
  videoTime: string;
  favouriteVideos: Array<Snippet> = [];
  isInFavouriteList: boolean = false;
  constructor(public router: Router, public activatedRoute: ActivatedRoute,
    private getChannelVideosService: GetChannelVideosService,
    private transferVideoDetailsService: TransferVideoDetailsService) { }

  ngOnInit(): void {
    this.getParameters();
  }

  getParameters() {
    if (localStorage.getItem('favouriteVideos')) {
      this.favouriteVideos = JSON.parse(localStorage.getItem('favouriteVideos'));
    }
    this.videoDetails = JSON.parse(localStorage.getItem('videoDetails'));
    this.favouriteVideos.forEach((v, index) => {
      if (v.videoId == this.videoDetails.videoId) {
        this.videoIndex = index;
        this.isInFavouriteList = true;
        this.videoDetails = JSON.parse(JSON.stringify(v));
      }
    });
    this.getVideoDetails();
    console.log(this.videoDetails);
  }

  getVideoDetails() {
    this.getChannelVideosService.getSpecificVideoDetails(this.videoDetails.videoId, localStorage.getItem('userKey')).subscribe(res => {
      console.log(res);
      if (res.items[0].statistics) {
        this.videoDetails.statistics = JSON.parse(JSON.stringify(res.items[0].statistics));
      }
      if (res.items[0].contentDetails) {
        this.videoDetails.contentDetails = JSON.parse(JSON.stringify(res.items[0].contentDetails));
        let h = this.videoDetails.contentDetails.duration.split('PT')[1].split('H')[0];
        let m = this.videoDetails.contentDetails.duration.split('PT')[1].split('H')[1].split('M')[0];
        let s = this.videoDetails.contentDetails.duration.split('PT')[1].split('H')[1].split('M')[1].split('S')[0];
        this.videoDetails.videoDuration = `${h}:${m}:${s}`;
      }
      localStorage.setItem('videoDetails', JSON.stringify(this.videoDetails));
      this.getVideoIndex();
      if (this.videoIndex != -1) {
        this.updateFavouriteList();
      }
    }, err => {
      console.log(err);
      alert("Something went wrong , please try again later");
    });
  }

  checkIfInFavouriteList() {
    this.getVideoIndex();
    if (this.videoIndex != -1) {
      this.updateFavouriteList();
    } else {
      this.pushToFavouriteList();
    }
  }

  updateFavouriteList() {
    this.favouriteVideos[this.videoIndex] = JSON.parse(JSON.stringify(this.videoDetails));
    localStorage.setItem('favouriteVideos', JSON.stringify(this.favouriteVideos));
  }

  pushToFavouriteList() {
    this.favouriteVideos.push(this.videoDetails);
    localStorage.setItem('favouriteVideos', JSON.stringify(this.favouriteVideos));
  }

  spliceFromFavouriteList() {

    this.getVideoIndex();
    this.favouriteVideos[this.videoIndex] = JSON.parse(JSON.stringify(this.videoDetails));
    if (!this.videoDetails.rateValue) {
      this.favouriteVideos.splice(this.videoIndex, 1);
    }
    localStorage.setItem('favouriteVideos', JSON.stringify(this.favouriteVideos));
  }

  getVideoIndex() {
    this.videoIndex = this.favouriteVideos.findIndex(v => v.videoId == this.videoDetails.videoId);
    console.log(this.videoIndex);
  }

  changeRate(event) {
    console.log(event);
    if (event) {
      this.videoDetails.rateValue = event;
      this.checkIfInFavouriteList();
    }
  }

  addToFavourite() {
    this.videoDetails.isFavouriteVideo = true;
    this.checkIfInFavouriteList();
  }

  removeFromFavourite() {
    this.videoDetails.isFavouriteVideo = false;
    this.spliceFromFavouriteList();
  }

  goToHomePage() {
    this.router.navigateByUrl('home');
  }
}

