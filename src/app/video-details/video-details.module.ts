import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VideoDetailsRoutingModule } from './video-details-routing.module';
import { VideoDetailsComponent } from './video-details.component';
import { TransferVideoDetailsService } from '../custom-services/transfer-video-details.service';
import { RatingModule } from 'ng-starrating';
import { GetChannelVideosService } from '../custom-services/get-channel-videos.service';

@NgModule({
  declarations: [VideoDetailsComponent],
  imports: [
    CommonModule,RatingModule,
    VideoDetailsRoutingModule
  ],
  exports: [VideoDetailsComponent],
  providers:[TransferVideoDetailsService , GetChannelVideosService]
})
export class VideoDetailsModule { }
