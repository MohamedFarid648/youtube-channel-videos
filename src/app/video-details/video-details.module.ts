import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VideoDetailsRoutingModule } from './video-details-routing.module';
import { VideoDetailsComponent } from './video-details.component';


@NgModule({
  declarations: [VideoDetailsComponent],
  imports: [
    CommonModule,
    VideoDetailsRoutingModule
  ],
  exports: [VideoDetailsComponent]
})
export class VideoDetailsModule { }
