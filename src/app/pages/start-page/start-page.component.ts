import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
 
import { checkEmptyFields } from "../../helpers";
import  { MessageService } from "../../services/messageService/message.service";

@Component({
  selector: 'dadb-start-page',
  templateUrl: './start-page.component.html',
  styleUrls: ['./start-page.component.css']
})
export class StartPageComponent implements OnInit {
  userName?:string='';
  
  constructor(private messageService:MessageService, private router:Router) { }

  sendForm(userName:string) {
    const isError = checkEmptyFields([userName]);
    if(isError){
      this.messageService.addMesage('Los campos son obligatorios!');
      return;
    } 
    this.userName = userName;
    this.router.navigateByUrl(`/panelPrincipal/${this.userName}`);
  }

  ngOnInit(): void {
  }

}
