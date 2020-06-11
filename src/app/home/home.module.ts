import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { GetChannelVideosService } from '../custom-services/get-channel-videos.service';


@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule, FormsModule, ReactiveFormsModule,
    HomeRoutingModule,
    Ng2SmartTableModule

  ],providers:[GetChannelVideosService ]
})
export class HomeModule { }
