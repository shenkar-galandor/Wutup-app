import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';
import {PlaylistService} from '../../../services/playlistService';
import {PersonalSong} from '../../../services/personal_song';
import {PlaylistSong} from '../../../services/personal_song';
import {Player} from '../../../services/player';
@Component({
  selector: 'app-personal-playlist',
  templateUrl: './personal-playlist.component.html',
  styleUrls: ['./personal-playlist.component.css']
})
export class PersonalPlaylistComponent implements OnInit {
  playlist: PersonalSong[];
  songs: Player[] = [];
  @ViewChild('selectedSong') selSong: ElementRef;
  @Input() songId: string;
  @Input() songTitle: string;
  @Input() songAuthor: string;
  @Input() songImage: string;

  constructor(private playlistService: PlaylistService) {
  }

  ngOnInit() {
    this.playlistService.getAllPlaylist()
      .then((playlist: PersonalSong[]) => {
        this.playlist = playlist.map((personalSong) => {
          for (let j = 0; j < personalSong.playlist.length; j++) {
            this.songs.push(new Player());
          }
          return personalSong;
        });
      });
  }


  removeSong(val: number, songId: string) {
    let deletedId: object = {'song_id': songId};
    this.playlistService.deleteSong(deletedId);
    this.selSong.nativeElement.querySelector(`div:nth-child(${val + 1})`).style.display = 'none';

  }

  // @Input() set elementText(elementText: string){
  //   if (elementText != '') {
  //     this.selSong.nativeElement.innerHTML += elementText;
  //
  //   }
  // }

  @Input() set elementText(elementText: string){
    if (elementText != '') {
      let i = this.playlist[0].playlist.length;
      this.playlist[0].playlist.push(new PlaylistSong());
      this.playlist[0].playlist[i].image = this.songImage;
      this.playlist[0].playlist[i].songId = this.songId;
      this.playlist[0].playlist[i].songAuthor = this.songAuthor;
      this.playlist[0].playlist[i].songTitle = this.songTitle;
      this.playlist[0].playlist[i].yearOfCreation = '2007';
    }
  }

}



