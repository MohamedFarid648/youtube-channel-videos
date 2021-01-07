import { Component, OnInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { GetChannelVideosService } from '../custom-services/get-channel-videos.service';
import { DisplayThumbnailsComponent } from '../custom-components/display-thumbnails/display-thumbnails.component';
import { formatDate } from '@angular/common';
import { DetailsButtonComponent } from '../custom-components/details-button/details-button.component';
import { ApiConstants } from '../custom-models/apiConstants';
import { Snippet, Thumbnail } from '../custom-models/channelVideosResponse';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  selectedChannel: string = 'UCeeDRl9JniHAXcwiPZ1_Sgw';
  userKey: string = ApiConstants.getAPIKey();
  listedVideos: Array<Snippet> = [];
  searchedListedVideos: Array<Snippet> = [];

  selectedPaging: string = '20';

  settings = {
    actions:false,
    mode: 'external',
    pager: {
      display: true,
      //perPage: 5
    },
      columns: {
        thumbnails: {
          title: '',
          filter: false,
          valuePrepareFunction: (thumbnail: Thumbnail) => {
            return `<img src="${thumbnail.default.url}"/>`
          },
          type: 'html',
          //renderComponent: DisplayThumbnailsComponent,
        },
        title: {
          title: 'Title',
          type: 'string',
        },
        publishedAt: {
          title: 'Publish Date',
          type: 'string',
          valuePrepareFunction: (date) => {
            return formatDate(date, 'dd-mm-yyyy', 'en-US');
          }
        },
        videoId: {
          title: 'Link',
          type: 'html',
          valuePrepareFunction: (data) => {
            console.log(data);
            return `<a target="blank" href="https://www.youtube.com/watch?v=${data}">View<a>`;
          }
        },
        actions: {
          title: 'Details',
          filter: false,
          valuePrepareFunction: (cell, row, data) => {
            return row;
          },
          type: 'custom',
          renderComponent: DetailsButtonComponent,
        }
      },

  }
  source: LocalDataSource;//= new LocalDataSource();

  constructor(private getChannelVideosService: GetChannelVideosService, private router: Router) { }

  ngOnInit(): void {
    this.listedVideos = localStorage.getItem('ListedVideos') ? JSON.parse(localStorage.getItem('ListedVideos')) : [];
    console.log(this.listedVideos);
    if (this.listedVideos.length == 0) {
      this.getChannelVideos();
    } else {
      this.loadSourceTable();
    }
  }


  getChannelVideos() {
    if (this.selectedChannel && this.userKey) {

      this.getChannelVideosService.getSpecificChannelVideos(this.selectedChannel, this.userKey).subscribe(res => {
        console.log(res);
        this.listedVideos = [];
        res.items.forEach(i => {
          i.snippet.videoId = i.id.videoId;
          this.listedVideos.push(i.snippet);
        });
        localStorage.setItem('ListedVideos', JSON.stringify(this.listedVideos));
        localStorage.setItem('userKey', this.userKey);
        this.loadSourceTable();
      }, err => {
        console.log(err);
        alert("Something went wrong , please check your user key or  try again later");
      });
    } else {
      alert('please fill all fields');
    }

  }

  loadSourceTable() {
    this.searchedListedVideos = JSON.parse(JSON.stringify(this.listedVideos));
    this.source = new LocalDataSource(this.searchedListedVideos);
    this.source.setPaging(1, parseInt(this.selectedPaging));
    this.source.load(this.searchedListedVideos);
  }

  onSearch(query: string = '') {
    console.log(query);
    if (query === '') {
      this.source.load(this.listedVideos);
    } else {
      this.searchedListedVideos = this.listedVideos.filter(video => {
        if (video.title.toLowerCase().includes(query.toLowerCase())) {
          return video;
        }
      });
      this.source.load(this.searchedListedVideos);
      // this.source.setFilter([
      //   {
      //     field: 'title',
      //     search: query
      //   }
      // ], false);//false to change AND to OR

    }
  }

  editRow(event) {

    console.log(event);
    let navigtionExtras = {
      state: {
        favouriteVideos: event.data
      },
      // relativeTo: this.activatedRoute
    };
    this.router.navigate(['video-details'], navigtionExtras);

  }

}