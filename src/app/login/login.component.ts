import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  letterToSend = 'a';
  constructor() { }

  ngOnInit() {
  }

  onLetterSelect(letter:string) {
    this.letterToSend = letter.toUpperCase();
  }

}
