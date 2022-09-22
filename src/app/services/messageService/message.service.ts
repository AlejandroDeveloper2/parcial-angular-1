import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  messages: string[] = [];

  addMesage(message:string):void{
    this.messages.push(message);
  }

  cleanMessages():void{
    this.messages = [];
  }

  constructor() { }
}
