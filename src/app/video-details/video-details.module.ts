import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VideoDetailsRoutingModule } from './video-details-routing.module';
import { VideoDetailsComponent } from './video-details.component';
import { TransferVideoDetailsService } from '../custom-services/transfer-video-details.service';
import { GetChannelVideosService } from '../custom-services/get-channel-videos.service';
import {NgbPaginationModule,NgbModule, NgbAlertModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [VideoDetailsComponent],
  imports: [
    CommonModule,
    VideoDetailsRoutingModule,
    NgbPaginationModule, NgbAlertModule,NgbModule
  ],
  exports: [VideoDetailsComponent],
  providers:[TransferVideoDetailsService , GetChannelVideosService]
})
export class VideoDetailsModule { }
