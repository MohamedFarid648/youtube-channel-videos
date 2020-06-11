import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Snippet } from '../custom-models/channelVideosResponse';

@Injectable({
  providedIn: 'root'
})
export class TransferVideoDetailsService {
  private videoDetailsObseravable = new Subject<any>();
  constructor() { }

  setVideoDetails(value: any): Observable<any> {
    this.videoDetailsObseravable.next(value);
    return this.videoDetailsObseravable;
  }

  getVideoDetails(): Observable<any> {

    return this.videoDetailsObseravable.asObservable();
  }
}
