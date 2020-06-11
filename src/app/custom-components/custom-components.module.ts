import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFoundComponent } from './not-found/not-found.component';
import { DisplayThumbnailsComponent } from './display-thumbnails/display-thumbnails.component';
import { DetailsButtonComponent } from './details-button/details-button.component';



@NgModule({
  declarations: [NotFoundComponent, DisplayThumbnailsComponent, DetailsButtonComponent],
  imports: [
    CommonModule
  ],
  exports: [NotFoundComponent, DisplayThumbnailsComponent,DetailsButtonComponent]
})
export class CustomComponentsModule { }
