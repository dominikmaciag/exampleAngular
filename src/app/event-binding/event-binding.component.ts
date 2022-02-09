import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent{

inputText = '';
colorClass = 'color';
isDisable = true;

constructor(){}


onFocus(){
  this.colorClass = 'color2';
}

onClick(event: any){
  console.log(event);
}

onMouseMove(event: any){
  console.log('x: ' + event.clientX + ', y: ' + event.clientY);
}

onPaste(){
this.inputText = "Don't paste, write";
}

change(){
  this.isDisable = false;
}
}
