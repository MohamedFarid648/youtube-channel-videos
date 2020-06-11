
export class ApiConstants {

  static getAPIKey() {
    // return 'AIzaSyDt3dbTG6qeFyKMEZalLyjIlXUuCmGRqzI';
    return 'AIzaSyBY2c8cvLUAeNivlTGUCm_HNSwclBwiOA0'
  }

  static getAPILink(channelId, userKey) {
    return `https://www.googleapis.com/youtube/v3/search?key=${userKey}&channelId=${channelId}&part=snippet,id&order=date&maxResults=50`;
  }

  static getVideoAPILink(videoId, userKey) {
    return `https://www.googleapis.com/youtube/v3/videos?part=contentDetails&part=statistics&&id=${videoId}&key=${userKey}`
  }
}
