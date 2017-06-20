/**
 * Created by Or Adar on 6/17/2017.
 */
import { Injectable } from '@angular/core';
import {Song} from '../services/song';
import {PersonalSong} from '../services/personal_song';
import {Http, Response} from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()

export class PlaylistService {
  personPlaylist: PersonalSong[];

  private urlPath:string = 'http://localhost:3000/';
  constructor(private http: Http) {}

  search(): Promise<Song[]> {
    return this.http.get(this.urlPath + 'search')
      .toPromise()
      .then(response => response.json() as Song[])
      .catch(this.handleError);
  }

  getAllPlaylist(): Promise<PersonalSong[]> {
    return this.http.get(this.urlPath + 'getAllPlaylist')
      .toPromise()
      .then(response => response.json() as PersonalSong[])
      .catch(this.handleError);
  }

  deleteSong(param: object): Promise<any> {
    return this.http.post(this.urlPath + 'deleteSong', param)
      .toPromise()
      .then(response => response.json() as any)
      .catch(this.handleError);
  }

  addSong(param: object): Promise<any> {
    return this.http.post(this.urlPath + 'addSong', param)
      .toPromise()
      .then(response => response.json() as any)
      .catch(this.handleError);
  }

  private handleError (error: any) {
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
  }
}
