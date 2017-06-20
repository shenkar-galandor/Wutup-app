/**
 * Created by Or Adar on 6/20/2017.
 */
export class PlaylistSong {
  songId: string;
  songTitle: string;
  songAuthor: string;
  yearOfCreation: string;
  image: string;
}

export class PersonalSong {
  _id: string;
  userId: number;
  playlist: PlaylistSong[];
}
