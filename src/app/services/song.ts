/**
 * Created by Or Adar on 6/17/2017.
 */
export class Song{
  id: string;
  link: string;
  kind: string;
  publishedAt: string;
  channelId: string;
  channelTitle: string;
  title: string;
  description: string;
  thumbnails: {
  default: {
    url: string,
    width: number,
    height: number
  };
  medium: {
    url: string,
    width: number,
    height: number
  };
  high: {
    url: string,
    width: number,
    height: number
  }
 };
}

