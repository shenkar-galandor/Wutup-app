import { Component } from '@angular/core';
import {Song} from './services/song';
import {PlaylistService} from './services/playlistService';
import {Player} from './services/player';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(private playlistService: PlaylistService, private player: Player) {}
}
