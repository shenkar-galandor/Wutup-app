import {Component, OnInit, Input, OnChanges} from '@angular/core';

@Component({
  selector: 'app-letters',
  templateUrl: './letters.component.html',
  styleUrls: ['./letters.component.css']
})
export class LettersComponent implements OnInit, OnChanges {

  @Input() selectedLetter: string;
  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(){
    location.hash= '#letter'+ this.selectedLetter.toUpperCase();
    let element = document.getElementById('inp').focus();
  }

}
