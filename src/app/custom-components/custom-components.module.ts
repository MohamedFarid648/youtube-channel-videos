import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFoundComponent } from './not-found/not-found.component';
import { DisplayThumbnailsComponent } from './display-thumbnails/display-thumbnails.component';
import { DetailsButtonComponent } from './details-button/details-button.component';
import { TransferVideoDetailsService } from '../custom-services/transfer-video-details.service';



@NgModule({
  declarations: [NotFoundComponent, DisplayThumbnailsComponent, DetailsButtonComponent],
  imports: [
    CommonModule
  ],
  exports: [NotFoundComponent, DisplayThumbnailsComponent,DetailsButtonComponent],
  providers:[TransferVideoDetailsService]
})
export class CustomComponentsModule { }
