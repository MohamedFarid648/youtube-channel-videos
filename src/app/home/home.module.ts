import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { GetChannelVideosService } from '../custom-services/get-channel-videos.service';
import { HttpClientModule, HttpClient } from '@angular/common/http';


@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule, FormsModule, ReactiveFormsModule,
    HttpClientModule,
    HomeRoutingModule,
    Ng2SmartTableModule

  ],providers:[GetChannelVideosService , HttpClient]
})
export class HomeModule { }
