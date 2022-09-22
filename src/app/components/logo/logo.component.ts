import { Component, OnInit } from '@angular/core';
import {Router}  from '@angular/router';

@Component({
  selector: 'dadb-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.css']
})
export class LogoComponent implements OnInit {
  logoClassStyle: string='app_logo';
  logoTextClassStyle: string='app_logo__text--orange';

  constructor(private router: Router) { }

  setLogoClassStyle(url:string) : void{
    const urlCharacteres = url.split('/');
    if(urlCharacteres.includes("panelPrincipal")){
      this.logoClassStyle='app_logo--modified';
      this.logoTextClassStyle='app_logo__text--white';
      return;
    }
  }

  ngOnInit(): void {
    this.setLogoClassStyle(this.router.url);
  }

}
