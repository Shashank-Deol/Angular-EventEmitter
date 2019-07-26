import { Component, Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'hello',
  template: `<h1 (click)="sendMessageToParent()">Hello {{name}}!</h1>`,
  styles: [`h1 { font-family: Lato; }`]
})
export class HelloComponent  {
    name1="Shashank";
  @Input() name: string;
  @Output() sendMessage:EventEmitter<string> = new EventEmitter<string>();




  sendMessageToParent(){
    this.sendMessage.emit("new event of type sendMessage Occured");
  }
}
