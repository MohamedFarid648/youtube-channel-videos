import { KindEtag } from './channelVideosResponse'

export class VideoDetailsResponse extends KindEtag {

    items: Array<ItemDetails>;
    pageInfo: PageInfo
}

export class ItemDetails extends KindEtag {
    id: string;
    statistics: VideoStatistics;
    contentDetails:ContentDetails;

}

export class VideoStatistics {
    viewCount: number;
    likeCount: number;
    dislikeCount: number;
    favoriteCount: number;
    commentCount: number;
}

export class PageInfo {
    totalResults: number;
    resultsPerPage: number;
}

export class ContentDetails {
    duration: string;
    dimension: string;
    definition: string;
    caption: boolean;
    licensedContent: boolean;
    contentRating: {};
    projection: string;
}