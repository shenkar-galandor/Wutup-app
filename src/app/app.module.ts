import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AppRoutingModule} from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { FormComponent } from './login/form/form.component';
import { LettersComponent } from './login/letters/letters.component';
import { FooterComponent } from './footer/footer.component';
import { MainComponent } from './main/main.component';
import { NavComponent } from './main/nav/nav.component';
import { SearchComponent } from './main/search/search.component';
import { PlaylistComponent } from './main/playlist/playlist.component';
import { YoutubePlayerModule } from 'ng2-youtube-player';
import { PersonalPlaylistComponent } from './main/playlist/personal-playlist/personal-playlist.component';
import {PlaylistService} from './services/playlistService';
import {Player} from './services/player';
import { MainFooterComponent } from './main/main-footer/main-footer.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    FormComponent,
    LettersComponent,
    FooterComponent,
    MainComponent,
    NavComponent,
    SearchComponent,
    PlaylistComponent,
    PersonalPlaylistComponent,
    MainFooterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    YoutubePlayerModule,
    AppRoutingModule
    ],
  providers: [PlaylistService, Player],
  bootstrap: [AppComponent]
})
export class AppModule { }
