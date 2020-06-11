import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-details-button',
  templateUrl: './details-button.component.html',
  styleUrls: ['./details-button.component.scss']
})
export class DetailsButtonComponent implements OnInit {

  @Input() value;// data from home page
  @Output() clickDetails = new EventEmitter<any>();
  constructor(private router: Router) { }

  ngOnInit(): void {
    // console.log(this.value);
  }

  goToDetails() {
    // this.clickDetails.emit(this.value);
    console.log(this.value);
    const navigationExtra: NavigationExtras = {
      state: {
        videoDetails: this.value
      }
    }
    this.router.navigateByUrl('video-details', navigationExtra);
  }
}
