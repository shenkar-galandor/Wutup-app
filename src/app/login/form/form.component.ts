import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import {Router} from '@angular/router';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  keyframes
} from '@angular/animations';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
  animations:[trigger('changeText',[
    state('small',style({
      transform:'scale(1)'
    })),
    state('large',style({
      transform:'scale(1)'
    })),
    transition('small <=> large',animate('500ms',keyframes([
      style({opacity: 0,transform: 'translate3d(-3000px, 0, 0)',offset:0}),
      style({opacity: 1,transform: 'translate3d(25px, 0, 0)',offset:.60}),
      style({transform: 'scale3d(-10px, 1, 1)',offset:.75}),
      style({transform: 'scale3d(5px, 1, 1)',offset:.90}),
      style({transform: 'none',offset:1})
    ])))
  ])]
})
export class FormComponent implements OnInit {
@Output() letSelect = new EventEmitter<string>();

constructor(private router: Router) { }

  fullName:string = "";
  email:string = "";
  pass:string = "";
  inputText:string='';
  stage = 0;
  state:string = 'small';
  selLetter:string;

  showText(){
    if (this.stage == 0)
      return "Full Name";
    else if (this.stage == 1)
      return "Email";
    else if (this.stage == 2)
      return "Password";
  }

  incrementStage(){
    if (this.stage == 0){
      this.fullName = this.inputText;
      this.inputText = '';
    }else if(this.stage == 1){
      this.email = this.inputText;
      this.inputText = '';}
      else if(this.stage == 2){
      this.pass = this.inputText;
      this.inputText = '';
    }
    this.stage++;
    if (this.stage == 3){
      this.router.navigate(['/main']);
      this.stage =0;
    }
  }

 animateMe(){
    if (this.state === 'small'){
      this.state = 'large';
    }else if(this.state === 'large'){
      this.state = 'small';
    }
 }

  ngOnInit() {
  }

  sendLetter(key){
   console.log(key.key);
   this.selLetter = key.key;
   this.letSelect.emit(this.selLetter);
  }
}
