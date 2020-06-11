import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiConstants } from '../custom-models/apiConstants';
import { VideoChannelResponse } from '../custom-models/getVideoChannelResponse';

@Injectable({
  providedIn: 'root'
})
export class GetChannelVideosService {


  constructor(private httpClient: HttpClient) { }
  public getSpecificChannelVideos(channelId, userKey) {
    return this.httpClient.get<VideoChannelResponse>(`https://www.googleapis.com/youtube/v3/search?key=${userKey}&channelId=${channelId}&part=snippet,id&order=date&maxResults=50`);
  }

}
