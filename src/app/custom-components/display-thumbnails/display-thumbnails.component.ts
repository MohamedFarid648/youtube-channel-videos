import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-display-thumbnails',
  templateUrl: './display-thumbnails.component.html',
  styleUrls: ['./display-thumbnails.component.scss']
})
export class DisplayThumbnailsComponent implements OnInit {

  @Input() thumbnail:any; // data from table

  constructor() { 
    console.log('thumbnail:');
    console.log(this.thumbnail);
  }

  ngOnInit(): void {


  }

}
