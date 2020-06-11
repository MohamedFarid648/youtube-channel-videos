import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiConstants } from '../custom-models/apiConstants';
import { VideoChannelResponse } from '../custom-models/channelVideosResponse';
import { VideoDetailsResponse } from '../custom-models/videoDetailsResponse';

@Injectable({
  providedIn: 'root'
})
export class GetChannelVideosService {


  constructor(private httpClient: HttpClient) { }
  public getSpecificChannelVideos(channelId, userKey) {
    return this.httpClient.get<VideoChannelResponse>(ApiConstants.getAPILink(channelId,userKey));
  }

  public getSpecificVideoDetails(VideoId, userKey) {
    return this.httpClient.get<VideoDetailsResponse>(ApiConstants.getVideoAPILink(VideoId,userKey));
  }

}
