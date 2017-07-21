import { Component, OnInit, ViewChild, ElementRef, EventEmitter, Output} from '@angular/core';
import {Song} from '../../services/song';
import {PlaylistService} from '../../services/playlistService';
import {Player} from '../../services/player';

@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.css']
})
export class PlaylistComponent implements OnInit {

  playlist: Song[];
  songs: Player[] = [];
  @ViewChild('personalSideBar') personalSideBar: ElementRef;
  @ViewChild('songList') songList: ElementRef;
  elementToPass ='';
  songIdToSend: string;
  songTitleToSend:string;
  songAuthorToSend:string;
  songImagetoSend: string;
  toggleButton = true;
  togglePlaylist = true;
  togglePlayzone = false;
  constructor(private playlistService: PlaylistService, private player: Player) { }

  ngOnInit() {
    this.playlistService.search()
      .then((playlist: Song[]) => {
        this.playlist = playlist.map((song) => {
          this.songs.push(new Player());
          return song;
        });
      });
  }

  openNav(val) {
      this.personalSideBar.nativeElement.style.width = '250px';
      this.togglePlaylist = !this.togglePlaylist;
}

  closeNav() {
    this.personalSideBar.nativeElement.style.width = '0px';
    this.togglePlaylist = !this.togglePlaylist;
  }

  addSong(songId:string, title:string, author:string, year:string, image:string, i:number) {
    let addSongParams:object = {'song_id': songId,
                                'song_title': title,
                                'song_author': author,
                                'year': year,
                                'image': image};
  this.playlistService.addSong(addSongParams);
  this.elementToPass = this.songList.nativeElement.querySelector(`div:nth-child(${i + 1})`).innerHTML;
  this.songIdToSend = songId;
  this.songImagetoSend = image;
  this.songAuthorToSend = author;
  this.songTitleToSend = title;
  this.elementToPass = 'hi';
  }

  changeButton(){
    this.toggleButton = !this.toggleButton;
  }

  onPlay() {
    if (this.toggleButton === true){
      return 'inline';
    }else {
      return 'none';
    }
  }

  onPause() {
    if (this.toggleButton === false){
      return 'inline';
    }else {
      return 'none';
    }
  }

  closePlaylist(){
    if (this.togglePlaylist === false) {
      return 'block';
    }else{
      return 'none';
    }
  }

}
