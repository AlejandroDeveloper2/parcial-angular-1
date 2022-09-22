import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from "@angular/common";

@Component({
  selector: 'dadb-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {
  userName:string='';
  isMenuVisible:boolean=false;

  constructor(private route : ActivatedRoute, private location:Location   ) { }

  getUserData():void{
    const user = String(this.route.snapshot.paramMap.get('userName'));
    this.userName = user;
  }

  goBack():void{
    this.location.back();
  }

  toggleLateralMenu():void{
    this.isMenuVisible=!this.isMenuVisible;
  }

  ngOnInit(): void {
    this.getUserData();
  }

}
