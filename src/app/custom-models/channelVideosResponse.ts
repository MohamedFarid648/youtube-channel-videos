import { VideoStatistics, ContentDetails } from './videoDetailsResponse';

export class KindEtag{
    kind: string;
    etag: string;
}
export class VideoChannelResponse extends KindEtag{
    nextPageToken: string;
    regionCode: string;
    pageInfo: PageInfo;
    items: Array<VideoItemDetails>
}

export class PageInfo {
    totalResults: number;
    resultsPerPage: number;
}

export class VideoItemDetails extends KindEtag {
    id: VideoItemId;
    snippet: Snippet;
}

export class VideoItemId {
    kind: string;
    videoId: string;
}
export class Snippet {

    publishedAt: string;
    channelId: string;
    videoId: string;
    title: string;
    description: string;
    thumbnails: Thumbnail
    channelTitle: string;
    liveBroadcastContent: string;
    publishTime: string;
    statistics:VideoStatistics;
    ContentDetails:ContentDetails;


}


export class Thumbnail {
    default: PictureProperty;
    medium: PictureProperty;
    high: PictureProperty;
}

export class PictureProperty {
    url: string;
    width: number;
    height: number;
}

