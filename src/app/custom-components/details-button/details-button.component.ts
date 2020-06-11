import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { TransferVideoDetailsService } from 'src/app/custom-services/transfer-video-details.service';

@Component({
  selector: 'app-details-button',
  templateUrl: './details-button.component.html',
  styleUrls: ['./details-button.component.scss']
})
export class DetailsButtonComponent implements OnInit {

  @Input() value;// data from home page
  constructor(private router: Router, private transferVideoDetailsService: TransferVideoDetailsService) { }

  ngOnInit(): void {
  }

  goToDetails() {
    localStorage.setItem('videoDetails',JSON.stringify(this.value));
    this.router.navigate(['video-details']);
  }
}
