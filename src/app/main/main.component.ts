import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  objectToSend = {'songTitle': 'something',
                  'author': 'something',
                  'class': 'fa fa-play',
                  'status': '../../../assets/off.png'};

  getParams(data) {
    this.objectToSend = data;
  }

  constructor() { }

  ngOnInit() {
  }

}
