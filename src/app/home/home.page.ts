import { Component } from '@angular/core';
import { AuthService } from "../services/auth.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  darkMode: boolean = false;
  constructor( public authservice: AuthService, private router : Router ) {}

  applydarkMode(){
    this.darkMode = !this.darkMode;
    document.body.classList.toggle('dark');
  }
  OnLogout(){
    this.authservice.logout();
  }
}